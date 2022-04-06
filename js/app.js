const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
	slide.addEventListener('click', e => {
		deleteActiveClasses();
		// const activeSlide = e.target;
		slide.classList.add('slide--active');
	});
}

function deleteActiveClasses() {
	slides.forEach(slide => {
		slide.classList.remove('slide--active');
	});
}
