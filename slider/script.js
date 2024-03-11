const initslider=()=>{
    const sliderButtons=document.querySelectorAll('.slider-btn')
    const imgList=document.querySelector('.img-list')
    const maxScroll=imgList.scrollWidth - imgList.clientWidth
    const scrollbar=document.querySelector('.slider-scrollbar')
    const scrollbarThumb=document.querySelector('.scrollbar-thumb')
    sliderButtons.forEach(button=>{
        button.addEventListener('click',()=>{
            const direction=button.id==="prev" ? -1:1;
            const scrollAmout=imgList.clientWidth *direction;
            imgList.scrollBy({left:scrollAmout, behavior:"smooth"})
        })
    })
    function updateSliderScrollbar(){
        let pos=imgList.scrollLeft
        const thumbPosition=(pos/maxScroll) * (scrollbar.clientWidth -scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left=`${thumbPosition}px`
    }
    imgList.addEventListener('scroll',()=>{
        sliderButtons[0].style.display=imgList.scrollLeft <=0 ? "none":"block";
        sliderButtons[1].style.display=imgList.scrollLeft >= maxScroll ? "none":"block";
        updateSliderScrollbar();
    })
}
window.addEventListener('load', initslider)