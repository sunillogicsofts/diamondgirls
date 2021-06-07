function update_booking_image(e,i){console.log("Changing booking image"),$("#booking_image_"+i).attr("src",$(e).find(":selected").data("filename")).parent().show()}$(document).ready(function(){$("#reviews-form").on("submit",function(){var e=$(this);return $.post($(this).attr("action"),$(this).serialize()+"&btn_post_review=",function(i){console.log(i);var i=$.parseJSON(i);if(Object.keys(i.errors).length>0){e.find(":input").each(function(){$(this).attr("name")in i.errors?$(this).addClass("error"):$(this).removeClass("error")});for(var s in i.errors){e.find("#message").addClass("error").html(i.errors[s]);break}}else{e.find(":input").each(function(){$(this).removeClass("error")});for(var s in i.values)e.find("[name="+s+"]").val(i.values[s]);e.find("#message").removeClass("error").addClass("success").html("Your review has been submitted!")}}),!1}),$.fn.datepicker&&$(".datepicker").datepicker(),$.fn.timepicker&&$(".timepicker").timepicker(),$.fn.fancybox&&$(".fancybox").fancybox(),$(".click-nav > ul").toggleClass("no-js js"),$(".click-nav .js ul").hide(),$(".click-nav .js").click(function(e){$(this).find("ul").slideToggle(200),$(this).find(".clicker").toggleClass("active"),e.stopPropagation()}),$(document).click(function(){$(".click-nav .js ul").is(":visible")&&($(".click-nav .js ul",this).slideUp(),$(".clicker").removeClass("active"))}),$(".faq-question").click(function(){$(this).parent().parent().parent().find(".faq-answer").slideToggle()})});

$(document).ready(
	function() {
		$('.owl-carousel').owlCarousel({
			loop: true,
			autoplay: true,
			autoplayHoverPause: true,
			autoplaySpeed: 1500,
			 responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				}
			}
		});
		var headerResize = function() {
			var windowHeight = $(window).height();
			$("#home-banner").css("min-height", windowHeight + "px");
		}
		var navbarBG = function() {
			var windowHeight = $(window).height();
			var scrollValue = $(document).scrollTop();
			if (scrollValue > windowHeight) {
				var navbarOpacity = 1;
			}
			else {
				var navbarOpacity = (scrollValue / windowHeight);
			}
			$(".home-nav").css("background-color", "rgba(17,17,17," + navbarOpacity + ")");
		}
		headerResize();
		navbarBG();
		$(window).resize(
			function() {
				headerResize();
			}
		);
		$(document).scroll(
			function() {
				navbarBG();
			}
		);
	}
);

$(document).ready(function(){var i=function(){var i=$("#box-gallery").width(),n=.6*i-10,t=.9*i-25,a=.2*i-10,h=.3*i-15;$(".box-image").each(function(){var z=a,y=h;if($(this).hasClass('landscape')) z = (z * 2) + 10;$(this).css({width:z+"px",height:y+"px"})}),$("#main-image").css({width:n+"px",height:t+"px"})},n=function(){var i=$("#box-gallery").width(),n=i-10,t=1.5*i+15,a=i/3-10,h=.5*i-15;$(".box-image").each(function(){$(this).css({width:a+"px",height:h+"px"})}),$("#main-image").css({width:n+"px",height:t+"px"})};$(window).width()>767?i():n(),$(window).resize(function(){$(window).width()>767?i():n()}),$(".box-image").click(function(){var i=$(this).css("background-image");$("#main-image").css("background-image",i);/*if($(this).hasClass('landscape')){console.log('landscape');$('#main-image').css('height', ($(this).height() * 1.5) + 10 + "px");}else{$('#main-image').css('height', ($(this).height() * 3) + 20 + "px");}*/})});
