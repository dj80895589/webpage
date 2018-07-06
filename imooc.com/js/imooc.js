// class:headerlogin当屏幕可用宽度小于1200消失
var headerlogin = document.getElementsByClassName("headerlogin");
    function login(){
    var x = document.body.clientWidth;
    var y = document.body.clientHeight;
    if(x<1240){
    	headerlogin[0].style.display="none";
    }else{
    	headerlogin[0].style.display="block";
    }
    }
var timer=setInterval(login,10);
// 搜索栏点击a标签消失
var searchinput = document.getElementsByClassName("search-input");
var searchTags = document.getElementsByClassName("searchTags");
function search(){
	searchTags[0].style.display="none";
}
function searchout(){
	searchTags[0].style.display="block";
}
searchinput[0].onclick=function(){search()};
searchinput[0].onblur=function(){searchout()};
/*下载APP弹框*/
var xiazaiappli = document.getElementsByClassName("xiazaiappli");
var downloadappdisplay = document.getElementsByClassName("downloadappdisplay");
function erweimashow(){
	downloadappdisplay[0].style.display="block";
}
function erweimahide(){
    downloadappdisplay[0].style.display="none";
}
xiazaiappli[0].onmouseover=function(){erweimashow()};
downloadappdisplay[0].onmouseover=function(){erweimashow()};
xiazaiappli[0].onmouseout=function(){erweimahide()};
downloadappdisplay[0].onmouseout=function(){erweimahide()};
/*购物车弹窗*/
var shopcartdisplay = document.getElementsByClassName("shopcartdisplay");
var shopcart = document.getElementsByClassName("shopcart");
function gouwucheshow(){
	shopcartdisplay[0].style.display="block";
}
function gouwuchehide(){
	shopcartdisplay[0].style.display="none";
}
shopcart[0].onmouseover=function(){gouwucheshow()};
shopcartdisplay[0].onmouseover=function(){gouwucheshow()};
shopcart[0].onmouseout=function(){gouwuchehide()};
shopcartdisplay[0].onmouseout=function(){gouwuchehide()};
/*左导航栏弹出框 前端开发*/
var submenu = document.getElementsByClassName("submenu");
var middleleftfirst = document.getElementsByClassName("middleleftfirst");
function qianduankaifashow(){
	submenu[0].style.display="block";
}
function qianduankaifahide(){
	submenu[0].style.display="none";	
}
submenu[0].onmouseover=function(){qianduankaifashow()};
middleleftfirst[0].onmouseover=function(){qianduankaifashow()};
submenu[0].onmouseout=function(){qianduankaifahide()};
middleleftfirst[0].onmouseout=function(){qianduankaifahide()};
// 轮播图 
var timer1;
var middlerighttop=document.getElementsByClassName("middlerighttop");
var lunbotudot=document.getElementsByClassName("lunbotudot");
var lunbotufangleft=document.getElementsByClassName("lunbotufangleft");
var lunbotufangright=document.getElementsByClassName("lunbotufangright");
// 通过c变量来控制展示图片
var c =0;  
//图片轮播的效果 把图片先全隐藏再显示其中一张
$(document).ready(function(){
function lunbo(){
	for (var i = 0; i < middlerighttop.length; i++) {
		middlerighttop[i].style.display="none";
		lunbotudot[i].style.backgroundColor="black";
		// console.log(c);
	}
	middlerighttop[c].style.display="block";
	lunbotudot[c].style.backgroundColor="white";
	c++;
	if(c==5){
		c=0;
	}
};
// 设置定时器开始图片轮播
timer1=setInterval(lunbo,1500);
$(".middlerighttop").hover(function(){
    clearInterval(timer1);
    },function(){
    timer1=setInterval(lunbo,1500)
  });
$(".lunbotufangleft").hover(function(){
    clearInterval(timer1);
    c=c-1;
    },function(){
    timer1=setInterval(lunbo,1500);
    c=c+1;
  });
$(".lunbotufangright").hover(function(){
    clearInterval(timer1);
    c=c-1;
    },function(){
    timer1=setInterval(lunbo,1500);
    c=c+1;
  });
$(".lunbotudot").mouseenter(function(){
	clearInterval(timer1);
	c = $(this).index();  //取到全局变量转为jq对象
	for (var i = 0; i < middlerighttop.length; i++) {
	middlerighttop[i].style.display="none";
	lunbotudot[i].style.backgroundColor="black";
	}
	middlerighttop[c].style.display="block";
	lunbotudot[c].style.backgroundColor="white";
	//鼠标移出lunbotudot就会进入middlerighttop，顺带启动了计时器
});

$(".lunbotufangleft").click(function(){
	// clearInterval(timer1);
	// c = $(this).index();
	c=c-1;
	if(c<0){
		c=4;
	}
	console.log(c);
	for (var i = 0; i < middlerighttop.length; i++) {
	middlerighttop[i].style.display="none";
	lunbotudot[i].style.backgroundColor="black";
	}
	middlerighttop[c].style.display="block";
	lunbotudot[c].style.backgroundColor="white";
});

$(".lunbotufangright").click(function(){
	// clearInterval(timer1);
	// c = $(this).index();
	c=c+1;
	if(c>4){
		c=0;
	}
	console.log(c);
	for (var i = 0; i < middlerighttop.length; i++) {
	middlerighttop[i].style.display="none";
	lunbotudot[i].style.backgroundColor="black";
	}
	middlerighttop[c].style.display="block";
	lunbotudot[c].style.backgroundColor="white";
});
})