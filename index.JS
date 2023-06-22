const imgEl = document.getElementById("random-image");
const btn = document.getElementById("btn");

const srcArray = [
  "images/img1.jpg",
  "images/img2.jpeg",
  "images/img3.jpeg",
  "images/img4.jpg",
  "images/img5.jpeg",
  "images/img6.jpeg",
  "images/img7.jpeg",
  "images/img8.jpeg",
  "images/img9.avif",
];

btn.addEventListener("click", () => {
  rendomImage();
});

rendomImage();

function rendomImage() {
  const randomIndex = Math.floor(Math.random() * srcArray.length);
  if (randomIndex !== Number(localStorage.getItem("index"))) {
    imgEl.src = srcArray[randomIndex];
    localStorage.setItem("index", randomIndex);
  } else {
    randomIndex();
  }
}
