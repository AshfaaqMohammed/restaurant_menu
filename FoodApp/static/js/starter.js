var Scart = document.querySelector('#Scart');
var Stotal = document.querySelector('#Stotal');

// add pizza

function addStarter(sid){
//    get pizza name
    starterId = '#star' + sid;
    var name = document.querySelector(starterId).innerHTML;
//     get pizza price
    var radio = 'starter' + sid;
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

    btn = '<div class="del" onclick="removeStarters(' + cartSize + ')">-</div>';
    Stotal.innerHTML = 'Total: ₹' + total;
    Scart.innerHTML += '<li>'+ name + ' ' + size +' :  ₹' + price + btn +'</li>';
}

function sshoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    Scart.innerHTML = '';
    for (let i = 0; i<cartSize; i++){
        btn = '<div class="del" onclick="removeStarters(' + i + ')">-</div>';
        Scart.innerHTML += '<li>'+ orders[i][0] + orders[i][1] + ' ' + ' :  ₹' + orders[i][2] + btn +'</li>';
    }
    Stotal.innerHTML =  'Total: ₹' + total;
}

 sshoppingCart();

 function removeStarters(n){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total) - Number(orders[n][2]);
    orders.splice(n,1)
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    cart.innerHTML = orders.length;
    sshoppingCart();
 }