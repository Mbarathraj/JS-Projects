let trans=document.getElementById('trans')
let outputArea=document.querySelector('.output-area') 
trans.addEventListener('click',()=>{
   let speech=true
   window.SpeechRecognition =window.webkitSpeechRecognition;
   const recognition= new SpeechRecognition();
   recognition.interimResults=true
   recognition.addEventListener('result',(e)=>{
   outputArea.innerHTML =e.results[0][0].transcript
   })
   if(speech==true){
    recognition.start();
   }
})