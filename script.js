"use strict";

const hamburger = document.querySelector(".hamburger");
const hamburgerTop = document.querySelector(".hamburger__top");
const hamburgerMiddle = document.querySelector(".hamburger__middle");
const hamburgerBottom = document.querySelector(".hamburger__bottom");
const mobileMenu = document.querySelector(".navmenu--mobile");
const header = document.querySelector(".header__banner");
const hero = document.querySelector(".hero");
const intro = document.querySelector(".intro__info");
const footer = document.querySelector(".footer__container");
const services = document.querySelector(".services");
const articles = document.querySelector(".articles");
const main = document.querySelector(".main__container");

hamburger.addEventListener("click", function () {
  hamburgerTop.classList.toggle("hamburger__top--open");
  hamburgerMiddle.classList.toggle("hamburger__middle--open");
  hamburgerBottom.classList.toggle("hamburger__bottom--open");

  if (!hamburgerMiddle.classList.contains("hamburger__middle--open")) {
    mobileMenu.classList.add("hidden-menu");
    intro.classList.remove("background");
    services.classList.remove("background");
    articles.classList.remove("background");
    footer.classList.remove("background");
    hero.classList.remove("background");
  } else {
    mobileMenu.classList.remove("hidden-menu");
    intro.classList.add("background");
    services.classList.add("background");
    articles.classList.add("background");
    footer.classList.add("background");
    hero.classList.add("background");
  }
});
