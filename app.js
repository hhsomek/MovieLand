const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    // console.log(i, arrow);
    // console.log("clicked to:", +i)
    // console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value);
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    console.log(itemNumber)
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 330);
        clickCounter++;
        if (itemNumber - clickCounter - ratio > 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
    console.log(Math.floor(window.innerWidth / 270));
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".movie-list-item-button,.container,.movie-list-title,.navbar-container,.profile-text-container,.sidebar,.left-menu-icon,.toggle");

ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})