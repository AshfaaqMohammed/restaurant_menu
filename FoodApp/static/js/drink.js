var ccart = document.querySelector('#ccart');
var ctotal = document.querySelector('#ctotal');

// add pizza

function addDrink(cid){
//    get pizza name
    drinkId = '#dri' + cid;
    var name = document.querySelector(drinkId).innerHTML;
//     get pizza price
    var radio = 'drink' + cid;
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

    btn = '<div class="del" onclick="removeDrink(' + cartSize + ')">-</div>';
    ctotal.innerHTML = 'Total: ₹' + total;
    ccart.innerHTML += '<li>'+ name + ' ' + size +' :  ₹' + price + btn +'</li>';
}

function cshoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    ccart.innerHTML = '';
    for (let i = 0; i<cartSize; i++){
        btn = '<div class="del" onclick="removeDrink(' + i + ')">-</div>';
        ccart.innerHTML += '<li>'+ orders[i][0] + orders[i][1] + ' ' + ' :  ₹' + orders[i][2] + btn +'</li>';
    }
    ctotal.innerHTML =  'Total: ₹' + total;
}

 cshoppingCart();

 function removeDrink(n){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total) - Number(orders[n][2]);
    orders.splice(n,1)
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    cart.innerHTML = orders.length;
    cshoppingCart();
 }