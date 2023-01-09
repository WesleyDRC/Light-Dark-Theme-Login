const eye = document.getElementById("eye");
const openEye = document.querySelector(".openEye")
const closeEye = document.querySelector(".closeEye")
const passwordInput = document.getElementById("password")

const changeLight = document.querySelector(".changeLight")
const sunDark = document.querySelector(".sunDark")
const sunLight = document.querySelector(".sunLight")
const form = document.querySelector("form")

eye.addEventListener("click",  () => {
    let isPassword = passwordInput.type === "password"
    
    isPassword ? (
        passwordInput.type = "text", 
        openEye.style.display = "none",
        closeEye.style.display = "block"
    ) :  (
        passwordInput.type = "password",
        openEye.style.display = "block",
        closeEye.style.display = "none"
    )
})

changeLight.addEventListener("click", () => {
    
    if(form.classList.contains("light")) {
        form.classList.remove("light")
        sunDark.style.display = "none"
        sunLight.style.display = "block"
        return;
    }

    sunDark.style.display = "block"
    sunLight.style.display = "none"
    form.classList.add("light")
    
})