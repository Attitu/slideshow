var  slideIndex,slides,dots,captionText;

	function initGallery(){
		slideIndex = 0;
		slides = document.getElementsByClassName('imageContainer');
		slides[slideIndex].style.opacity = 1;
	}

	initGallery();

	function plusSlide(n){
		moveSlides(slideIndex+n);
	}

	function moveSlides(n){
		var i, current, next;
		var movAnimation={
			forCurrent:'',
			forNext:''
		}

		if(n>slideIndex){
			if(n>=slides.length){n=0}
			moveSlides.forCurrent = "moveLeftCurrentSlide";
			moveSlides.forNext = "moveLeftNextSlide";

		}else if(n<slideIndex){
			if(n<0){n = slides.length-1}
				moveSlides.forCurrent = "moveRightCurrentSlide";
				moveSlides.forNext = "moveRightNextSlide";
			
		}if (n!=slideIndex){
			next = slides[n];
			current = slides[slideIndex];

			for (let i=0; i<slides.length; i++) {
				slides[i].className = 'imageContainer';
				slides[i].style.opacity = 0;
			}

			current.classList.add(moveSlides.forCurrent);
			next.classList.add(moveSlides.forNext);
			slideIndex = n;
		}

		}

		// adding to the list
		let inputSpace = document.getElementById('inputText');
		let btn = document.getElementById('buttonAdd');

		btn.addEventListener('click', function(){
			let duties = document.querySelector('ol');
			let newTask = document.createElement('li');

			newTask.textContent = inputSpace.value;

			duties.appendChild(newTask);

			inputSpace.value = '';
		});