var menuButton = document.querySelector("header nav:nth-of-type(2) button");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	var menu = document.querySelector("header nav:nth-of-type(2)");
	menu.classList.toggle("open");
}


var dropdown = document.querySelector(".page2 section:nth-of-type(3) > button:first-of-type");

dropdown.addEventListener("click", dropdownMenu);

function dropdownMenu() {
	var menu2 = document.querySelector(".page2 section:nth-of-type(3)");
	menu2.classList.toggle("open");
}