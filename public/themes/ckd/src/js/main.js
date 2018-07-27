import 'slick-carousel/slick/slick.min';
import 'barba.js/dist/barba.min';

// Init slick slider
$('.slider').slick({
	infinite: true,
	slidesToShow: 1,
	dots: true,
});

// Init barba.js
Barba.Pjax.start();