const text=document.querySelector('textarea')
const covertBtn=document.querySelector('#covertBtn')
const voiceList=document.querySelector('select')

let synth=speechSynthesis;
function voice(){
    for(let voice of synth.getVoices()){
        let selected=voice.name === "Google US English" ? "selected" : "";
        let option=`<option value="${voice.name}" ${selected}>${voice.name} </option>`
        voiceList.insertAdjacentHTML("beforeend",option)
    }
}
synth.addEventListener("voiceschanged",voice)
const textToSpeech =(text)=>{
 let utternance=new SpeechSynthesisUtterance(text);
 for(let voice of synth.getVoices()){
    if(voice.name===voiceList.value){
        utternance.voice=voice
    }
 }
 speechSynthesis.speak(utternance)
}

covertBtn.addEventListener('click', e=>{
    e.preventDefault();
    if(text.value !==""){
        textToSpeech(text.value)
    }
})