const button = document.querySelector(".hamburger-icon")
const menu = document.querySelector(".menu")

button.addEventListener("click", () => {
    const isOpened = button.getAttribute("aria-expanded")
    const visibility = menu.getAttribute("data-visible")
    
    if(isOpened === "false" || visibility === "false"){
        button.setAttribute("aria-expanded","true")
        menu.setAttribute("data-visible",true)
    } else {
        button.setAttribute("aria-expanded", "false")
        menu.setAttribute("data-visible", false);
    }
})