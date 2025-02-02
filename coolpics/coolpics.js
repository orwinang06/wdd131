const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);


function viewerTemplate(path, text){
    let html =`
        <img scr="${path}" alt="${text}">`;
    return html
}

function viewHandler(){

    let body = document.querySelector("body");
    let html = viewerTemplate("reviwer-icon.png", "ReviewImage");

    body.insertAdjacentHTML("afterbegin", html)

}

let btn = document.querySelector("button");
btn.addEventListener("click", viewHandler);