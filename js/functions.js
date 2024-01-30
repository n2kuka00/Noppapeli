const dice = document.querySelector("#dice");
const images = [
  "./img/dice-six-faces-one.png",
  "./img/dice-six-faces-two.png",
  "./img/dice-six-faces-three.png",
  "./img/dice-six-faces-four.png",
  "./img/dice-six-faces-five.png",
  "./img/dice-six-faces-six.png"
];

dice.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  const img = document.querySelector("#dice img");
  img.src = randomImage;
});