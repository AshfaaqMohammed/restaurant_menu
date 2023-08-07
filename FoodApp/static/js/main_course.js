var mccart = document.querySelector('#mccart');
var mctotal = document.querySelector('#mctotal');

// add pizza

function addMainCourse(cid){
//    get pizza name
    maincourseId = '#cou' + cid;
    var name = document.querySelector(maincourseId).innerHTML;
//     get pizza price
    var radio = 'course' + cid;
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

    btn = '<div class="del" onclick="removeMainCourse(' + cartSize + ')">-</div>';
    mctotal.innerHTML = 'Total: ₹' + total;
    mccart.innerHTML += '<li>'+ name + ' ' + size + ' :  ₹' + price + btn +'</li>';
}

function mcshoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    mccart.innerHTML = '';
    for (let i = 0; i<cartSize; i++){
        btn = '<div class="del" onclick="removeMainCourse(' + i + ')">-</div>';
        mccart.innerHTML += '<li>'+ orders[i][0] + ' ' + orders[i][1] + ' :  ₹' + orders[i][2] + btn +'</li>';
    }
    mctotal.innerHTML =  'Total: ₹' + total;
}

 mcshoppingCart();

 function removeMainCourse(n){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total) - Number(orders[n][2]);
    orders.splice(n,1)
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    cart.innerHTML = orders.length;
    mcshoppingCart();
 }