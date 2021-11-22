"use strict";

const hamburger = document.querySelector(".hamburger");
const hamburgerTop = document.querySelector(".hamburger__top");
const hamburgerMiddle = document.querySelector(".hamburger__middle");
const hamburgerBottom = document.querySelector(".hamburger__bottom");
const mobileMenu = document.querySelector(".navmenu--mobile");

hamburger.addEventListener("click", function () {
  hamburgerTop.classList.toggle("hamburger__top--open");
  hamburgerMiddle.classList.toggle("hamburger__middle--open");
  hamburgerBottom.classList.toggle("hamburger__bottom--open");

  if (!hamburgerMiddle.classList.contains("hamburger__middle--open")) {
    mobileMenu.classList.add("hidden-menu");
  } else {
    mobileMenu.classList.remove("hidden-menu");
  }
});
