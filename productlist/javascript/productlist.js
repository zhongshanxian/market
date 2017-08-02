var flag=0;//判断升降序
var txt=['<div class="items">'+
	  			'<img src="../homepage/style/img/page4.jpg">'+
	  			'<p>[限时限量]门店小程序</p><br>'+
	  			'<div>￥<span class="price" name="price">500.00</span>'+
	  			'<span class="glyphicon glyphicon-shopping-cart"></span>'+
	  			'</div></div>',
	  			'<div class="items">'+
	  			'<img src="../homepage/style/img/page4.jpg">'+
	  			'<p>微商城小程序[年费]</p><br>'+
	  			'<div>￥<span class="price" name="price">3800.00</span>'+
	  			'<span class="glyphicon glyphicon-shopping-cart"></span>'+
	  			'</div></div>',
  				'<div class="items">'+
					'<img src="../homepage/style/img/page3.jpg">'+
					'<p>基础版[年费]</p><br>'+
					'<div>￥<span class="price" name="price">1800.00</span>'+
					'<span class="glyphicon glyphicon-shopping-cart"></span>'+
					'</div></div>',
  				'<div class="items">'+
	  			'<img src="../homepage/style/img/page3.jpg">'+
	  			'<p>专业版[年费]</p><br>'+
	  			'<div>￥<span class="price" name="price">3800.00</span>'+
	  			'<span class="glyphicon glyphicon-shopping-cart"></span>'+
	  			'</div></div>',
  				'<div class="items">'+
	  			'<img src="../homepage/style/img/page3.jpg">'+
	  			'<p>平台版[年费]</p><br>'+
	  			'<div>￥<span class="price" name="price">16800.00</span>'+
	  			'<span class="glyphicon glyphicon-shopping-cart"></span>'+
	  			'</div></div>',
  				'<div class="items">'+
	  			'<img src="../homepage/style/img/page3.jpg">'+
	  			'<p>至尊版（微商城、小程序）</p><br>'+
	  			'<div>￥<span class="price" name="price">128000.00</span>'+
	  			'<span class="glyphicon glyphicon-shopping-cart"></span>'+
	  			'</div></div>',
  				'<div class="items">'+
	  			'<img src="../homepage/style/img/page5.jpg">'+
	  			'<p>节日营销推文（3-5篇）</p><br>'+
	  			'<div>￥<span class="price" name="price">999.00</span>'+
	  			'<span class="glyphicon glyphicon-shopping-cart"></span>'+
	  			'</div></div>'];

$(".item1").html(txt[0]);
$(".item2").html(txt[1]);
$(".item3").html(txt[2]);
$(".item4").html(txt[3]);
$(".item5").html(txt[4]);
$(".item6").html(txt[5]);
$(".item7").html(txt[6]);

//获取价格
var pricespan=document.getElementsByName("price");
var price=[];
for(var i=0;i<pricespan.length;i++)
{
	price[i]=pricespan[i].innerHTML;
}

//升序函数
function sortup(a,b){
	return a-b;
}
//降序函数
function sortdown(a,b){
	return b-a;
}

//排序后显示函数
function displaysort(classtyle,num){
	if(flag==0)
	{
		price.sort(sortup);
	}
	else {
		price.sort(sortdown);
	}
	for(var i=0;i<price.length;i++)
	{
		if(txt[i].indexOf(price[num])!=-1)
		{
			$(classtyle).html(txt[i]);
		}
	}
}

//点击排序
$("#sortprice").click(function(){
	$("#sortprice").css("color","red");
	if(flag==0)
	{
		flag=1;
	}
	else {
		flag=0;
	}
	displaysort(".item1",0);
	displaysort(".item2",1);
	displaysort(".item3",2);
	displaysort(".item4",3);
	displaysort(".item5",4);
	displaysort(".item6",5);
	displaysort(".item7",6);
});

//筛选
$("#selectmes").click(function(){
	$("#mask").show();
	$("#popup").show();
});
$(".btnpop").click(function(){
	if($(this).css("color")=="rgb(128, 128, 128)")
	{
		$(this).css("color","red");
	}
	else if($(this).css("color")=="rgb(255, 0, 0)"){
		$(this).css("color","gray");
	}
});
$("#cancel").click(function(){
	$("#mask").hide();
	$("#popup").hide();
});

