let img_359947 = new Image(201, 151);
let img_553668 = new Image(201, 151);
let img_531331 = new Image(201, 151);
let img_289814 = new Image(201, 151);
let img_240101 = new Image(201, 151);
let img_412899 = new Image(201, 151);
let img_16796 = new Image(201, 151);

let img_553668_caption =
  "some very cute girls standing by a water slide with a board";
let img_359947_caption =
  "a person taking a photo in the reflection of a microwave";

let img_531331_caption =
  "a man laying on the floor of a bathroom near the toilet";

let img_289814_caption =
  "an attractive woman riding up an escalator wearing jeans and holding an umbrella";

let img_240101_caption =
  "a man in his living room with a game control in his hand";

let img_412899_caption =
  "two men are poaching an elephant in the field for no reason";

let img_16796_caption = "a small boy is sitting on a toilet reading a book";

img_359947.src = "359947_mask.png";
img_553668.src = "553668_mask.png";
img_531331.src = "531331_mask.png";
img_289814.src = "289814_mask.png";
img_240101.src = "240101_mask.png";
img_412899.src = "412899_mask.png";
img_16796.src = "167968_mask.png";

document.body.setAttribute("style", "margin:0; padding:0");

let imgDiv = document.createElement("div");

imgDiv.appendChild(img_359947);
imgDiv.appendChild(img_553668);
imgDiv.appendChild(img_531331);
imgDiv.appendChild(img_289814);
imgDiv.appendChild(img_240101);
imgDiv.appendChild(img_412899);
imgDiv.appendChild(img_16796);

document.body.appendChild(imgDiv);

let textDiv = document.createElement("div");
textDiv.id = "textDiv";
textDiv.setAttribute("style", "margin-top:20%; margin-left:40%;");

document.body.appendChild(textDiv);

let synth = window.speechSynthesis;
let voiceSelect = document.querySelector("select");

// let typeWriter = new Typewriter(textDiv, { loop: true });

function speakText(inputTxt) {
  let utterThis = new SpeechSynthesisUtterance(inputTxt);
  voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    utterThis.voice = voices[7];
  }
  utterThis.rate = 0.6;
  synth.speak(utterThis);
}

function typeText(inputTxt) {
  textDiv.innerHTML = "";
  let i = 0;
  (function addLetter() {
    textDiv.innerHTML += inputTxt.charAt(i);
    i++;
    if (i < inputTxt.length) {
      setTimeout(addLetter, 50);
    }
  })();
}

function clearText() {
  textDiv.innerHTML = "";
  console.log("working");
}

img_359947.addEventListener(
  "mouseenter",
  () => speakText(img_359947_caption),
  false
);
img_359947.addEventListener(
  "mouseout",
  () => this.speechSynthesis.cancel(),
  false
);
img_359947.addEventListener(
  "mouseenter",
  () => typeText(img_359947_caption),
  false
);
img_359947.addEventListener("mouseout", () => clearText(), false);

img_553668.addEventListener(
  "mouseenter",
  () => speakText(img_553668_caption),
  false
);
img_553668.addEventListener(
  "mouseout",
  () => this.speechSynthesis.cancel(),
  false
);
img_553668.addEventListener(
  "mouseenter",
  () => typeText(img_553668_caption),
  false
);

img_531331.addEventListener(
  "mouseenter",
  () => speakText(img_531331_caption),
  false
);
img_531331.addEventListener(
  "mouseout",
  () => this.speechSynthesis.cancel(),
  false
);
img_531331.addEventListener(
  "mouseenter",
  () => typeText(img_531331_caption),
  false
);

img_289814.addEventListener(
  "mouseenter",
  () => speakText(img_289814_caption),
  false
);
img_289814.addEventListener(
  "mouseout",
  () => this.speechSynthesis.cancel(),
  false
);
img_289814.addEventListener(
  "mouseenter",
  () => typeText(img_289814_caption),
  false
);

img_240101.addEventListener(
  "mouseenter",
  () => speakText(img_240101_caption),
  false
);
img_240101.addEventListener(
  "mouseout",
  () => this.speechSynthesis.cancel(),
  false
);
img_240101.addEventListener(
  "mouseenter",
  () => typeText(img_240101_caption),
  false
);

img_412899.addEventListener(
  "mouseenter",
  () => speakText(img_412899_caption),
  false
);
img_412899.addEventListener(
  "mouseout",
  () => this.speechSynthesis.cancel(),
  false
);
img_412899.addEventListener(
  "mouseenter",
  () => typeText(img_412899_caption),
  false
);

img_16796.addEventListener(
  "mouseenter",
  () => speakText(img_16796_caption),
  false
);
img_16796.addEventListener(
  "mouseout",
  () => this.speechSynthesis.cancel(),
  false
);
img_16796.addEventListener(
  "mouseenter",
  () => typeText(img_16796_caption),
  false
);
