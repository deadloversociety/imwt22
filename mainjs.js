function showEur() {
  var x = document.getElementById("MedeaEur");
  var y = document.getElementById("MedeaApp");
  var z = document.getElementById("MedeaOvi");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function showApR() {
  var x = document.getElementById("MedeaApp");
  var y = document.getElementById("MedeaEur");
  var z = document.getElementById("MedeaOvi");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function showOvd() {
  var x = document.getElementById("MedeaOvi");
  var y = document.getElementById("MedeaEur");
  var z = document.getElementById("MedeaApp");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

var dls = undefined;
var logo = undefined;
var dead = undefined;
var logoTimer = undefined;

const LOGO_MILLIS = 800;
const NUMB_DELAY = 2000;

/*window.onload = function () {
  dead = document.getElementById("dead");
  logo = document.getElementById("logo");
  dls = document.getElementById("DLStitle");
  startShaking();
  setTimeout(function () {
    abortShaking();
    dls.addEventListener("mouseover", startShaking);
    dls.addEventListener("mouseout", abortShaking);
  }, LOGO_MILLIS + NUMB_DELAY);
};*/

function abortShaking() {
  // If the animation is still ongoing
  if (logoTimer !== undefined) {
    clearTimeout(logoTimer);
    logo.classList.remove("shake");
  }
  // Change the icon to th original png
  logo.src = "imgs/heart.png";
  dead.style.fontStyle = "normal";
}

function startShaking() {
  logo.classList.add("shake");
  logoTimer = setTimeout(stopShaking, LOGO_MILLIS);
  dead.style.fontStyle = "italic";
}

function stopShaking() {
  logo.classList.remove("shake");
  logo.src = "imgs/broken-heart (1).png";
}
