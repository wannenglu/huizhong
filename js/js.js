$(function(){
	/* 导航栏 */
	$(".menu_bar li").each(function(){
		$(this).mouseenter(function(){
			$(this).find("dl:first").stop(true,true).slideDown();
		});
		$(this).mouseleave(function(){
			$(this).find("dl:first").slideUp();
		});
	});
	
	$(".nav01 dd").each(function(){
		$(this).mouseenter(function(){
			$(this).find("dl:first").stop(true,true).slideDown();
			$(this).find('.nav_dl').parents('dd').find('a:first').addClass('navdl_cur');
		});
		
		$(this).mouseleave(function(){
			$(this).find("dl:first").slideUp();
			$(this).find('.nav_dl').parents('dd').find('a:first').removeClass('navdl_cur');
		});
	});
	
	
	/* 主页banner条 */
	$(".banner").mouseenter(function(){
		$(".banner_left,.banner_right").show();
		window.clearInterval(scrollDo);
	});
	$(".banner").mouseleave(function(){
		$(".banner_left,.banner_right").hide();
		scrollDo = window.setInterval(function(){
			$(".banner_right").click();
		},3000);
	});
	
	$(".stripe_list li").mouseenter(function(){
		if($(this).hasClass("stripe_now")){
			return;
		}
		
		var oldpos,nowpos;
		nowpos = $(this).index();
		oldpos = $(".stripe_now").index();
		
		$(this).addClass("stripe_now").siblings(".stripe_now").removeClass();
		
		$(".banner_list li").eq(nowpos).stop(false,true).fadeIn(300);
		$(".banner_list li").eq(oldpos).stop(false,true).fadeOut(300);
		
		window.clearInterval(scrollDo);
	});
	
	$(".stripe_list li").mouseleave(function(){
		scrollDo = window.setInterval(function(){
			$(".banner_right").click();
		},3000);
	});
	
	$(".banner_right").click(function(){
		var oldpos,nowpos,lastpos;
		lastpos = $(".stripe_list li:last").index();
		oldpos = $(".stripe_now").index();
		nowpos=oldpos==lastpos?0:oldpos+1;
		
		$(".stripe_list li").eq(nowpos).addClass("stripe_now").siblings(".stripe_now").removeClass();
		
		$(".banner_list li").eq(nowpos).stop(false,true).fadeIn(300);
		$(".banner_list li").eq(oldpos).stop(false,true).fadeOut(300);
	});
	
	$(".banner_left").click(function(){
		var oldpos,nowpos,lastpos;
		lastpos = $(".stripe_list li:last").index();
		oldpos = $(".stripe_now").index();
		nowpos=oldpos==0?lastpos:oldpos-1;
		
		$(".stripe_list li").eq(nowpos).addClass("stripe_now").siblings(".stripe_now").removeClass();
		
		$(".banner_list li").eq(nowpos).stop(false,true).fadeIn(300);
		$(".banner_list li").eq(oldpos).stop(false,true).fadeOut(300);
	});
	
	var scrollDo = window.setInterval(function(){
		$(".banner_right").click();
	},3000);
	
	$(".int_list li").each(function(){
		$(this).mouseenter(function(){
			var num = $(this).index()+1;
			$(this).addClass("int_list_width").siblings("li").removeClass("int_list_width");
			$(this).addClass("int_list"+num+"_hov");
			$(this).stop().animate({width:"339px"},500);
			$(".int_list li").each(function(){
				var nav = $(this).index()+1;
				if(num != nav){
					$(this).stop();
					$(this).removeClass("int_list"+nav+"_hov");
					$(this).animate({width:"0px"},500);
				}
			});
		});
	})
	
	$(".about_left").mouseenter(function(){
		$(".about_left img").stop().animate({display: "inline-block",width: "540px",height: "265px",marginLeft: "-24.5px",marginTop: "-12px"},300,"linear");
		$(".about_left i").stop().animate({bottom:"0px"},300,"linear");
	});
	
	$(".about_left").mouseleave(function(){
		$(".about_left img").stop().animate({display: "inline-block",width: "491px",height: "241px",marginLeft: "0px",marginTop: "0px"},300,"linear");
		$(".about_left i").stop().animate({bottom:"-241px"},300,"linear");
	});
	
	$(".switching_right").click(function(){
		$(".about_right_list li:first").css({marginLeft:"-491px"}).appendTo(".about_right_list").css({marginLeft:"0px"});
	});
	
	$(".switching_left").click(function(){
		$(".about_right_list li:last").prependTo(".about_right_list");
	});
	
	$(".switching_bot_right").click(function(){
		$(".cooperation_list li:first").animate({marginLeft:"-193px"},200,function(){
			$(this).appendTo(".cooperation_list");
			$(this).css({marginLeft:"0px"});
		});
	});
	
	$(".switching_bot_left").click(function(){
		$(".cooperation_list li:last").prependTo(".cooperation_list").css({marginLeft:"-193px"});
		$(".cooperation_list li:first").stop().animate({marginLeft:"0"},200,"linear");
	});
	
	$(".theTop").click(function(){
		$('body,html').animate({scrollTop:0},300,function(){
			$(".theTop").fadeOut();
		});
	});
	
	var winH = parseInt($(window).height());
	$(window).scroll(function(){
		var scrollH = $(this).scrollTop();
		if(scrollH >= winH){
			$(".theTop").fadeIn();
		}
		else{
			$(".theTop").fadeOut();
		}
	});
	
	/* 产品页 */
	$(".pro_ul").isotope({
		itemSelector: ".pro_ul li"
	});

	$(".pro_title_list li").click(function(){
		$(this).addClass("select").siblings("li").removeClass("select");
		var dataValue = $(this).attr("data");
		$(".pro_ul").isotope({
			itemSelector: ".pro_ul li",filter:dataValue
		});
	});
	
	
})






















































