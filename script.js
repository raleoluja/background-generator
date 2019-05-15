var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button1 = document.querySelector(".button1");

css.textContent =
	"linear-gradient(to right," 
	+ color1.value 
	+ "," 
	+ color2.value
	+")";

function setGredient() {
	body.style.background =
	"linear-gradient(to right," 
	+ color1.value 
	+ "," 
	+ color2.value
	+")";

	css.textContent = body.style.background; 
}

function randomColor(){
	return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

function setRandomColor() {

	body.style.background =
	"linear-gradient(to right," 
	+ randomColor() 
	+ "," 
	+ randomColor()
	+")";

	css.textContent = body.style.background;
}

color1.addEventListener("input", setGredient);

color2.addEventListener("input", setGredient);

button1.addEventListener("click", setRandomColor);

console.log(randomColor());