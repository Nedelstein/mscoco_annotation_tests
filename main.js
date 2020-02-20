"use strict";

document.body.setAttribute("style", "margin:0; padding:0;");
document.body.style.background = "#430354";

let imgDiv = document.createElement("div");
imgDiv.align = "center";
// imgDiv.style.padding = "2%";

let textDiv = document.createElement("div");
textDiv.id = "textDiv";

fetch("./filenames_captions.json")
  .then(resp => {
    return resp.json();
  })
  .then(data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let maskImg = new Image(200, 100);
      let filename = data[i].filename;
      maskImg.src = "image_masks/" + filename;
      maskImg.style.margin = "1%";
      imgDiv.append(maskImg);

      let caption = data[i].caption;

      maskImg.addEventListener("mouseenter", () => speakText(caption));
      maskImg.addEventListener("mouseout", () => this.speechSynthesis.cancel());

      maskImg.addEventListener("mouseenter", () => typeText(caption));
      maskImg.addEventListener("mouseout", () => clearText());
    }
  });

document.body.appendChild(textDiv);
document.body.appendChild(imgDiv);

// let voiceSelect = document.querySelector("select");

function speakText(inputTxt) {
  let synth = window.speechSynthesis;
  let utterThis = new SpeechSynthesisUtterance(inputTxt);
  let voices = synth.getVoices();
  //   for (let i = 0; i < voices.length; i++) {
  utterThis.voice = voices[7];
  //   }
  utterThis.rate = 0.6;
  synth.speak(utterThis);
}

let textIsTypeing;
function typeText(inputTxt) {
  textIsTypeing = true;
  textDiv.innerHTML = "";
  let i = 0;
  (function addLetter() {
    if (textIsTypeing) {
      textDiv.innerHTML += inputTxt.charAt(i);
      i++;
      if (i < inputTxt.length) {
        setTimeout(addLetter, 70);
      }
    } else textDiv.innerHTML = "";
  })();
}

function clearText() {
  textDiv.innerHTML = "";
  console.log("working");
  textIsTypeing = false;
}
