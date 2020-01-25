
// Navbar menu burger:
document.getElementById("navbar-burger").addEventListener("click", (e) => {
    e.target.classList.toggle("navbar-burger-change");
    let links = document.getElementById("navbar-links");
    links.classList.toggle("navbar-links-show");
    links.classList.toggle("navbar-links");
}, true);



// Automatic scrolling management when you hover over an item at the edge of the viewport.
let articles = document.getElementsByClassName("article");
for (article of articles) {
    article.addEventListener("mouseover", (elem) => {
        let yPos = 0;
        let rect = elem.target.getBoundingClientRect();

        yPos = rect.y;

        // Si mouseover au dessus d'un article qui est trop haut sur le viewport
        if (yPos < 230) {
            window.scrollBy({
                top: -100, // could be negative value
                left: 0,
                behavior: 'smooth'
            });
        } else if (yPos > 410) {
            window.scrollBy({
                top: 100, // could be negative value
                left: 0,
                behavior: 'smooth'
            });
        }

        console.info(`position y : ${yPos}`);
    }, true);
};



