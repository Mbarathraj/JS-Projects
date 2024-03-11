let toggler = document.querySelector('.chat-toggler')
const sendBtn = document.querySelector('#send-btn')
let userMessage;
let userinput = document.querySelector('textarea')
let chatbox=document.querySelector('.chatbox')
let API_KEY="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";
const createChatli = (userMessage, classname) => {
    let chatli = document.createElement('li')
    chatli.classList.add('chat', classname)
    let chatContent = classname === "outgoing" ? `<p>${userMessage}</p>` : `<i class="fa-solid fa-robot"></i>
   <p>${userMessage} </p>`;
   chatli.innerHTML=chatContent;
   return chatli
}
const generateResponse=()=>{
    const Api_Url="https://api.openai.com/v1/chat/completions"
    const requestOptins={
        method:"POST",
        header:{
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo","message": {
                "role": "user",
                "content": `${userMessage}`,
              },
        })

    }
}
const handleChat = () => {
    userMessage = userinput.value.trim()
    if (!userMessage) return;
  chatbox.appendChild(createChatli(userMessage, "outgoing"))
  chatbox.scrollTo(0,chatbox.scrollHeight-"30")
  setTimeout(()=>{
     chatbox.appendChild(createChatli("Thinking...","incoming"));
     generateResponse();
  },600);
  
}

sendBtn.addEventListener('click', () => {
    handleChat()
})







let c = 0;
toggler.addEventListener('click', () => {
    let body = document.querySelector('body')
    body.classList.toggle('showchat')
})