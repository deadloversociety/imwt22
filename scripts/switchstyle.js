//https://stackoverflow.com/questions/41355371/dynamically-switching-css-files

var cssStyle = document.getElementById('currentlocalcss');

window.onload = function () {
    if (localStorage && localStorage.getItem("style"))
        cssStyle.href = localStorage.getItem("style");
};

function setStyle(newStyle) {
    cssStyle.href = newStyle;

    if (localStorage)
        localStorage.setItem("style", newStyle);
};