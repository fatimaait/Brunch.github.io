 /*icon menu respons*/
        const icon = document.querySelector('.navicon');
		const link = document.querySelector('.nav-links');

		// Added click event listener to icon hamburg
		icon.addEventListener('click', ()=>{
		   if(link.style.display == 'flex' || link.style.display == '')
		    link.style.display = 'none';
		   else link.style.display = 'flex'
		})

		/*sticky nav*/
        window.onscroll = function() {myFunction()};

		var navbar = document.getElementById("navbars");
		var sticky = navbar.offsetTop;

		function myFunction() {
		  if (window.pageYOffset >= sticky) {
		    navbar.classList.add("sticky")
		  } else {
		    navbar.classList.remove("sticky");
		  }
		}
         /*slider*/  // $(document).ready(function(){
		  $('.slick-sliders').slick({
		  	  infinite: true,
		  	  autoplay:true,
			  speed: 300,
			  arrows: true,
			  slidesToScroll: 1,
			  nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fa fa-arrow-right"></i></div>',
              prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-arrow-left"></i></div>',
               responsive: [
		{
			breakpoint: 1300,
			settings: {
				slidesPerRow: 3
			}
		},
		{
			breakpoint: 900,
			settings: {
				rows: 1,
				slidesPerRow: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				rows: 1,
				slidesPerRow: 1
			}
		}
	]
                
});
	  
