//点击控制菜单开关
var flag = true;
$("#life").click(function(){
	if(flag){
		$(this).attr("src","img/life_nav_img2.png");
		$(".nav_title").css('color','#F4D922');
		flag = false;
	}else{
		$(this).attr("src","img/life_nav_img.png");
		$(".nav_title").css('color','#fff');
		flag = true;
	}
	$("#life_show").stop().slideToggle();
});
//超链接奇数变色//
$("#life_show dd").find("a:odd").css("color","#E92424");
//图片更改
$(".con_con1 img").click(function(){
	$(this).addClass("cont_small_img").siblings().removeClass("cont_small_img");
	$("#cont_big_img").attr('src','img/cont_datashop'+($(this).index()+1)+'.jpg');
});
//购物车
$("#del").click(function(){
	var values = Number($("#num").val())-1;
	if(values == 0){
		return;
	}
	$("#num").val(values);
});

$("#add").click(function(){
	var values = Number($("#num").val())+1;
	if(values == 100){
		return;
	}
	$("#num").val(values);
});
$("#num").blur(function(){
	var number = $(this).val().length;
	var data = $(this).val();
	if(data == "" || data == "0"){
		$(this).val("1");
	}
	var oChar = /^[1-9][0-9]$/;
	if(!oChar.test(data)){
		$(this).val("1");
	}
});
//滚动
var oH = $(".con_introduce_left").offset().top;
$(window).scroll(function(){
	var oNav = $(".con_introduce_left_nav").height();
	if($(window).scrollTop() >= oH){
		$(".con_introduce_left_nav").addClass("fixed");
		$(".goback").css("display","block");
	}else{
		$(".con_introduce_left_nav").removeClass("fixed");
		$(".goback").css("display","none");
	}
	$.each($(".cst"), function(i) {
		var oHight = $(".cst").eq(i).offset().top;
		var oSheight =  $(".cst").eq(i).innerHeight();
		if($(window).scrollTop() >= oHight-oNav && $(window).scrollTop() < oHight+oSheight){
			$(".con_introduce_left_nav li").eq(i).addClass("left_nav_first").siblings().removeClass("left_nav_first");
		}
	});
});
//点击 li
$(".con_introduce_left_nav li").click(function(){
	var thisIndex = $(this).index();
	var oh = $(".cst").eq(thisIndex).offset().top;
	$("body,html").stop().animate({scrollTop:oh},0);
});
//点击返回顶部
$(".goback").click(function(){
	$("body,html").stop().animate({scrollTop:0},500);
});

//文本域限制字数
var iWord = 255;
$(".word_sy span").text(iWord);
$(".con_shop_con5_p2").on("keydown keyup",$(".con_shop_con5_p2 textarea"),function(){
	var iLength= $(".con_shop_con5_p2 textarea").val().length;
	if(iLength >= iWord){
//		$(".con_shop_con5_p2 textarea").val($(".con_shop_con5_p2 textarea").val().slice(0,iWord));
		iLength = iWord;
	}
	$(".word_sy span").text(iWord-iLength);
	
});
//验证码
$("#yzm1").text(fnYzm());
$("#yzm1").click(function(){
	$(this).text(fnYzm());
});
document.getElementById("yzm1").onselectstart = function(){
	return false;
}
function fnYzm(){
	var arrWord = [];
	var str = "";
	for(var i = 65;i < 91;i++){
		arrWord.push(String.fromCharCode(i));
	}
//	for(var j = 97;j < 123;j++){
//		arrWord.push(String.fromCharCode(j));
//	}
	for(var k = 0;k < 4;k++){
		var num = Math.floor(Math.random()*26);
		str+=arrWord[num];
	}
	return str;
}