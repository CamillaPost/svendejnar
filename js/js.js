/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('Stardate 235678.89: JavaScript from js/js.js is up and running.');

// When the user scrolls the page, execute myFunction 
/*window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}*/

	$(document).ready(function($){
          var parPosition = [];
        $('.par').each(function() {
            parPosition.push($(this).offset().top);
        });
        
		$('a').click(function(){
			$('html, body').animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 500);
			return false;
		});
        
        	$('.vNav ul li a').click(function () {
			$('.vNav ul li a').removeClass('active');
				$(this).addClass('active');
		}); 
        
       $('.vNav a').hover(function() {
           $(this).find('.label').show();
           }, function() {
           $(this).find('.label').hide();
       });
        
           $(document).scroll(function(){
        var position = $(document).scrollTop(),
                index; 
                for (var i=0; i<parPosition.length; i++) {
                if (position <= parPosition[i]) {
                    index = i;
                    break;
                }
            }
      $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
        });
        
        	$('.vNav ul li a').click(function () {
			$('.vNav ul li a').removeClass('active');
				$(this).addClass('active');
		});   
	});


video2.controls = true;
video3.controls = true;
video3.src = "video/video.mp4";

//Twenty Twenty
