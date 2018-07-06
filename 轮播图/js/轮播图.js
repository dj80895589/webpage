var div=document.getElementById("lunbotu");
var img=document.getElementsByTagName("img");
var li=document.getElementsByTagName("li");
// 通过c变量来控制展示图片
var c =0;  
$(document).ready(function(){
	//图片轮播的效果 把图片先全隐藏再显示其中一张
function lunbo(){
	for (var i = 0; i < $("img").length; i++) {
		$("img")[i].style.display="none";
		$("li").css("background-color","#DDDDDD");
		console.log(c);
	}
	$("img")[c].style.display="block";
	$("li")[c].style.background="RED";
	c++;
	if(c==4){
		c=0;
	}
};
// 设置定时器开始图片轮播
var timer=setInterval(lunbo,1000)
// 鼠标移入关闭定时器
$("#lunbotu").hover(function(){
    clearInterval(timer);
    },function(){
    timer=setInterval(lunbo,1000)
  });


$("#lunbotu ul li").mouseenter(function(){
	c = $(this).index();
	// console.log(c);
	for (var i = 0; i < $("img").length; i++) {
    $("img")[i].style.display="none";
    $("li").css("background-color","#DDDDDD");
    }
	$("img")[c].style.display="block";
	$("li")[c].style.background="RED";
  });
})


