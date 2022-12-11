var linkMenu = document.getElementById("link-menu");
var button = document.getElementById("arrow-button");

function slidemenu() {
    if (button.innerHTML === "↓") {
        linkMenu.style.top = "4rem";
        button.innerHTML = "↑";
    } else {
        linkMenu.style.top = "1rem";
        button.innerHTML = "↓";
    }
}