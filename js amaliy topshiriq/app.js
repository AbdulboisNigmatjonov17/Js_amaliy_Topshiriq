function myFunction() {
    let divCards = document.getElementsByClassName("div_card");
    for (let divCard of divCards) {
        divCard.addEventListener("mouseover", () => {
            divCard.style.cursor = "pointer";
            divCard.style.webkitAnimation = "mymove 3s infinite";
        });
        divCard.addEventListener("mouseout", () => {
            divCard.style.webkitAnimation = "";
        });
    }
}

const legit = document.querySelector('.loader')

setTimeout(() => {
    legit.style.opacity = '0';
    setTimeout(() => {
        legit.style.display = 'none';
    }, 800);
}, 400);