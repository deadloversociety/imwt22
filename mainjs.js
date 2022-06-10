function missingIssue() {
  alert("This issue is not available. Stay tuned to read the next articles of our magazine!");
}

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

// TESTO A FRONTE

function showOriginalOvid() {
  var x = document.getElementById("OVoriginalText");
  var y = document.getElementById("OVtextEn");
  x.style.display = "block";
  y.classList.add("col-sm-6", "col-md-5", "col-lg-6"); 
  $('.ovid').css('display','block');
  $('.indexcompare').css('display','none');
}

function hideOriginalOvid() {
  var x = document.getElementById("OVoriginalText");
  var y = document.getElementById("OVtextEn");
  x.style.display = "none";
  y.removeAttribute("class");
  $('.indexcompare').css('display','none');
}

function showOriginalApRod() {
  var x = document.getElementById("ARoriginalText");
  var y = document.getElementById("ARtextEn");
  x.style.display = "block";
  y.classList.add("col-sm-6", "col-md-5", "col-lg-6"); 
}

function hideOriginalApRod() {
  var x = document.getElementById("ARoriginalText");
  var y = document.getElementById("ARtextEn");
  x.style.display = "none";
  y.removeAttribute("class");
}

function showOriginalEurpd() {
  var x = document.getElementById("EUoriginalText");
  var y = document.getElementById("EUtextEn");
  x.style.display = "block";
  y.classList.add("col-sm-6", "col-md-5", "col-lg-6"); 
}

function hideOriginalEurpd() {
  var x = document.getElementById("EUoriginalText");
  var y = document.getElementById("EUtextEn");
  x.style.display = "none";
  y.removeAttribute("class");
}

// Comparison Ovid
function compareOvid() {
  var x = document.getElementById("OVoriginalText");
  var y = document.getElementById("OVtextEn");
  x.style.display = "block";
  y.classList.add("col-sm-6", "col-md-5", "col-lg-6"); 
  $('.indexcompare').css('display','block');
}

function showOvid1() {
  $('.ovid').css('display','none');
  $('.MetVII1_73').css('display','block');
}

function showOvid2() {
  $('.ovid').css('display','none');
  $('.MetVII74_99').css('display','block');
}

function showOvid3() {
  $('.ovid').css('display','none');
  $('.MetVII100_158').css('display','block');
}

function showOvid4() {
  $('.ovid').css('display','none');
  $('.MetVII159_178').css('display','block');
}

function showOvid5() {
  $('.ovid').css('display','none');
  $('.MetVII179_233').css('display','block');
}

function showOvid6() {
  $('.ovid').css('display','none');
  $('.MetVII234_293').css('display','block');
}

function showOvid7() {
  $('.ovid').css('display','none');
  $('.MetVII294_349').css('display','block');
}

function showOvid8() {
  $('.ovid').css('display','none');
  $('.MetVII350_403').css('display','block');
}

function showOvid9() {
  $('.ovid').css('display','none');
  $('.MetVII404_424').css('display','block');
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
