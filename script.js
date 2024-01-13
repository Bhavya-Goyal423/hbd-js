const transcript = document.querySelector(".transcript");
const pyro = document.querySelector(".pyro");
const flame = Array.from(document.getElementsByClassName("flame"));
const audio = new Audio("hbd.mp3");
const startButton = document.getElementById("startButton");

let isEnded = false;

const startRecognition = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const SpeechRecognitionEvent =
    window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.continuous = true;

  recognition.addEventListener("result", (e) => {
    let text = Array.from(e.results)
      .map((result) => result[0])
      .map((e) => e.transcript)
      .join("");
    if (text.toLowerCase().includes("happy birthday")) {
      isEnded = true;
      recognition.abort();
      audio.play();
      transcript.innerHTML = "HAPPY BIRTHDAY ANVAY 🥳";
      pyro.classList.remove("hidden");
      flame.forEach((f) => f.classList.add("hidden"));
    } else console.log(text);
  });

  recognition.addEventListener("end", () => {
    if (isEnded) return;
    recognition.start();
  });

  startButton.addEventListener("click", () => {
    recognition.start();
  });
};

startRecognition();
