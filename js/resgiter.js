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

$("#pwd1").blur(function(){
	var thisText = $(this).val();
	if(thisText.length > 5){
		$("#text_pwd1").text("密码输入正确");
		$("#text_pwd1").addClass("span1");
		$("#text_pwd1").css("display","block");
	}else if(thisText == ""){
		$("#text_pwd1").removeClass("span1");
		$("#text_pwd1").text("密码不能为空");
		$("#text_pwd1").addClass("span2");
		$("#text_pwd1").css("display","block");
	}else{
		$("#text_pwd1").removeClass("span1");
		$("#text_pwd1").text("请输入正确的密码");
		$("#text_pwd1").addClass("span2");
		$("#text_pwd1").css("display","block");
	}
});

$("#pwd2").blur(function(){
	var thisText = $(this).val();
	var prevText = $("#pwd1").val();
	if(thisText == prevText ){
		$("#text_pwd2").text("输入密码相同");
		$("#text_pwd2").addClass("span1");
		$("#text_pwd2").css("display","block");
	}else if(thisText == ""){
		$("#text_pwd2").removeClass("span1");
		$("#text_pwd2").text("密码不能为空");
		$("#text_pwd2").addClass("span2");
		$("#text_pwd2").css("display","block");
	}else{
		$("#text_pwd2").removeClass("span1");
		$("#text_pwd2").text("再次输入的密码不相同");
		$("#text_pwd2").addClass("span2");
		$("#text_pwd2").css("display","block");
	}
});

$("#submit").click(function(){
	if(!$("#username").val() || !$("#pwd1").val() || !$("#pwd2").val()){
		alert("请输入完整信息")
	}else{
		localStorage.setItem("username",$("#username").val());
		localStorage.setItem("password",$("#pwd1").val());
		location.href = "login.html";
	}
});
