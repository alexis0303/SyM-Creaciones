const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".banner");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

const list = document.querySelector(".menu");
const menu = document.querySelector(".icon-menu");

const li = document.querySelectorAll('.li')
const bloque = document.querySelectorAll('.container-products')

// codigo de banner
slider.insertAdjacentElement('afterbegin', sliderSectionLast);
function Next() {
    let sliderSectionFirst = document.querySelectorAll(".banner")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";

    }, 500);
}
function Prev() {
    let sliderSection = document.querySelectorAll(".banner");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";

    }, 500);
}

// banner manual
btnRight.addEventListener('click', function(){
    Next();
});
btnLeft.addEventListener('click', function(){
    Prev();
});

// banner auto
setInterval(function(){
    Next();
}, 10000);

// menu desplegable
function desMenu(){

    menu.addEventListener('click', ()=> list.classList.toggle('menu--show') )
}
desMenu();

// filtro de productos

li.forEach((cadoLi , i)=>{
    li[i].addEventListener('click',()=>{

        li.forEach((cadaLi , i)=>{
            li[i].classList.remove('activo')
            bloque[i].classList.remove('active')
        })

        li[i].classList.add('activo')
        bloque[i].classList.add('active')
    })
})