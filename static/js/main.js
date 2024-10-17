let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("bg-blur", window.scrollY > 0);
});
