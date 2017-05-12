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
//word
for(var i = 65;i < 91;i++){
	if(i < 90){
		$("#word").append("<a href='##'>"+String.fromCharCode(i)+"</a>-");
	}else{
		$("#word").append("<a href='##'>"+String.fromCharCode(i)+"</a>");
	}
}
//nav
$(".food_nav_right ul li a").click(function(){
	$(this).addClass("li1").siblings().removeClass("li1");
});
$(".food_nav_right ol li a").click(function(){
	$(".food_nav_right ol li a").removeClass("li_a1");
	$(this).addClass("li_a1");
});




$.ajax({
	type:"get",
	url:"facial.json",
	async:true,
	dataType:"json",
	data:"",
	success:function(data){
		$.each(data.data,function(index){
			$('<div class="con21">'+
				'<div class="mb"></div><div class="price1">20.00元</div>'+
				'<div class="title4">'+
					'<img src="img/main_heart.png"/>'+
					'<span class="t1">'+data.data[index].heart+'</span>'+
					'<span class="t2">剩余：<label>'+data.data[index].sy+'</label></span>'+
				'</div>'+
				'<img src="'+data.data[index].img+'" class="img3"/>'+
				'<p class="p1">'+data.data[index].title+'</p>'+
				'<p class="p2">'+
					'<span>面值：<span class="price">'+data.data[index].price+'</span>元</span>'+
					'<button>返利'+data.data[index].fprice+'元</button>'+
				'</p>'+
			'</div>').appendTo($('.facial_con'));
		});
		$('<div class="clear"></div><ul class="fy">'+
			'<li id="laquo">&laquo;</li>'+
			'<li id="raquo">&raquo;</li>'+
		'</ul>').appendTo($('.facial_con'));
		$('<li>1</li>').insertBefore($("#raquo"));
		$('<li>2</li>').insertBefore($("#raquo"));
		$('<li>3</li>').insertBefore($("#raquo"));
		$('<li>4</li>').insertBefore($("#raquo"));
		$(".fy").width($(".fy li").outerWidth()*$(".fy li").length);
		mb();
	}
});


function mb(){
	//蒙版
	$(".p1").hover(function(){
		$(this).css({"color":"red","textDecoration":"underline"})
	},function(){
		$(this).css({"color":"#686868","textDecoration":"none"})
	});
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
}