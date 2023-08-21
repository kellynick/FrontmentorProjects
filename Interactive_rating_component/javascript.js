
const button = document.querySelector(".first-section-btn");
const testingThree = document.querySelectorAll('.loop');
const spanConnect = document.querySelector(".selected-container-span")
const firstSection = document.querySelector(".flex-content")
const secondSection = document.querySelector(".second-flex-content")


for (let i = 0; i < testingThree.length; i++) {
    testingThree[i].addEventListener('click' , function(){
        // testingThree[i].classList.add("toggle")
    spanConnect.textContent = testingThree[i].textContent
    })
}

button.addEventListener('click', function(){
    firstSection.classList.add("hidden")
    secondSection.classList.remove("hidden")
})
