var pcart = document.querySelector('#pcart');
var ptotal = document.querySelector('#ptotal');

// add pizza

function addPizza(pid){
//    get pizza name
    pizzaId = '#piz' + pid;
    var name = document.querySelector(pizzaId).innerHTML;
//     get pizza price
    var radio = 'pizza' + pid;
    var pri = document.getElementsByName(radio);
    var size, price;
    if (pri[0].checked){
        price = pri[0].value;
        size = 'M';
    }
    else{
        price = pri[1].value;
        size = 'L';
    }

    if (!localStorage.getItem('orders')) {
        localStorage.setItem('orders', JSON.stringify([]));
    }
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;

    // saving item and total in localstorage.
    orders[cartSize] = [name, size, price];
    localStorage.setItem('orders', JSON.stringify(orders));

    total =  Number(total) + Number(price);
    localStorage.setItem('total', total);

    //updating number of items in shopping cart
    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;

    btn = '<div class="del" onclick="removePizza(' + cartSize + ')">-</div>';
    ptotal.innerHTML = 'Total: ₹' + total;
    pcart.innerHTML += '<li>'+ name + ' ' + size + ' :  ₹' + price + btn +'</li>';
}

function pshoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    pcart.innerHTML = '';
    for (let i = 0; i<cartSize; i++){
        btn = '<div class="del" onclick="removePizza(' + i + ')">-</div>';
        pcart.innerHTML += '<li>'+ orders[i][0] + ' ' + orders[i][1] + ' :  ₹' + orders[i][2] + btn +'</li>';
    }
    ptotal.innerHTML =  'Total: ₹' + total;
}

 pshoppingCart();

 function removePizza(n){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total) - Number(orders[n][2]);
    orders.splice(n,1)
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    cart.innerHTML = orders.length;
    pshoppingCart();
 }