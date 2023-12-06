

const menu2 = document.querySelector(".icon-menu2");
const list2 = document.querySelector(".menu-2")

const li = document.querySelectorAll('.li')
const bloque = document.querySelectorAll('.container-products')


//menu desplegable
function desMenu2(){
    menu2.addEventListener('click', ()=> list2.classList.toggle('menu--show') )
}

desMenu2();

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