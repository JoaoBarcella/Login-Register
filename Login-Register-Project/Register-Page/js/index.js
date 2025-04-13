const form = document.querySelector("form")
const btn = document.querySelector("button")

const passwordCreation = function() {
  const password1 = document.querySelector("#input-Password").value
  const password2 = document.querySelector("#input-Password-Repeat").value

    if(password1 !== password2){
        alert("Passwords do not match.");
        return null;
    }else{
       return password1;
    }
}

const emailCreation = function(){
    const email = document.querySelector("#input-Email-Register").value
    return email;
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const password = passwordCreation();
    const email = emailCreation();


    if(password){
        const login ={
            email:email,
            password:password,
        };
        localStorage.setItem("user",JSON.stringify(login))

        alert("login created")
    
    }else{
        alert("not Created")
    }

})




