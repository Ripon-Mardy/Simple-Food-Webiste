// header menu icons 
let menu = document.querySelector(".menu-icons");
let menuList = document.querySelector("header ul");
let close = document.querySelector(".close")

menu.addEventListener("click", () => {
    menuList.style.left = "0";
})
close.addEventListener("click", () => {
    menuList.style.left = "-200px"
})
