
var username = "admin";
var password = "admin";

var userInputName
var userInputPassword
function login() {
    userInputName = document.getElementById('username').value;
    userInputPassword = document.getElementById('password').value;
    if(localStorage.getItem(userInputName) == userInputPassword){
        document.getElementById('loginLabel').innerHTML = "Login successful"
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
        console.log("Success")
    }
    else console.log('error')
}