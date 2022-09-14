var isToggled = false

function toggleBurgerMenu () {
    const nav = document.getElementById("myNavbar")
    const burgerIcon = document.getElementById("burgerMenuIcon")
    if (!isToggled) {
        nav.classList.add('is-active')
        burgerIcon.classList.add('is-active')
        isToggled = true
    }
    else if (isToggled) {
        nav.classList.remove('is-active')
        burgerIcon.classList.remove('is-active')
        isToggled = false
    }
    console.log("toggled = " + isToggled)
}