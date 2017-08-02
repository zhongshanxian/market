//点击分享按钮
$("#share").click(function(){
	$("#mask").show();
	$("#popupshare").show();
	setTimeout(function(){
		$("#mask").hide();
		$("#popupshare").hide();
	},3000);
});

//点击立即支付按钮
$(".buy").click(function(){
	$("#mask").show();
	$("#popupbuy").show();
	setTimeout(function(){
		$("#mask").hide();
		$("#popupbuy").hide();
	},3000);
});

//选择数量
var maxnum=10;/*假设限量*/
$(".btndown").click(function(){
	var num=parseInt($("#num").text());
	if(num>1)
	{
		$("#num").text(num-1);
	}
});
$(".btnup").click(function(){
	var num=parseInt($("#num").text());
	if(num<=9)
	{
		$("#num").text(num+1);
	}
	else {
		alert("限量10个");
	}
});

//收藏
$("#attention").click(function(){
	if($("#attention span").css("color")=="rgb(51, 51, 51)")
	{
		$("#attention span").css("color","red");
	}
	else if($("#attention span").css("color")=="rgb(255, 0, 0)"){
		$("#attention span").css("color","#333");
	}
});
console.log($("#attention").css("color"));