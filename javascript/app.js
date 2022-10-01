const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.querySelector("form")
const relleno = document.querySelector(".relleno")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let validationEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    relleno.innerHTML = ""
    if(nombre.value.length < 6){
        warnings += `El nombre no es valido. <br>`
        entrar = true
    }
    if(!validationEmail.test(email.value)){
        warnings += `El email no es valido. <br>`
        entrar = true
    }
    if(password.value.length < 8){
        warnings += `La contraseña no es valido. <br>`
        entrar = true
    } 
    if (entrar){
        relleno.innerHTML = warnings
    }
    else{
        relleno.innerHTML = "Enviado correctamente."
    }
})