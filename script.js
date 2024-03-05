function message() {
    var x = document.getElementById("text");
    x.innerHTML = "Password must be of 8 characters";
}

function vac() {
    var hide = document.getElementById("text");
    hide.style.display = "none";

    var loader = document.getElementById("loader");
    loader.style.opacity = 1;

    var pass = document.getElementById("pass").value;
    var length = pass.length;

    var check = document.getElementById("tick");

    length >= 8 ? check.style.opacity = 1 : loader.style.opacity = 1;
    length >= 8 ? loader.style.opacity = 0 : check.style.opacity = 0;
}

function logins() {
    var pass = document.getElementById("pass").value;
    var pass_length = pass.length;

    var user = document.getElementById("user").value;
    var user_length = user.length;

    var store = pass_length >= 8 && user_length >= 8 ? "Login Successful" : "Login Failed!";
    document.getElementById("txt").innerHTML = store;
    return false;
}