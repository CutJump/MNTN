const menu_btn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

function getOpened() {
  return menu_btn.getAttribute("aria-expanded") === "true";
}

menu_btn.addEventListener("click", () => {
  if (!getOpened()) {
    openMenu();
  } else if (getOpened()) {
    closeMenu();
  }
});

function openMenu() {
  menu_btn.setAttribute("aria-expanded", true);
  nav.classList.remove("nav--hidden");
}

function closeMenu() {
  menu_btn.setAttribute("aria-expanded", false);
  nav.classList.add("nav--hidden");
}
