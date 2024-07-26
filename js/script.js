const btnLink = document.querySelector(".button-menu");

const lock = document.querySelector(".hidden");

btnLink.addEventListener('click', () => {
  lock.classList.toggle("hidden")
})