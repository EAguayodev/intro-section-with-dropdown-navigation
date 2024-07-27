const hamburger = document.getElementById("menu-toggle__open");
const menuMobile = document.getElementById('mobile-menu');
const iconClose = document.getElementById("menu-toggle__close");

hamburger.addEventListener("click", function () {
  if (menuMobile) {
    document.getElementById("mobile-menu").style.display = "block";
  } else {
    document.getElementById("mobile-menu").style.display = "none";
  }
});

iconClose.addEventListener("click", function () {
  if (menuMobile) {
    document.getElementById("mobile-menu").style.display = "none";
  } else {
    document.getElementById("mobile-menu").style.display = "block";
  }
});