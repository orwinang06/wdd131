

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