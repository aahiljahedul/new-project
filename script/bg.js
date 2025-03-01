let button = document.getElementById("background-btn");
let bodyColor = document.querySelector("body");
let randomColor = [
    "yellow",
    "blue",
    "yellowgreen",
    "black",
    "aqua",
    "purple",
    "red",
    "orange",
    "amber",
    "lime",
    "sky",
    "cyan",
    "gray",
    "slate",
    "#F4F7FF",
    "pink",
    "rose",
    "violet",
    "indigo",
    "teal",

];
button.addEventListener("click",
    function changeColor() {
    let random = Math.floor(Math.random() * randomColor.length);
    bodyColor.style.backgroundColor = randomColor[random];
    
})