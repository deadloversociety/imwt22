/*Invalid sources:
    - https://stackoverflow.com/questions/41355371/dynamically-switching-css-files
    - https://stackoverflow.com/questions/67105891/switch-between-2-stylesheets-and-perpetuate-user-preference-with-local-storage 
    - https://stackoverflow.com/questions/49827781/how-would-i-get-a-button-to-change-stylesheets-be-saved-to-local-storage-and-a */

let darkEnabled = Boolean(localStorage.darkEnabled);
const cssElem = document.getElementById('currentlocalss');
if (!darkEnabled) cssElem.href = 'css/todaycss.css';
else cssElem.href = 'css/todaycss.css';
document.getElementById("bauhaus")
  .addEventListener('click', function () {
    darkEnabled = !darkEnabled;
    localStorage.darkEnabled = darkEnabled;
    if (!darkEnabled) cssElem.href = 'css/todaycss.css';
    else cssElem.href = 'css/todaycss.css';
  });