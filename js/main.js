var data1 = [{ h: 'hhhhh', b: [1, 2, 3] },]
var data2 = [{ h: '2-2', b: [1, 2, 3] }, { h: '2-3', b: [4, 5, 6] }]

if (navigator.userAgent.match(/mobile/i)) {
	$('.controlitems').hide();
	$('.contentitems').hide();
	alert("暂未适配移动端，请使用PC浏览器访问");
} else {
	$(function () {
		//设置控件组位置
		$('.controlitems').css('height', $(window).height() - 100);
		$('.controlitems').css('width', $(window).width() - 200);
		$(window).resize(function () {
			$('.controlitems').css('height', $(window).height() - 100);
			if ($(window).width() >= 700) {
				$('.controlitems').css('width', $(window).width() - 200);
			} else { $('.controlitems').css('width', '500px') }
		})

		//菜单设置
		$('.nav').on('click mouseenter', function () {
			$('.nav').hide();
			$.each(data1, function (index, domEle) {
				addmenuitem(domEle);
			})
			$('.menu').slideDown();
		})

		$('.menu').on('mouseleave', function () {
			$(this).slideUp(function () {
				$('.nav').fadeIn();
			});
			;
		})

		$('.menuhead h3').on('click', function () {
			$('.menuhead h3').toggleClass('mtchosen');
		})

		var addmenuitem = function (data) {
			var content = '<div class="ulhead"><span></span><h4>' + data.h + '</h4></div><ul>';
			$.each(data.b, function (index, domEle) {
				var li = '<li>' + domEle + '</li>';
				content += li
			})
			content += '</ul>'
			$('.menubody').append($(content));
		}

		$('#mt1').on('click', function () {
			$('.menubody').empty();
			$.each(data1, function (index, domEle) {
				addmenuitem(domEle);
			})
		})
		$('#mt2').on('click', function () {
			$('.menubody').empty();
			$.each(data2, function (index, domEle) {
				addmenuitem(domEle);
			})
		})

		//内容设置
		var state = 0;
		$('.contentitems').height($(document).height());
		$('.pichome img').fadeIn(3000, function () {
			$('.controlitems').fadeIn('slow')
		});
		//控件组
		$('.icon-Home').click(function () {
			state = 0
			$('.pica img').fadeOut('slow');
			$('.picb img').fadeOut('slow', function () {
				$('.picb img').css({
					left: '0',
					top: '0',
					width: '100%',
				})
			});
			$('.picbb img').hide();
			$('#btna').show();
			$('#btnb').show();
			$('#btnbb').hide();
			$('#casebtn').show();
			$('#topicbtn').hide();
			$('.pages').hide();
		})
		$('.icon-Back').click(function () {
			if (state == 0) {
				alert('already on the desktop')
			} else if (state == 1) {
				state--;
				$('.pica img').fadeOut('slow');
				$('.picb img').fadeOut('slow');
				$('#btna').show();
				$('#btnb').show();
				$('#btnbb').hide();
			} else if (state == 2) {
				state--;
				$('#topicbtn').hide();
				$('.picbb img').fadeOut('fast', function () {
					$('.picb img').animate({
						left: '0',
						top: '0',
						width: '100%',
					}, 'slow', function () {
						$('#btnbb').show();
					})
				})


			} else if (state == 3) {
				alert('请先关闭详情页')
			}
		})
		//场景1
		$('#btna').click(function () {
			state = 1;
			$('.pica img').fadeIn('slow');
			$(this).hide();
			$('#btnb').hide();
			$('#casebtn').hide();
		})
		//场景2
		$('#btnb').click(function () {
			state = 1;
			$('.picb img').fadeIn('slow');
			$('#btnbb').show();
			$(this).hide();
			$('#btna').hide();
			$('#casebtn').hide();
		})
		//场景二二级
		$('#btnbb').click(function () {
			state = 2
			$('#btnbb').hide();
			$('.picb img').animate({
				left: '-400px',
				top: '-270px',
				width: '200%',
			}, 'slow', function () {
				$('.picbb img').fadeIn();
				$('#topicbtn').show();
			})

		})
		//详情页
		$('#topicbtn').click(function () {
			state = 3
			$('#topic').fadeIn();
			$('#topicbtn').hide();
		})
		$('#casebtn').click(function () {
			$('#case').fadeIn();
		})
		$('#topic span').click(function () {
			state = 2
			$('#topic').fadeOut(function () {
				$('#topicbtn').fadeIn();
			});

		})
		$('#case span').click(function () {
			$('#case').fadeOut(function () {
				$('#casebtn').fadeIn();
			});

		})

	})

}