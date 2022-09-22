// Animacion slider

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function nextRight() {
  let sliderSectionFirts = document.querySelectorAll(".slider-section")[0];

  slider.style.marginLeft = "-200%";
  slider.style.transition = "0.8s ease-in-out";

  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirts);
    slider.style.marginLeft = "-100%";
  }, 1200);
}
function Prev() {
  let sliderSection = document.querySelectorAll(".slider-section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";

  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 1200);
}

/*btnLeft.addEventListener("click", function () {
  Prev();
});
const btnRight = document.querySelector("#btn-right");
const btnLeft = document.querySelector("#btn-left");

btnRight.addEventListener("click", function () {
  nextRight();
});*/

setInterval(function () {
  nextRight();
}, 5000);
