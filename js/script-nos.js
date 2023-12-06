
const list = document.querySelector(".menu3");
const menu = document.querySelector(".icon-menu3");


function desMenu3(){

    menu.addEventListener('click', ()=> list.classList.toggle('menu--show') )
}
desMenu3();