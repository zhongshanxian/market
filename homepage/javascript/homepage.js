//首页轮播每2.5秒更换一次
$("#Carousel").carousel({
	interval: 2500
});

var txt1=["建立小商业生态区-打造小京东平台","平台版-多用户入住，支持自定义@域名@版权"],
		txt2=["零成本打造庞大的业务推广团队-迅速 拓展销售网络","专业版-全员分销，营销推广高手强烈推荐"],
		txt3=["关注版本案例，可看完整效果","专业版-全员分销，营销推广高手强烈推荐"];

function slidechange(id,text){
	var tran1Interval=setInterval(function(){
		if($(id).html()==text[0])
		{
			$(id).html(text[1]);
		}
		else
		{
			$(id).html(text[0]);
		}
	},2000);
}
slidechange(tran1,txt1);
slidechange(tran2,txt2);
slidechange(tran3,txt3);
