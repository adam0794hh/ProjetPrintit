const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
		
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
	
]
// creation des bullets
let counter = 0;
for (let i = 0; i < slides.length; i++){
	let div = document.createElement("div")
	div.classList.add("dot")
	let dotContainer = document.querySelector(".dots")
	dotContainer.appendChild(div)
	if (i === 0){
		div.classList.add("dot_selected")
	}
}

const arrowRight = document.querySelector('.arrow_right');
let img = document.querySelector('.banner-img');

let tag = document.querySelector('#banner p')

arrowRight.addEventListener('click',function(){
	// alert('Droite')

	counter = counter + 1
	if (counter === slides.length){
		counter = 0
	}
	img.src = slides[counter].image;
	tag.innerHTML = slides[counter].tagLine
	let bullet = document.querySelectorAll('.dot')
	for (let i = 0; i < bullet.length; i++){
 	bullet[i].classList.remove('dot_selected')
 }

 bullet[counter].classList.add("dot_selected");
})

const arrowLeft = document.querySelector('.arrow_left');

arrowLeft.addEventListener('click', function() {
counter = counter - 1;
if (counter < 0) {
counter = slides.length - 1;
}
img.src = slides[counter].image;
tag.innerHTML = slides[counter].tagLine;
let bullet = document.querySelectorAll('.dot')
for (let i = 0; i < bullet.length; i++){
	bullet[i].classList.remove('dot_selected')
}

bullet[counter].classList.add("dot_selected");
});









 


