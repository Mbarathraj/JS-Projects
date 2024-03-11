let genBtn=document.getElementById('genBtn')
let container=document.querySelector('.container1')
let inputValue=document.querySelector('input')
let qrCode=document.querySelector('.qr-code img')
genBtn.addEventListener('click',()=>{
  container.classList.add('active')
  let url=inputValue.value
  if(!url) return;
setTimeout(()=>  qrCode.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`,100)
 

})