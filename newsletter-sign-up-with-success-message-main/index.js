function Subscribe () {
    var subs = document.getElementById('subscribe');

}

var email = document.getElementById("email");

email.addEventListener('focus', ()=>{
    email.style.borderColor = "hsl(240,1%,17%)";
});

email.addEventListener('blur', ()=>{
    email.style.borderColor = "#ccc";
});