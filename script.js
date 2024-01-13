"use-strict";

const transcript = document.querySelector(".transcript");
const pyro = document.querySelector(".pyro");
const flame = Array.from(document.getElementsByClassName("flame"));
const audio = new Audio("hbd.mp3");
const playBtn = document.querySelector(".btn-play");
const stopBtn = document.querySelector(".btn-stop");

const startRecognition = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const SpeechRecognitionEvent =
    window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.continuous = true;

  playBtn.addEventListener("click", () => {
    audio.play();
  });
  stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
  });

  recognition.addEventListener("result", (e) => {
    let text = Array.from(e.results)
      .map((result) => result[0])
      .map((e) => e.transcript)
      .join("");
    if (text.toLowerCase().includes("happy birthday")) {
      console.log("end now");
      transcript.innerHTML = "HAPPY BIRTHDAY AARAV 🥳";
      pyro.classList.remove("hidden");
      flame.forEach((f) => f.classList.add("hidden"));
    } else console.log(text);
  });

  recognition.addEventListener("end", () => {
    recognition.start();
  });
  recognition.start();
};
startRecognition();
