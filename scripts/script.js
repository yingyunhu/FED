var menuButton = document.querySelector("nav:nth-of-type(2) button");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	var menu = document.querySelector("nav:nth-of-type(2)");
	menu.classList.toggle("open");
}