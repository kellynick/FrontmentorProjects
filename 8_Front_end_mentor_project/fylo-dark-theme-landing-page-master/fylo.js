const input = document.querySelector("#get-early-section-input")
const button = document.querySelector(".get-early-section-form button")
const error = document.querySelector(".error-message")


button.addEventListener("click" , function(){
    if (input.value ==="") {
     error.textContent = "Whoops! It looks like you forgot to add your email"
     error.style.display = "block";
    } else if(!input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
     error.textContent = "Please Provide a valid email address";
     error.style.display = "block";
    }
 })