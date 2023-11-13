const btnBars = document.querySelector(".btn-bars");
const sideBar = document.querySelector("#side-bar");
const closeBarIcon = document.querySelector("#icon")
const hasSubMenu = document.querySelectorAll(".has-sub-menu");

btnBars.addEventListener("click", () =>{
    sideBar.style.left = "0"
})

closeBarIcon.addEventListener("click", () =>{
    sideBar.style.left = "-250px"
})


hasSubMenu.forEach((item) =>{
    item.addEventListener("click", function(){
        this.nextElementSibling.classList.toggle("active");
        this.lastElementChild.classList.toggle("active")
    })
})