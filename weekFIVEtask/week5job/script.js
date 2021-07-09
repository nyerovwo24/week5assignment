let firstName=document.getElementById("txtFirstName");
let lastName=document.getElementById("txtLastName");
let userName=document.getElementById("txtEmail");
let email=document.getElementById("txtUserName");
let password=document.getElementById("txtPassword");
let confirmPassword=document.getElementById("txtConfirmPassword");
let form=document.querySelector("form")

function validateInput() {
    if(firstName.value.trim()==="") {
    onError(firstName,"First Name cannot be empty");
}else{
    onSuccess(firstName);
}
if(lastName.value.trim()==="") {
    onError(lastName,"Last Name cannot be empty");
}else{
    onSuccess(lastName);
}

if(userName.value.trim()==="") {
    onError(userName,"user Name cannot be empty");
}else{
    onSuccess(userName);
}

if(email.value.trim()==="") {
    onError(email,"Email cannot be empty");
}else{
    if(!isValidEmail(email.value.trim())){
        onError(email,"Email is not valid");
    }
}else{
    onSuccess(email);
}
}

if(password.value.trim()==="") {
    onError(password,"user Name cannot be empty");
}else{
    onSuccess(userName);
}
if(confirmPassword.value.trim()==="") {
    onError(confirmPassword,"user Name cannot be empty");
}else{
    if(password.valuetrim()!==confirmPassword.value.trim()){
        onError(confirmPassword,"Password & Confirm password not matchng")
    }
}else{
    onSuccess(confirmPassword);
}

}
document.querySelector("button")
.addEventListener("click",()=> {
event.preventDefault();
validateInput();

});

function onSuccess(input,input) {
    let parent=firstName.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}
function onError(input,message){
    let parent=firstName.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
    parent.classList.add("error");
    parent.classList.remove("success");
}

function onSuccess(input,input) {
    let parent=lastName.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}

function onError(input,message){
    let parent=lastName.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
    parent.classList.add("error");
    parent.classList.remove("success");
}

function onSuccess(input,input) {
    let parent=userName.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}
function onError(input,message){
    let parent=userName.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
    parent.classList.add("error");
    parent.classList.remove("success");
}
