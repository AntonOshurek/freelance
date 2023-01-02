const slider = () => {
	//slides wrpper
	const slidesWrapper = document.querySelector('.slider__overview');
	const slidesField = document.querySelector('.slider__inner');
	//all sledes
	const slides = document.querySelectorAll('.slider__item');

	let slideIndex = 2;
	let offset = 0;
	let width = window.getComputedStyle(slides[0]).width;

	const sliderIndicatorBlock = document.querySelector('.slider__controls');
	function createIndicatorBtn() {
		let element = '';

		for(let i = 0; i < slides.length; i++) {
			let isStartSlide = false;
			if (i === slideIndex - 1) {
				isStartSlide = true;
			}

			element += `
				<label class="custom-radio">
					<input class="custom-radio__input" name="slider" aria-label = "slide number ${i+1}" type="radio" data-slide-index = "${i+1}" value="${i}" ${isStartSlide ? 'checked' : ''}>
					<span class="cuctom-radio__box"></span>
				</label>
			`;

			sliderIndicatorBlock.innerHTML = element;
		}
	};
	createIndicatorBtn();

	function setCurrenSlide() {
		slides.forEach((s) => {
			s.classList.remove('slider__item--full');
		})
		slides[slideIndex - 1].classList.add('slider__item--full');
	}
	setCurrenSlide();

	const indicatorsBtn = document.querySelectorAll('.custom-radio__input');
	indicatorsBtn.forEach(btn => {
		btn.addEventListener('click', selectbtn);
	});

	const currentSlideWidth = 280; // from css
	const sizePaddings =  (slidesWrapper.offsetWidth - currentSlideWidth) / 2;

	function selectbtn() {
		let atribute = this.getAttribute('data-slide-index');
		slideIndex = +atribute;
		setCurrenSlide();

		offset = +width.slice(0, width.length - 2) * (atribute -1) - sizePaddings;
		slidesField.style.transform = `translate(-${offset}px)`;

		if(+slideIndex === 1) {
			slidesField.style.transform = `translate(${sizePaddings}px)`;
		}
	};

	offset = +width.slice(0, width.length - 2) * (slideIndex -1) - sizePaddings;
	slidesField.style.transform = `translate(-${offset}px)`;

	if(+slideIndex === 1) {
		slidesField.style.transform = `translate(${sizePaddings}px)`;
	}
}

export default slider;
