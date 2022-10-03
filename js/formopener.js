document.querySelector("#menuRegister").addEventListener("click", function(){
    document.querySelector(".modal").classList.add("active")
    // document.querySelector("html").classList.add("modal-blur"); 
    // $('.modal').removeClass('.modal-blur');
})

document.querySelector(".modal .modalclosebtn").addEventListener("click", function(){
    document.querySelector(".modal").classList.remove("active")
    // $('html').removeClass('modal-blur')
})

document.querySelector("#signupbtn").addEventListener("click", function(){
    document.querySelector(".modal").classList.remove("active")
    // $('html').removeClass('modal-blur')
})






