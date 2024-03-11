let items=document.querySelectorAll('.item')
const sortedlist=document.querySelector('.sorted-list')
items.forEach(item=>{
    item.addEventListener("dragstart",()=>{
        setTimeout( ()=>item.classList.add('dragging'),0)
    })
    item.addEventListener("dragend",()=>{
        item.classList.remove('dragging')
    })
})
const initSortedList =(e)=>{
   e.preventDefault()
    let dragitem=sortedlist.querySelector('.dragging')
    const sibling=[...sortedlist.querySelectorAll(".item:not(.dragging)")]
    let nextSibling =sibling.find(sibling =>{
        return e.clientY <=sibling.offsetTop +sibling.offsetHeight/2;
    })
    sortedlist.insertBefore(dragitem,nextSibling);
    
}
sortedlist.addEventListener('dragover',initSortedList)
sortedlist.addEventListener('dragenter',e => e.preventDefault())