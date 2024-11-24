//npm install @google/generative-ai


import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";




const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log("apikey",apiKey);
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  const response=result.response;
  console.log(response.text());
   return response.text();



}
const speak=(text)=>{
  let textSpeak=new SpeechSynthesisUtterance(text)  
  textSpeak.rate=1
  textSpeak.volume=1
  textSpeak.pitch=1
  textSpeak.lang="en-US"
  window.speechSynthesis.speak(textSpeak)   
}
const wishMe=()=>{
let day=new Date()
let hour=day.getHours()
if(hour>=0&&hour<12){
speak("good morning sir,how can i help u")
}else if(hour>=12&&hour<16){
speak("good afternoon sir,how can i help u")
}else{
speak("good evening sir,how can i help u")
}
}
window.addEventListener('load',()=>{
wishMe();
});

export default run;