const dropBox=document.querySelector('.drop-box')
const dropmenu=document.querySelector('.dropdown')
dropBox.onclick=function(){
    dropmenu.classList.toggle('active')
    dropBox.classList.toggle('adropbox')
}
