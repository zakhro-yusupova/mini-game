const slides = document.querySelectorAll('.slide');

function slidesPlugin(activeSlide = 0) {
	slides[activeSlide].classList.add('actice');

	for (const slide of slides) {
		slide.addEventListener('click', () => {
			removeActiveClasses();

			slide.classList.add('active');
		});
	}

	function removeActiveClasses() {
		slides.forEach((slide) => {
			slide.classList.remove('active');
		});
	}
}

slidesPlugin(0);
