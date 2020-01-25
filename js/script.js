
// Navbar mune burger:
function openBurger(elem) {
    elem.classList.toggle("navbar-burger-change");

    let links = document.getElementById("navbar-links");
    console.log(links);
    links.classList.toggle("navbar-links-show");
    links.classList.toggle("navbar-links");

}