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
