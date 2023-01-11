const images = ["배경화면1.jpg","배경화면2.jpg","배경화면3.jpg","배경화면4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);