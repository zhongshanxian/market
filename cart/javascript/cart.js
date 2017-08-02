//是否选中函数
function clicksure(classstyle){
	if($(classstyle).css("color")=="rgb(51, 51, 51)"||$(classstyle).css("color")=="#333")
	{
		$(classstyle).css("color","red");
	}
	else
	{
		$(classstyle).css("color","#333");
	}
}
//第一件商品
$(".clicksure1").click(function(){
	clicksure(".clicksure1");
	if($(".clicksure1").css("color")=="rgb(255, 0, 0)"||$(".clicksure1").css("color")=="red")
	{
		$("#sumup").text(parseInt($("#money1").text()));
		displaynum(1);
		if($(".clicksure2").css("color")=="rgb(255, 0, 0)"||$(".clicksure2").css("color")=="red")
		{
			clicksure(".countclick");
			$("#sumup").text(parseInt($("#money1").text())+parseInt($("#money2").text()));
			displaynum(2);
		}
	}
	else{
		$(".countclick").css("color","#333");
		if($(".clicksure2").css("color")=="rgb(255, 0, 0)"||$(".clicksure2").css("color")=="red")
		{
			$("#sumup").text(parseInt($("#money2").text()));
			displaynum(1);
		}
		else{
			$("#sumup").text("0.00");
			displaynum(0);
		}
	}
});
//第二件商品
$(".clicksure2").click(function(){
	clicksure(".clicksure2");
	if($(".clicksure2").css("color")=="rgb(255, 0, 0)"||$(".clicksure2").css("color")=="red")
	{
		$("#sumup").text(parseInt($("#money2").text()));
		displaynum(1);
		if($(".clicksure1").css("color")=="rgb(255, 0, 0)"||$(".clicksure1").css("color")=="red")
		{
			clicksure(".countclick");
			$("#sumup").text(parseInt($("#money1").text())+parseInt($("#money2").text()));
			displaynum(2);
		}
	}
	else{
		$(".countclick").css("color","#333");
		if($(".clicksure1").css("color")=="rgb(255, 0, 0)"||$(".clicksure1").css("color")=="red")
		{
			$("#sumup").text(parseInt($("#money1").text()));
			displaynum(1);
		}
		else{
			$("#sumup").text("0.00");
			displaynum(0);
		}
	}
});
//全选
$(".countclick").click(function(){
	clicksure(".countclick");
	if($(".countclick").css("color")=="rgb(255, 0, 0)")
	{
		$(".clicksure1").css("color","red");
		$(".clicksure2").css("color","red");
		$("#sumup").text(parseInt($("#money1").text())+parseInt($("#money2").text()));
		displaynum(2);
	}
	if($(".countclick").css("color")=="rgb(51, 51, 51)")
	{
		$(".clicksure1").css("color","#333");
		$(".clicksure2").css("color","#333");
		$("#sumup").text("0.00");
		displaynum(0);
	}
});


//在大于 1的基础上，点击后 -1函数
function decrease(productid){
	var num=parseInt($(productid).text());
	if(num>1)
	{
		num-=1;
	}
	$(productid).text(num);
}
$(".product1 .btndown").click(function(){
	decrease("#pro1");
})
$(".product2 .btndown").click(function(){
	decrease("#pro2");
})

//点击后+1函数
function add(productid){
	var num=parseInt($(productid).text());
	num+=1;
	$(productid).text(num);
}
$(".product1 .btnup").click(function(){
	add("#pro1");
})
$(".product2 .btnup").click(function(){
	add("#pro2");
})

//结算数量显示函数
function displaynum(num){
	$("#sumnum").text(num);
	if(num>0)
	{
		$("#btnsum").css({"backgroundColor":"red","color":"white"});
	}
	else
	{
		$("#btnsum").css({"backgroundColor":"#eee","color":"black"});
	}
}

//删除商品
$("#delete").click(function(){
	console.log($(".clicksure1").css("color"));
	if($(".clicksure1").css("color")=="rgb(255, 0, 0)")
	{
		$(".clicksure1").parent().remove();
	}
	if($(".clicksure2").css("color")=="rgb(255, 0, 0)")
	{
		$(".clicksure2").parent().remove();
	}
});