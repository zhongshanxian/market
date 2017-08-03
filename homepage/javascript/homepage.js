//首页轮播每2.5秒更换一次
$("#Carousel").carousel({
	interval: 2500
});

/*无动画版切换
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
*/


/*滚动字幕*/
//三个字幕需要的内容
var marqueeArr1=['<a href=#>平台版-多用户入住，支持自定义@域名@版权</a><br>',
                '<a href=#>建立小商业生态-打造小京东平台</a><br>'],
    marqueeArr2=['<a href=#>专业版-全员分销营销推广高手强烈推荐</a><br>',
                '<a href=#>零成本打造庞大的业务推广团队-迅速拓展销售网络</a><br>'],
    marqueeArr3=['<a href=#>基础版-五脏六腑俱全，满足大部分基础需求</a><br>',
                '<a href=#>关注版本案例，可看完整效果</a><br>'];
//放置循环
var marqueeInterval1=[],marqueeInterval2=[],marqueeInterval3=[];
//选取Id
var marqueeNum1=0,marqueeNum2=0,marqueeNum3=0;

//初始化函数
function initMarquee(placeId,arr,marqueeNum,marqueeBoxId,marqueeInterval){
    var str=arr[0];//首先放入第一行
    var placeId=document.getElementById(placeId);
    placeId.innerHTML=("<div id="+marqueeBoxId+" class='marqueeBox'><div>"+str+"</div></div>");
    var marqueeBoxId=document.getElementById(marqueeBoxId);
    marqueeNum++;//准备 第二行
    marqueeInterval[0]=setInterval(function(){
        var str=arr[marqueeNum];
        marqueeNum++;
        if(marqueeNum>=arr.length)//超过数量则重新开始
        {
            marqueeNum=0;
        }
        if(marqueeBoxId.childNodes.length==1)//检测里面有几行，只有一行的话，再加一行
        {
            var nextLine=document.createElement("div");
            nextLine.innerHTML=str;
            marqueeBoxId.appendChild(nextLine);
        }
        else//其他情况将下一行的内容放大原第一行
        {
            marqueeBoxId.childNodes[0].innerHTML=str;
            marqueeBoxId.appendChild(marqueeBoxId.childNodes[0]);
            marqueeBoxId.srcollTop=0;//初始化滚动距离
        }
        clearInterval(marqueeInterval[1]);//清除上一次的时间
        marqueeInterval[1]=setInterval(function(){//滚动动画
            marqueeBoxId.scrollTop++;
            if(marqueeBoxId.scrollTop==30){
                clearInterval(marqueeInterval[1]);
            }
        },25);
    },2000);
}

//调用函数，并传入相应参数
initMarquee("header1",marqueeArr1,marqueeNum1,'marqueeBox1',marqueeInterval1);
initMarquee("header2",marqueeArr2,marqueeNum2,'marqueeBox2',marqueeInterval2);
initMarquee("header3",marqueeArr3,marqueeNum3,'marqueeBox3',marqueeInterval3);