const hamburgerButton = document.querySelector(".hamburger-button")
const primaryNav = document.querySelector(".menu");

hamburgerButton.addEventListener('click',() => {
    const isOpen = hamburgerButton.getAttribute("aria-expanded")
    const visability = primaryNav.getAttribute("data-visible")

    if(isOpen === 'false'){
        hamburgerButton.setAttribute("aria-expanded","true")
    } else {
        hamburgerButton.setAttribute("aria-expanded", "false");
    }

    if(visability === "false"){
        primaryNav.setAttribute("data-visible",true)
    } else {
        primaryNav.setAttribute("data-visible",false)
    }
})
