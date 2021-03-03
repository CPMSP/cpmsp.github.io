// nav intersection observer for slide-in and out nav bar

let nav = document.querySelector('.mainNav');

let options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.25
};

let navObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio === 1) {
			entry.target.style.transform = 'scale(1)';
			entry.target.style.transition = 'transform 0.5s ease-in';
		}
		else {
			entry.target.style.transform = 'scale(0)';
			entry.target.style.transition = 'transform 0.25s ease-out';
		}
	});
}, options);

navObserver.observe(nav);

// sticky nav bar

let navTop = nav.offsetTop;

function stickyNavigation() {
	if (window.scrollY >= navTop) {
		nav.classList.add('fixed');
	}
	else {
		nav.classList.remove('fixed');
	}
}

window.addEventListener('scroll', stickyNavigation);
