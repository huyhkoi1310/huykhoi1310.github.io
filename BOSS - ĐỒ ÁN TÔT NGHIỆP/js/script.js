//phần back to top
$(document).ready(function() {
				$('.moveTop').on('click', function () {
					$('html, body').animate({ scrollTop: 0 }, 'slow');
				});

				$(window).bind('scroll', function () {
					var pos = window.scrollY;
					console.log(pos);
					if (pos > 500) {
						$('.moveTop').show();
					}else {
						$('.moveTop').hide();
					}
	});
				 $(".moveTop").on('click',function(){
        var body = $("html, body");
        body.animate({scrollTop:0}, 500);
    });
});


//phần menu cuộn
jQuery(document).ready(function($) {
  		$("#scropllTop").click(function(event) {
  			$("html, body").animate({scrollTop:0},"slow");
  		});
  		var tenHeigth = 0;
  		$(".thumnail").each(function(){
  			current = $(this).height();
  			if (parseInt(tenHeigth) < parseInt(current)) {
  				tenHeigth = current;
  			}
  		});

  		$(".bor-bot").css("heigth",tenHeigth+"px");

  		pos = $(".thanh-menu").position();

  		$(window).scroll(function() {
  		    var posScroll = $(document).scrollTop();
  		    if(parseInt(posScroll) > parseInt(pos.top)) {
  		    	$(".thanh-menu").addClass("fixed");
  		    }else {
  		    	$(".thanh-menu").removeClass("fixed");
  		    }
  		});
  	});


// chuyển đổi ảnh

