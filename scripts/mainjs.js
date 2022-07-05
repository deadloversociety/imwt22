// When clicking on Dido and Guinevevre issues
function missingIssue() {
  alert("This issue is not available. Stay tuned to read the next articles of our magazine!");
}

// To change historical theme (click on the buttons of the second navbar -> change css)
function swapTheme(csspath) {
  document.getElementById('currentlocalcss').setAttribute('href', csspath);
  // When changing the css (= the historical theme) I also set a key-value in sessionStorage
  sessionStorage.setItem('href', csspath);
  // Stop audio when switching from future
  var myAudio = document.getElementById("myAudio");
  myAudio.pause();

}

// To save historical theme while browsing on the website
// 1. When I change the html (e.g. <a class="..." href="medea.html)></a>") I need to see what is the css I am starting from and KEEP IT
$(document).ready(function () {
  // 2. I save this starting css in a variable
  var start_style = sessionStorage.getItem('href');
  // I check if the start_style has a certain value and I change the href accordingly 
  switch (start_style) {
    case 'css/aldinecss.css':
      document.getElementById('currentlocalcss').setAttribute('href', 'css/aldinecss.css');
      break;
    case 'css/newspapercss.css':
      document.getElementById('currentlocalcss').setAttribute('href', 'css/newspapercss.css');
      break;
    case 'css/baucss.css':
      document.getElementById('currentlocalcss').setAttribute('href', 'css/baucss.css');
      break;
    case 'css/popcss.css':
      document.getElementById('currentlocalcss').setAttribute('href', 'css/popcss.css');
      break;
    case 'css/voguecss.css':
      document.getElementById('currentlocalcss').setAttribute('href', 'css/voguecss.css');
      break;
    case 'css/todaycss.css':
      document.getElementById('currentlocalcss').setAttribute('href', 'css/todaycss.css');
      break;
    case 'css/futurecss.css':
      document.getElementById('currentlocalcss').setAttribute('href', 'css/futurecss.css');
      break;
  }
})

// By clicking on the topBtn button you go back top  
function goTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera  
}

function showEur() {
  var x = document.getElementById("MedeaEur");
  var y = document.getElementById("MedeaApp");
  var z = document.getElementById("MedeaOvi");
  if (x.style.display === "none" || x.style.display === "") {
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
  if (x.style.display === "none" || x.style.display === "") {
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
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

// TESTO A FRONTE

// Euripide

function showOriginalEurpd() {
  var x = document.getElementById("EUoriginalText");
  var y = document.getElementById("EUtextEn");
  x.style.display = "block";
  y.classList.add("col-sm-6", "col-md-5", "col-lg-6");
  $('.eur').css('display', 'block');
  $('.indexcompare').css('display', 'none');
}

function hideOriginalEurpd() {
  var x = document.getElementById("EUoriginalText");
  var y = document.getElementById("EUtextEn");
  $('.eur').css('display', 'block');
  $('.indexcompare').css('display', 'none');
  x.style.display = "none";
  y.removeAttribute("class");
  $('.indexcompare').css('display', 'none');
}


function compareEur() {
  var x = document.getElementById("EUoriginalText");
  var y = document.getElementById("EUtextEn");
  x.style.display = "block";
  y.classList.add("col-sm-6", "col-md-5", "col-lg-6");
  $('.indexcompare').css('display', 'block');
}
function showEur1() {
  $('.eur').css('display', 'none');
  $('.prologue').css('display', 'block');
}

function showEur2() {
  $('.eur').css('display', 'none');
  $('.Medeaspeech').css('display', 'block');
}

function showEur3() {
  $('.eur').css('display', 'none');
  $('.MedeaVSJason').css('display', 'block');
}

// App. Rodio

function showOriginalApRod() {
  var x = document.getElementById("ARoriginalText");
  var y = document.getElementById("ARtextEn");
  x.style.display = "block";
  y.classList.add("col-sm-6", "col-md-5", "col-lg-6");
  $('.ap').css('display', 'block');
  $('.indexcompare').css('display', 'none');
}

function hideOriginalApRod() {
  var x = document.getElementById("ARoriginalText");
  var y = document.getElementById("ARtextEn");
  $('.ap').css('display', 'block');
  $('.indexcompare').css('display', 'none');
  x.style.display = "none";
  y.removeAttribute("class");
  $('.indexcompare').css('display', 'none');
}


function compareAp() {
  var x = document.getElementById("ARoriginalText");
  var y = document.getElementById("ARtextEn");
  x.style.display = "block";
  y.classList.add("col-sm-6", "col-md-5", "col-lg-6");
  $('.indexcompare').css('display', 'block');
}


function showAp1() {
  $('.ap').css('display', 'none');
  $('.Medeasmonologue').css('display', 'block');
}

function showAp2() {
  $('.ap').css('display', 'none');
  $('.Medeamoves').css('display', 'block');
}

function showAp3() {
  $('.ap').css('display', 'none');
  $('.Chalciope').css('display', 'block');
}

function showAp4() {
  $('.ap').css('display', 'none');
  $('.Medeasthoughts').css('display', 'block');
}

function showAp5() {
  $('.ap').css('display', 'none');
  $('.Medeasherb').css('display', 'block');
}

// Ovid

function showOriginalOvid() {
  var x = document.getElementById("OVoriginalText");
  var y = document.getElementById("OVtextEn");
  x.style.display = "block";
  y.classList.add("col-sm-6", "col-md-5", "col-lg-6");
  $('.ovid').css('display', 'block');
  $('.indexcompare').css('display', 'none');
}

function hideOriginalOvid() {
  var x = document.getElementById("OVoriginalText");
  var y = document.getElementById("OVtextEn");
  $('.ovid').css('display', 'block');
  $('.indexcompare').css('display', 'none');
  x.style.display = "none";
  y.removeAttribute("class");
  $('.indexcompare').css('display', 'none');
}

// Ovid, confronto par to par 
function compareOvid() {
  var x = document.getElementById("OVoriginalText");
  var y = document.getElementById("OVtextEn");
  x.style.display = "block";
  y.classList.add("col-sm-6", "col-md-5", "col-lg-6");
  $('.indexcompare').css('display', 'block');
}

function showOvid1() {
  $('.ovid').css('display', 'none');
  $('.MetVII1_73').css('display', 'block');
}

function showOvid2() {
  $('.ovid').css('display', 'none');
  $('.MetVII74_99').css('display', 'block');
}

function showOvid3() {
  $('.ovid').css('display', 'none');
  $('.MetVII100_158').css('display', 'block');
}

function showOvid4() {
  $('.ovid').css('display', 'none');
  $('.MetVII159_178').css('display', 'block');
}

function showOvid5() {
  $('.ovid').css('display', 'none');
  $('.MetVII179_233').css('display', 'block');
}

function showOvid6() {
  $('.ovid').css('display', 'none');
  $('.MetVII234_293').css('display', 'block');
}

function showOvid7() {
  $('.ovid').css('display', 'none');
  $('.MetVII294_349').css('display', 'block');
}

function showOvid8() {
  $('.ovid').css('display', 'none');
  $('.MetVII350_403').css('display', 'block');
}

function showOvid9() {
  $('.ovid').css('display', 'none');
  $('.MetVII404_424').css('display', 'block');
}

// LOGO ANIMATION 

var dls = undefined;
var logo = undefined;
var dead = undefined;
var logoTimer = undefined;

const LOGO_MILLIS = 800;
const NUMB_DELAY = 2000;

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

// Music in future

function togglePlay() {
  var myAudio = document.getElementById("myAudio");
  var element
  myAudio.volume = 0.1;
  if (myAudio.duration > 0 && !myAudio.paused) {
    myAudio.pause();
    $('.float').css('animation', 'none');
  } else {
    myAudio.play();
    $('.float').css('animation', 'pulse 1.75s infinite');
  }
}
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
