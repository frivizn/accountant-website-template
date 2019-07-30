const navbarToggler = document.querySelector(".bars");

navbarToggler.addEventListener("click", barsClick);

function barsClick() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
