var hours = 24;
var now = new Date().getTime();
var stepTime = localStorage.getItem('stepTime');

if (stepTime == null){
    localStorage.setItem('stepTime', now);
}
else{
    if (now-stepTime > hours*60*60*1000){
        localStorage.clear();
        localStorage.setItem('stepTime', now);
    }
}

var orders = JSON.parse(localStorage.getItem('order'));
var total = localStorage.getItem('total');

if (orders === null || orders === undefined){
    localStorage.setItem('order', JSON.stringify([]));
    orders = JSON.parse(localStorage.getItem('order'));
}

if (total === null || total === undefined){
    localStorage.setItem('order', 0);
    total = localStorage.getItem('total');
}

//var cart = document. querySelector('#cart');
//cart.innerHTML = orders.length;