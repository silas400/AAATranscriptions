let hamburgerIcon = document.querySelector("#hamburger-menu")
let xClose = document.querySelector("#close")
let createAccountText = document.querySelector("#createAccount")
let logInText = document.querySelector("#logInText")

hamburgerIcon.addEventListener("click", function(){
    document.querySelector("#overlaySelections").style.display = "block"
})

xClose.addEventListener("click", function(){
    document.querySelector("#overlaySelections").style.display = "none"
})

createAccountText.addEventListener("click", function(){
    document.querySelector("#logInBox").style.display = "none"
    document.querySelector("#createAccountBox").style.display = "block"
})

logInText.addEventListener("click", function(){
    document.querySelector("#createAccountBox").style.display = "none"
    document.querySelector("#logInBox").style.display = "block"
    
})