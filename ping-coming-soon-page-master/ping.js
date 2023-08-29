const button = document.querySelector(".email-input button");
let input = document.getElementById("email-ID");
const paragraph = document.querySelector(".error-messase p");
const success = document.querySelector(".success");
const body = document.querySelector("body")
console.log(body)


button.addEventListener("click" , function(){
   if (input.value === "") {
    paragraph.textContent = "Whoops! It looks like you forgot to add your email"
    paragraph.style.display = "block";
   } else if(!input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    paragraph.textContent = "Please Provide a valid email address";
    paragraph.style.display = "block";
}   else if(input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    success.textContent = "You will get a notification shortly";
    success.style.display = "block";
}
})