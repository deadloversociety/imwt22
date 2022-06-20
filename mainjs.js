// When clicking on Dido and Guinevevre issues
function missingIssue() {
  alert("This issue is not available. Stay tuned to read the next articles of our magazine!");
}

// To change historical theme (click on the buttons of the second navbar -> change css)
function swapTheme(csspath) {
  document.getElementById('currentlocalcss').setAttribute('href',csspath);
}


// Only for Future: show card
function showCap() {
  var css = document.getElementById("currentlocalcss");
  if (css.href === "css/futurecss.css") { /* WHY NOT WORKING */
    $('.profile-card').css('background','#fff');
    $('.profile-card').css('box-shadow','0 0 22px #3336');
    $('.caption').css('opacity','1');
  }
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
  $('.ovid').css('display','block');
  $('.indexcompare').css('display','none');
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
  
  function compareEur() {
    var x = document.getElementById("EUoriginalText");
    var y = document.getElementById("EUtextEn");
    x.style.display = "block";
    y.classList.add("col-sm-6", "col-md-5", "col-lg-6"); 
    $('.indexcompare').css('display','block');
  }
  
  function showEur1() {
    $('.eur').css('display','none');
    $('.prologue').css('display','block');
  }
  
  function showEur2() {
    $('.eur').css('display','none');
    $('.Medeaspeech').css('display','block');
  }
  
  function showEur3() {
    $('.eur').css('display','none');
    $('.MedeaVSJason').css('display','block');
  }
