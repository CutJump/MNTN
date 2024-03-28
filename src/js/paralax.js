import { swiper } from "./swiper";

const paralaxItem_2 = document.querySelector(".parallax__layer-2");
const paralaxItem_3 = document.querySelector(".parallax__layer-3");

window.addEventListener("load", () => {
  paralaxItem_2.style.setProperty("transition", "transform 0.6s");
  paralaxItem_3.style.setProperty("transition", "transform 0.6s");
});

swiper.on("slideChangeTransitionStart", (swiper) => {
  paralaxItem_2.style.setProperty(
    "transform",
    `translate3d(0, ${-70 + swiper.activeIndex * 5}%, 0)`
  );

  paralaxItem_3.style.setProperty(
    "transform",
    `translate3d(0, ${-140 - swiper.activeIndex * 8}%, 0)`
  );
});
