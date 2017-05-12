//顶图 点击隐藏
$(".head").on('click',function(){
	$(this).hide();
});

//nav 奇数变色
$(".con1").each(function(i){
	$(".con1:eq("+i+") a:odd").css("color","#E92424");
});
$(".color_nav").each(function(i){
	$(".color_nav:eq("+i+") span:even").css("color","#E92424");
});
//banner 轮播图
var oImg = $(".ul1 li").first().clone();
$(".ul1").append(oImg);
var imgWidth = $(".ul1 li").width();
var imgLength = $(".ul1 li").length;
var index = 0;
//右点击事件
$(".right").click(function(){
	com2();
});
//左点击事件
$(".left").click(function(){
	index--;
	if(index == -1){
		$(".ul1").css("left",-imgWidth*(imgLength-1));
		index = imgLength - 2;
	}
	com1();
});
//圆点
$(".ul2 li").click(function(){
	index = $(this).index();
	com1();
});
//定时器
var timer = setInterval(move,2000);
function move(){
	com2();
}
//定时器停止
$(".banner").hover(function(){
	clearInterval(timer);
},function(){
	timer = setInterval(move,2000);
});
//函数1
function com1(){
	$(".ul1").stop().animate({"left":-imgWidth*index},500);
	$(".ul2 li").eq(index%(imgLength-1)).addClass("li2").siblings().removeClass("li2");
}
//函数2
function com2(){
	index++;
	if(index == imgLength){
		$(".ul1").css("left",0);
		index = 1;
	}
	com1();
}

$(".tp").hover(
	function(){
		$(this).find("img").stop().animate({"width":"150px","height":"130px","padding":0},500);
		$(this).css({"border":"1px solid #DBB10E"});
		$(this).next().css({"color":"#DBB10E"});
	},
	function(){
		$(this).find("img").stop().animate({"width":"142px","height":"122px","padding":"4px"},500);
		$(this).css({"border":"1px solid #C5C5C5"});
		$(this).next().css({"color":"#fff"});
	}
);

//蒙版
$(".p1").hover(function(){
	$(this).css({"color":"red","textDecoration":"underline"})
},function(){
	$(this).css({"color":"#686868","textDecoration":"none"})
});
$(".con21").append($('<div class="mb"></div><div class="price1">20.00元</div>'));

$(".con21").hover(function(){
	$(this).css("background","#808080")
	$(this).find(".mb").css("display","block");
	$(this).find(".price1").stop().animate({"opacity":"1","top":"40%"},500);
},function(){
	$(this).css("background","#F5F5F5")
	$(this).find(".mb").css("display","none");
	$(".p1").css("z-index","0");
	$(this).find(".price1").stop().animate({"opacity":"0","top":"10%"});
});

//图片伸缩
$(".p4").click(function(){
	$(this).next().slideToggle(1000);
});

//用户名
fnShow();
function fnShow(){
	var oUrl = location.href;
	var oArr = {};
	if(oUrl.indexOf('?') != -1){
		var oVal = oUrl.split('?')[1];
		var oObj = oVal.split('&');
		for(var i = 0;i < oObj.length;i++){
			oArr[oObj[i].split('=')[0]] = decodeURI(oObj[i].split('=')[1]);
		}
		$("#login").css("display","none");
		$("#resgiter").css("display","none");
		$("#uname").append(oArr.name).css("display","block");
	}else{
		$("#login").css("display","block");
		$("#resgiter").css("display","block");
		$("#uname").empty().css("display","none");
	}
}

	