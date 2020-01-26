
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

        let viewPortHeight = document.documentElement.clientHeight;
        let smouthY = 0.25 * viewPortHeight;
        //let windowHeight = window.pageYOffset;

        // calculation of the viewport's areas where the scroll should activate:
        let topOffset = 0.3 * viewPortHeight;
        let bottomOffset = viewPortHeight - topOffset;

        if (yPos < topOffset) {
            window.scrollBy({
                top: -smouthY,
                left: 0,
                behavior: 'smooth'
            });
        } else if (yPos > bottomOffset) {
            window.scrollBy({
                top: smouthY,
                left: 0,
                behavior: 'smooth'
            });
        }
        //console.debug(`position y : ${yPos}`);
    }, true);
};



