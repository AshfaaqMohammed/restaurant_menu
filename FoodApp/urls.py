from django.urls import path

from . import views

app_name = 'FoodApp'

urlpatterns = [
    path('pizza', views.pizza, name='pizza'),
    path('maincourse', views.maincours, name='maincourse'),
    path('dessert', views.dessert, name='dessert'),
    path('drink', views.drink, name='drink'),
    path('rice', views.rice, name='rice'),
    path('starter', views.starter, name='starter'),
    path('bread', views.bread, name='bread'),
    path('order', views.order, name='order'),
    path('success', views.success, name='success'),
    path('signup', views.signup, name='signup'),
    path('login', views.logIn, name='login'),
    path('logout', views.logOut, name='logout'),
]
