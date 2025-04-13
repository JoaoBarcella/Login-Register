
const loginBnt = document.querySelector("#button")
const form = document.querySelector("form")
const registerMsg = document.querySelector("#register")
const savedUser = JSON.parse(localStorage.getItem("user"))



function acessLogin (email,password) {
    if(!savedUser){
        alert("Not Register")
    return;
    }

    const isEmailCorret = email === savedUser.email
    const isPasswordCorret = password === savedUser.password


    
    if(!isEmailCorret || !isPasswordCorret){
        alert("incorret login")
    }else{
        alert("Logging")
    }

}


form.addEventListener("submit",(e)=>{
    
    e.preventDefault();

    const emailInput = document.querySelector("#inputEmail").value
    const passowordInput = document.querySelector("#inputPassword").value

    acessLogin(emailInput, passowordInput);

})


