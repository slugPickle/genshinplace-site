const setTheme = theme => document.documentElement.className = theme;
function setLogoGreen(){
    document.getElementById("logo").src="images/logo-green.svg"
    document.getElementById("foot-logo").src="images/foot-logo-green.svg"
}

function setLogoWhite() {
    document.getElementById("logo").src="images/logo-oled.svg"
    document.getElementById("foot-logo").src="images/foot-logo-white.svg"
}

function setLogoGold() {
    document.getElementById("logo").src="images/logo-white.svg"
    document.getElementById("foot-logo").src="images/foot-logo-gold.svg"

}

function setLogoBlack() {
    document.getElementById("logo").src="images/logo-black.svg"
    document.getElementById("foot-logo").src="images/foot-logo-black.svg"
}
