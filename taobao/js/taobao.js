var div=document.getElementById("lunbotu");
var img=document.getElementsByClassName("tupian");
var c =0;
var timer=setInterval(function(){
	// alert("123");
	if(c==4){
		c=0;
	}
	c++;
	// img[c].style.display="block";
},1000);
