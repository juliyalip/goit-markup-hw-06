const btnMenu = document.querySelector(".burger-btn")
const mobileMenuRef = document.querySelector("[data-menu]")

btnMenu.addEventListener("click", onclickBtn)

function onclickBtn() {
    btnMenu.classList.toggle("is-open")
    mobileMenuRef.classList.toggle("is-open")
}