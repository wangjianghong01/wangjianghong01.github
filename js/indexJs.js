//公共数据
var src="../index2/video/";
//var name=['图1.mp4','图2.mp4','图3.mp4','图5.mp4'];

 
//index页面onload加载事件
function load(){		
	//点击页面跳转
	var video=document.getElementsByClassName("sp1");
	for(var i=0;i<video.length;i++){
		video[i].onclick= function(){			
			window.location.href="index2/index2.html";			
		}
	}	
}




//index2页面onload加载事件
function load2(){
	var vidplay=document.getElementById("vidplay");	
	vidplay.src=src;
	
}

