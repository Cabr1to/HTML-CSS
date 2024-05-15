const email = document.getElementById("email");
const form = document.getElementById("e_form");
const span = document.getElementById("span_r");
const subs = document.getElementById('subscribe');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

function verify() {
    if (email.value == "" || !emailRegex.test(email.value)){
        set_error();
        return 1;
    }
    else {
        remove_error();
        return 0;
    }
}

function set_error() {
    span.display = 'block';
    email.style.backgroundColor = "rgba(255,195,195,0.25)"
    email.style.border = '2px solid #e63636';
}

function remove_error() {
    span.display = 'none';
    email.style.backgroundColor = "rgb(255,255,255)"
    email.style.border = '';
}

function success() {
    location.href='ok.html';
}


email.addEventListener('focus', ()=>{
    email.style.borderColor = "hsl(240,73%,72%)";
});

email.addEventListener('blur', ()=>{
    email.style.borderColor = "#ccc";
});