/*
//获取需付的金额
$("#sumup").text($(".allmoney1").text());
*/

//支付弹出框
$("#pay").click(function(){
	$("#mask").show();
	$("#popup").show();
	//支付成功显示
	var popup=setTimeout(function(){
		$("#popupimg").attr("src","style/img/success.png");
		$("#popupword").text("支付成功");
		//退出弹出框
		var popup=setTimeout(function(){
			$("#popupimg").attr("src","style/img/loading.gif");
			$("#popupword").text("请稍等...");
			$("#mask").hide();
			$("#popup").hide();
		},2000);
	},5000);
});


