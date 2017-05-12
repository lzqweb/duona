//用户名
$("#username").blur(function(){
	var thisText = $("#username").val();
	var phone = /^(13[0-9]|15[0-9]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	var email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
	if(phone.test(thisText)){
		$("#text_name").text("手机号输入正确");
		$("#text_name").addClass("span1");
		$("#text_name").css("display","block");
	}else if(email.test(thisText)){
		$("#text_name").text("邮箱输入正确");
		$("#text_name").addClass("span1");
		$("#text_name").css("display","block");
	}else if(thisText == ""){
		$("#text_name").removeClass("span1");
		$("#text_name").text("手机号或邮箱不能为空");
		$("#text_name").addClass("span2");
		$("#text_name").css("display","block");
	}else{
		$("#text_name").removeClass("span1");
		$("#text_name").text("请输入正确的手机号或邮箱");
		$("#text_name").addClass("span2");
		$("#text_name").css("display","block");
	}
});
//密码
$("#pwd").blur(function(){
	var thisText = $(this).val();
	if(thisText.length > 5){
		$("#text_pwd").text("密码输入正确");
		$("#text_pwd").addClass("span1");
		$("#text_pwd").css("display","block");
	}else if(thisText == ""){
		$("#text_pwd").removeClass("span1");
		$("#text_pwd").text("密码不能为空");
		$("#text_pwd").addClass("span2");
		$("#text_pwd").css("display","block");
	}else{
		$("#text_pwd").removeClass("span1");
		$("#text_pwd").text("请输入正确的密码");
		$("#text_pwd").addClass("span2");
		$("#text_pwd").css("display","block");
	}
});
//验证码
$(".yzm").blur(function(){
	var thisText = $(this).val().toLocaleLowerCase();
	var yText = $("#yzm").text().toLocaleLowerCase();
	if(thisText == yText){
		$(".yzm_p").text("验证码正确");
		$(".yzm_p").addClass("span1");
		$(".yzm_p").css("display","block");
	}else if(thisText == ""){
		$(".yzm_p").removeClass("span1");
		$(".yzm_p").text("验证码不能为空");
		$(".yzm_p").addClass("span2");
		$(".yzm_p").css("display","block");
	}else{
		$(".yzm_p").removeClass("span1");
		$(".yzm_p").text("验证码不能正确");
		$(".yzm_p").addClass("span2");
		$(".yzm_p").css("display","block");
	}
});

//登录
$("#login").click(function(){
	var oUsername = $("#username").val();
	var oPwd = $("#pwd").val();
	var oYzm = $(".yzm").val();
	if(!oUsername || !oPwd || !oYzm){
		alert("请完善信息");
	}else{
		$.ajax({
			type:"get",
			url:"json.json",
			async:true,
			dataType:"json",
			success:function(data){
				if(oUsername == data.username && oPwd == data.password){
					location.href = "index.html?name="+oUsername;
				}else{
					alert("账号或密码不正确");
				}
			}
		});
	}
});
//验证码
$("#yzm").text(fnYzm());
$("#yzm").click(function(){
	$(this).text(fnYzm());
});
document.getElementById("yzm").onselectstart = function(){
	return false;
}
function fnYzm(){
	var arrWord = [];
	var str = "";
	for(var i = 65;i < 91;i++){
		arrWord.push(String.fromCharCode(i));
	}
	for(var j = 97;j < 123;j++){
		arrWord.push(String.fromCharCode(j));
	}
	for(var k = 0;k < 4;k++){
		var num = Math.floor(Math.random()*52);
		str+=arrWord[num];
	}
	return str;
}
