import Swiper from "swiper";
import { Pagination, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const swiper = new Swiper(".main-swiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 200,
  speed: 600,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      if (index === 0) {
        return '<span class="' + className + '">' + "Start" + "</span>";
      }
      return '<span class="' + className + '">' + 0 + index + "</span>";
    },
  },
  modules: [Pagination, Mousewheel],
});

const scroll_btn = document.getElementById("scroll-btn");
scroll_btn.addEventListener("click", () => {
  swiper.slideNext();
});

swiper.on("transitionEnd", (swiper) => {
  if (swiper.isEnd === true) {
    swiper.mousewheel.disable();
    document.documentElement.classList.remove("page--clip");
  }
});

document.documentElement.addEventListener("wheel", () => {
  if (document.documentElement.getBoundingClientRect().top !== 0) {
    swiper.mousewheel.disable();
    document.documentElement.classList.remove("page--clip");
  }
});

export { swiper };
