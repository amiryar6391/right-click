let contmenu=document.querySelector('.container')
let drop=document.querySelector('.drop-items')

document.addEventListener('contextmenu',(e)=>{
    // e.preventDefault();
    let x=e.clientX
    let y=e.clientY
    let viewx=innerWidth
    let viewy=innerHeight
    let x2=contmenu.offsetWidth
    let y2=contmenu.offsetHeight
    x = x>viewx-x2 ?  viewx-x2: x
    y = y>viewy-y2 ? viewy-y2: y
    contmenu.style.top=`${y}px`
    contmenu.style.left=`${x}px`
    

    if(x>(viewx-x2-200)){
        drop.style.left='-210px'
    }else{
        drop.style.left='220px'
    }
    contmenu.style.visibility='visible'

})
document.addEventListener('click',()=>{
    contmenu.style.visibility='hidden'
})