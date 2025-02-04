const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
  handleResize();
  window.addEventListener("resize", handleResize);

  function viewerTemplate(pic, alt) {
       return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
        </div>`;
  }

  function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) viewer.remove();
  }

function viewHandler(event){
    const img = event.target.closest("figure img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");

    const srcParts = src.split("-");
    let newSrc = `${srcParts[0]}-full.jpeg`;
    let viewerHtml = viewerTemplate(newSrc, alt);
    document.body.insertAdjacentHTML("afterbegin", viewerHtml)

    const closeButton = document.querySelector(".close-viewer")
    closeButton.addEventListener("click", closeViewer)
}

const gallery = document.querySelector(".gallery");

if (gallery){
gallery.addEventListener("click", viewHandler);
}

let btn = document.querySelector("button");
btn.addEventListener("click", viewHandler);