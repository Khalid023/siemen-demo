var data1 = [{ h: '虚拟世界：药品研发与工艺设计', b: ['PSE', 'SISW:Culgi', 'SISW: Simcenter (inc.StarCCM+)', 'Simcenter HEEDS'] },
{ h: '虚拟世界：生产设计与开发', b: ['PSE', 'COMOS', 'SIMIT', 'NX 设计、仿真和制造集成式解决方案', 'Teamcenter', 'Tecnomatix'] },
{ h: '现实世界：生产执行与自动化', b: ['无纸化生产管理平台', '研发及实验室数字化套件', '高级计划和调度软件解决方案', '模块化类型包的全集成自动化解决方案', 'SIPAT 过程分析技术平台', 'SIPAT 过程分析技术平台'] },
{ h: '现实世界：生命周期智能与分析', b: ['基于云的开放式物联网操作系统', '低代码开发平台与边缘计算', '总部管理系统', '资产绩效管理套件', 'COMOS一体化工程设计及运维', '流程行业完整的数字化双胞胎'] }]
var data2 = [{ h: '研发实验室', b: ['工艺研发', '实验室数据管理', '药品筛选发现'] },
{ h: '项目工程部', b: ['整体规划', '工厂建设', '工厂运营与管理', '工厂生产流程仿真', '工厂预测性维护', '软件开发管理', '能源管理'] },
{ h: 'QC 质检中心', b: ['LIMS', '稳定性仓库：WMS/BMS/EMS/称重/MES称重模块', 'Teamcenter Quality'] },
{ h: '原液生产车间', b: ['无纸化生产管理平台', '高级计划和调度软件解决方案', '工业互联与网络安全', '过程自动化平台', '医疗器械和诊断试剂生产制造管理系统', '制药行业数据管理', '全集成自动化解决方案', '全集成自动化'] },
{ h: '制剂生产车间', b: ['无纸化生产管理平台', '高级计划和调度软件解决方案', '工业互联与网络安全', '过程自动化平台', '标准化/模块化工程项目方案', '医疗器械和诊断试剂生产制造管理系统', '制药行业数据管理', '基于PAT的数据管理平台'] }]

if (navigator.userAgent.match(/mobile/i)) {
	$('.controlitems').hide();
	$('.contentitems').hide();
	alert("暂未适配移动端，请使用PC浏览器访问");
} else {
	$(function () {
		//设置控件组位置
		$('.controlitems').css('height', $(window).height() - 100);
		$('.controlitems').css('width', $(window).width() - 200);
		$('.contentitems').height($(window).height());
		$('.contentitems').width($(window).width());

		$(window).resize(function () {
			$('.controlitems').css('height', $(window).height() - 100);
			if ($(window).width() >= 700) {
				$('.controlitems').css('width', $(window).width() - 200);
			} else { $('.controlitems').css('width', '500px') }
			$('.contentitems').height($(window).height());
			$('.contentitems').width($(window).width());
		})

		console.log()

		//菜单设置
		var addmenuitem = function (data) {
			var content = '<div class="ulhead"><span></span><h4>' + data.h + '</h4></div><ul>';
			$.each(data.b, function (index, domEle) {
				var li = '<li>' + domEle + '</li>';
				content += li
			})
			content += '</ul>'
			$('.menubody').append($(content));
		}

		$.each(data1, function (index, domEle) {
			addmenuitem(domEle);
		})

		$('.nav').on('click mouseenter', function () {
			$('.nav').hide();
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
				$('#casebtn').show();
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
				left: '-22%',
				top: '-28%',
				width: '200%',
			}, 'slow', function () {
				$('.picbb img').fadeIn();
				$('#topicbtn').fadeIn();
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