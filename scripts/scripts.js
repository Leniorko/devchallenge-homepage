const hamburgerButton = document.querySelector(".nav__hamburger");
hamburgerButton.classList;

hamburgerButton.addEventListener("click", (event) => {
  if (event.target.classList.contains("nav__hamburger--active")) {
    event.target.classList.toggle("nav__hamburger--deactivation");
    setTimeout(() => {
      event.target.classList.toggle("nav__hamburger--active");
      event.target.classList.toggle("nav__hamburger--deactivation");
    }, 1000);
  } else {
    event.target.classList.toggle("nav__hamburger--active");
  }
});
