const button = document.querySelector(".hamburger-icon")
const menu = document.querySelector(".menu")
const contactButton = document.querySelector(".contact-button")

button.addEventListener("click", () => {
    const isOpened = button.getAttribute("aria-expanded")
    const visibility = menu.getAttribute("data-visible")
    const closed = contactButton.getAttribute("data-visible")
    
    if(isOpened === "false" && visibility === "false" && closed === "false"){
        button.setAttribute("aria-expanded","true")
        menu.setAttribute("data-visible",true)
        contactButton.setAttribute("data-visible", true);
    } else {
        button.setAttribute("aria-expanded", "false")
        menu.setAttribute("data-visible", false);
        setTimeout(()=> {
            contactButton.setAttribute("data-visible", false);
        },800)
        
    }
})