const images = ["KakaoTalk_20220620_025535774.jpg", "KakaoTalk_20220620_025535774_01.jpg", "KakaoTalk_20220620_025535774_02.jpg","KakaoTalk_20220620_025535774_03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
