let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    // Clear existing options
    voiceSelect.innerHTML = "";

    voices.forEach((voice, i) => {
        // Creating and appending new Option elements to the voiceSelect dropdown
        const option = new Option(voice.name, i);
        voiceSelect.appendChild(option);
    });
};

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
});
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
