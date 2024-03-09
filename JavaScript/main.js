//!Se encarga de manetener el valor de C a traves de multiples pestañas

let c = sessionStorage.getItem('c');
let mode = sessionStorage.getItem('mode');

if (c === null || c === undefined) {
	c = 0;
}

if (mode === null || mode === undefined) {
	mode = 1;
}

//! Se encarga de hacer que al dar click en el boton descubre, se aumente el carro de compras +1

function aumentarCarrito() {
	c++;
	if (c > 0) {
		document.getElementById("bagcounter").style.display = "flex";
	}
	ccounter.innerText = c;
	sessionStorage.setItem('c', c);
}

//! Oculta o muestra elementos al cargar la pagina

window.onload = function ocultarElementosDefault() {
	document.getElementById("busqueda").style.display = "none";
	if (c <= 0) {
		document.getElementById("bagcounter").style.display = "none";
	}
	else {
		document.getElementById("bagcounter").style.display = "flex";
		ccounter.innerText = c;
	}
	if (mode % 2 == 0) {
		var body = document.body;
		var header = document.querySelector("header");
		body.classList.add("dark-mode");
		header.classList.add("dark-mode-header");
	}
	else {
		var body = document.body;
		var header = document.querySelector("header");
		body.classList.remove("dark-mode");
		header.classList.remove("dark-mode-header");
	}
	changeDisplayedSVG();
}

//!Aparece la barra de busqueda al dar click y doble click

function clickBusqueda() {
	var buscar = document.getElementById("icon3");
	buscar.addEventListener("onlick", mostrarBarra, true);
}

function ocultarBarra() {
	document.getElementById("busqueda").style.display = "none";
}

function mostrarBarra() {
	document.getElementById("busqueda").style.display = "block";
}

function mostrarAddTo() {
	document.getElementById("ShoppingCont").style.display = "flex";
}

function changeMode() {
	mode++;
	sessionStorage.setItem('mode', mode);
	if (mode % 2 == 0) {
		var body = document.body;
		var header = document.querySelector("header");
		body.classList.add("dark-mode");
		header.classList.add("dark-mode-header");
	}
	else {
		var body = document.body;
		var header = document.querySelector("header");
		body.classList.remove("dark-mode");
		header.classList.remove("dark-mode-header");
	}
}

var dol = 1;

function animateSVG() {
	if (dol <= 2) {
		dol++;
	}
	else {
		dol = 1;
	}
	var svg = document.getElementById("lightSVG");
	svg.classList.toggle("SVG-click");
}

//! if mode % 2 results an uneven number, the theme is set to light mode, if the result is integer, it is in dark mode

var pic = document.getElementById('lightSVG');

function changeDisplayedSVG() {
	if (dol == 2) {
		pic.src = '../Images/darkModeIcon.svg';
	}
	if (dol == 1) {
		pic.src = '../Images/SVG/lightModeIcon.svg';
	}
}

function mostrarPrimeraImg(){
	document.getElementById("mainViewImg1").style.display = "block";
	document.getElementById("mainViewImg2").style.display = "none";
	document.getElementById("mainViewImg3").style.display = "none";
	document.getElementById("mainViewImg4").style.display = "none";
}

function mostrarSegundaImg(){
	document.getElementById("mainViewImg2").style.display = "block";
	document.getElementById("mainViewImg1").style.display = "none";
	document.getElementById("mainViewImg3").style.display = "none";
	document.getElementById("mainViewImg4").style.display = "none";
}

function mostrarTerceraImg(){
	document.getElementById("mainViewImg3").style.display = "block";
	document.getElementById("mainViewImg1").style.display = "none";	
	document.getElementById("mainViewImg2").style.display = "none";
	document.getElementById("mainViewImg4").style.display = "none";
}

function mostrarCuartaImg(){
	document.getElementById("mainViewImg4").style.display = "block";
	document.getElementById("mainViewImg1").style.display = "none";	
	document.getElementById("mainViewImg2").style.display = "none";
	document.getElementById("mainViewImg3").style.display = "none";
}

function mostrarPrimeraImgA10(){
	document.getElementById("A10widthfix").style.display = "block";
	document.getElementById("mainViewImg2").style.display = "none";	
	document.getElementById("mainViewImg3").style.display = "none";
}

function mostrarSegundaImgA10(){
	document.getElementById("mainViewImg2").style.display = "block";	
	document.getElementById("A10widthfix").style.display = "none";
	document.getElementById("mainViewImg3").style.display = "none";
}

function mostrarTerceraImgA10(){
	document.getElementById("mainViewImg3").style.display = "block";
	document.getElementById("mainViewImg2").style.display = "none";	
	document.getElementById("A10widthfix").style.display = "none";
}

function mostrarPrimeraImgV2(){
	document.getElementById("BlckSrkwidthfix").style.display = "block";
	document.getElementById("mainViewImgV2").style.display = "none";
	document.getElementById("mainViewImgV3").style.display = "none";
	document.getElementById("mainViewImgV4").style.display = "none";
}

function mostrarSegundaImgV2(){
	document.getElementById("mainViewImgV2").style.display = "block";
	document.getElementById("BlckSrkwidthfix").style.display = "none";
	document.getElementById("mainViewImgV3").style.display = "none";
	document.getElementById("mainViewImgV4").style.display = "none";
}

function mostrarTerceraImgV2(){
	document.getElementById("mainViewImgV3").style.display = "block";
	document.getElementById("BlckSrkwidthfix").style.display = "none";	
	document.getElementById("mainViewImgV2").style.display = "none";
	document.getElementById("mainViewImgV4").style.display = "none";
}

function mostrarCuartaImgV2(){
	document.getElementById("mainViewImgV4").style.display = "block";
	document.getElementById("BlckSrkwidthfix").style.display = "none";	
	document.getElementById("mainViewImgV2").style.display = "none";
	document.getElementById("mainViewImgV3").style.display = "none";
}

window.sessionStorage = c, mode;