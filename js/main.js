$(function(){
	$(".btn").on("mouseover", function(){
		$(".menu").slideDown()
	})
	$(".menu").on("mouseleave", function(){
		$('.menu').slideUp('fast',function(){
			$(".btn").fadeIn()
		});

	})
	$('.icon-Close').on('click', function(){
		$('.menu').slideUp()
	})
	$("#titleA").on("click", function(){
		$(this).addClass('toggleColor');
		$('#titleB').removeClass('toggleColor')
		$('.typeB').show();
		$('.typeA').hide();
	})
	$("#titleB").on("click", function(){
		$(this).addClass('toggleColor');
		$('#titleA').removeClass('toggleColor');
		$('.typeA').show();
		$('.typeB').hide();
	})
})

