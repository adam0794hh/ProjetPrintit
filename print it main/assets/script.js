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

const arrowRight = document.querySelector('.arrow_right');
let img = document.querySelector('.banner-img');
let counter = 0;
let tag = document.querySelector('#banner p')

arrowRight.addEventListener('click',function(){
	// alert('Droite')
	
	counter = (counter + 1) % slides.length
	img.src = slides[counter].image;
	//let tag = document.querySelector('#banner p')
	tag.innerHTML = slides[counter].tagLine
	let bullet = document.querySelectorAll('.dot')
	for (let i = 0; i < bullet.length; i++) {
		bullet[i].classList.remove("dot_selected");
	}
	
	const activeIndex = counter
	bullet[activeIndex].classList.add("dot_selected");
	
})

const arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener('click',function(){
	//alert('Gauche')
	let img = document.querySelector('.banner-img');
	//counter = (counter - 1 + slides.length) % slides.length;
	counter = counter - 1
	if (counter === 0){
		counter = 4;
	}
	img.src = slides[counter].image;
	let tag = document.querySelector('#banner p')
	tag.innerHTML = slides[counter].tagLine
	let bullet = document.querySelectorAll('.dot')
	for (let i = 0; i < bullet.length; i++) {
		bullet[i].classList.remove("dot_selected");
		const activeIndex = counter;
		bullet[activeIndex].classList.add("dot_selected");
	}
	
	
})

 


