/*Invalid sources:
    - https://stackoverflow.com/questions/41355371/dynamically-switching-css-files
    - https://stackoverflow.com/questions/67105891/switch-between-2-stylesheets-and-perpetuate-user-preference-with-local-storage 
    - https://stackoverflow.com/questions/49827781/how-would-i-get-a-button-to-change-stylesheets-be-saved-to-local-storage-and-a */

var cssElem = document.getElementById('currentlocalss');

window.onload = function () {
  currentCss = sessionStorage.getItem('displayedCSS');
  cssElem.setAttribute('href', currentCss);
}

function switchTheme(styleSheet) {
  sessionStorage.setItem('displayedCSS', styleSheet);
  cssElem.setAttribute('href', styleSheet);
  
  // medea.html x futurecss.css Avoiding music to continue when changing style
  var myAudio = document.getElementById("myAudio");
  myAudio.pause();
}