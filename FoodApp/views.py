from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import NewUserForm
from .models import Pizza, Order, Item, Starter, Bread, MainCourse, Rice, Dessert, Drinks
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
import random
import json
from decimal import Decimal


def randomOrderNumber(length):
    sample = 'ABCDEFGH0123456789'
    numberO = ''.join((random.choice(sample) for i in range(length)))
    return numberO


def index(request):
    request.session.set_expiry(0)
    ctx = {'active_link': 'index'}
    return render(request, 'food/index.html', ctx)


def pizza(request):
    request.session.set_expiry(0)
    pizzas = Pizza.objects.all()
    ctx = {'pizzas': pizzas, 'active_link': 'pizza'}
    return render(request, 'food/pizza.html', ctx)


def dessert(request):
    request.session.set_expiry(0)
    desserts = Dessert.objects.all()
    ctx = {'desserts': desserts, 'active_link': 'dessert'}
    return render(request, 'food/dessert.html', ctx)


def rice(request):
    request.session.set_expiry(0)
    rices = Rice.objects.all()
    ctx = {'rices': rices, 'active_link': 'rice'}
    return render(request, 'food/rice.html', ctx)


def maincours(request):
    request.session.set_expiry(0)
    courses = MainCourse.objects.all()
    ctx = {'courses': courses, 'active_link': 'MainCourse'}
    return render(request, 'food/maincourse.html', ctx)


def starter(request):
    request.session.set_expiry(0)
    starters = Starter.objects.all()
    ctx = {'starters': starters, 'active_link': 'starter'}
    return render(request, 'food/starters.html', ctx)


def bread(request):
    request.session.set_expiry(0)
    breads = Bread.objects.all()
    ctx = {'breads': breads, 'active_link': 'bread'}
    return render(request, 'food/bread.html', ctx)


def drink(request):
    request.session.set_expiry(0)
    drinks = Drinks.objects.all()
    ctx = {'drinks': drinks, 'active_link': 'drink'}
    return render(request, 'food/drink.html', ctx)


def is_ajax(request):
    return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'


@csrf_exempt
def order(request):
    request.session.set_expiry(0)
    if is_ajax(request):
        request.session['note'] = request.POST.get('note')
        request.session['order'] = request.POST.get('orders')
        orders = json.loads(request.session['order'])
        request.session['total'] = request.POST.get('total')
        # print(float(request.session['total']))
        randomNum = randomOrderNumber(6)

        while Order.objects.filter(number=randomNum).count() > 0:
            randomNum = randomOrderNumber(6)

        if request.user.is_authenticated:
            order = Order(customer=request.user,
                          number=randomNum,
                          bill=Decimal(request.session['total']),
                          note=request.session['note'])
            order.save()
            request.session['orderNum'] = order.number
            for article in orders:
                item = Item(
                    order=order,
                    name=article[0],
                    price=float(article[2]),
                    size=article[1]
                )
                item.save()

    ctx = {'active_link': 'order'}
    return render(request, 'food/order.html', ctx)


def success(request):
    orderNum = request.session['orderNum']
    total = request.session['total']
    # print('total : ', total)
    items = Item.objects.filter(order__number=orderNum)
    ctx = {'orderNum': orderNum, 'total': total, 'items': items}
    return render(request, 'food/success.html', ctx)


def signup(request):
    ctx = {}
    if request.method == 'POST':
        form = NewUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
        else:
            ctx['form'] = form
    else:
        form = NewUserForm()
        ctx['form'] = form
    return render(request, 'food/signup.html', ctx)


def logIn(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        pwd = request.POST.get('password')
        user = authenticate(request, username=username, password=pwd)
        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            messages.info(request, 'Please enter valid Username and Password.')

    ctx = {'active_link': 'login'}
    return render(request,'food/login.html', ctx)


def logOut(request):
    logout(request)
    return redirect('index')


