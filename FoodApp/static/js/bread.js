var Bcart = document.querySelector('#Bcart');
var Btotal = document.querySelector('#Btotal');

// add pizza

function addBread(bid){
//    get pizza name
    breadId = '#bre' + bid;
    var name = document.querySelector(breadId).innerHTML;
//     get pizza price
    var radio = 'bread' + bid;
    var pri = document.getElementsByName(radio);
    var price, size;
    if (pri[0].checked){
        price = pri[0].value;
        size = ' ';
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

    btn = '<div class="del" onclick="removeBread(' + cartSize + ')">-</div>';
    Btotal.innerHTML = 'Total: ₹' + total;
    Bcart.innerHTML += '<li>'+ name + ' ' + size +' :  ₹' + price + btn +'</li>';
}

function bshoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    Bcart.innerHTML = '';
    for (let i = 0; i<cartSize; i++){
        btn = '<div class="del" onclick="removeBread(' + i + ')">-</div>';
        Bcart.innerHTML += '<li>'+ orders[i][0] + orders[i][1] + ' ' + ' :  ₹' + orders[i][2] + btn +'</li>';
    }
    Btotal.innerHTML =  'Total: ₹' + total;
}

 bshoppingCart();

 function removeBread(n){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total) - Number(orders[n][2]);
    orders.splice(n,1)
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    cart.innerHTML = orders.length;
    bshoppingCart();
 }