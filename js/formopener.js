document.querySelector("#menuRegister").addEventListener("click", function(){
    document.querySelector(".modal").classList.add("active")   
})

document.querySelector(".modal .modalclosebtn").addEventListener("click", function(){
    document.querySelector(".modal").classList.remove("active")
})

document.querySelector("#signupbtn").addEventListener("click", function(){
    document.querySelector(".modal").classList.remove("active")
})







