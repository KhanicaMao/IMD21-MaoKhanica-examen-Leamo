var sidenav = document.getElementById("mySidenav");
var open = document.getElementById("open");
var close = document.getElementById("close");

open.onclick = openNav;
close.onclick = closenNav;

function openNav() {
  sidenav.classList.add("active");
}

function closenNav() {
  sidenav.classList.remove("active");
}

import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
