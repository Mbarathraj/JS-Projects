
const box=document.querySelector('.box')
function changeColor(color){
    box.style.background=color
    const span=document.querySelectorAll('span').forEach(function(item){
        item.classList.remove('active')
    })
    event.target.classList.add('active')
}