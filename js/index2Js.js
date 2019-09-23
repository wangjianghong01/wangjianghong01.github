function setIn(){
				$("#set1").slideToggle();
				$("#zd1").slideToggle();
				$("#set2").slideUp();
				$("#zd2").slideUp("fast");
				$("#set3").slideUp();
				
		}
function setIn2()
{
				$("#set2").slideToggle();
				$("#zd2").slideToggle("fast");
				var display=document.getElementById("login")
	            display.style.display="none";
	            $("#set1").slideUp();
				$("#zd1").slideUp();
				$("#set3").slideUp();
				
			}
function setIn3(){
				$("#set3").slideToggle();
				$("#set2").slideUp();
				$("#zd2").slideUp("fast");
				 $("#set1").slideUp();
				$("#zd1").slideUp();
			}
function setIn4(){
				$("#suo").slideToggle();
			}
function setIn5(){
				$("#share").slideToggle();
			}
function setIn6(){
				$("#login").slideToggle();
		
			}
function logslt(){
	var display=document.getElementById("logSlt")
	display.style.display="block";
}

function vidShift(){	
 var btn=document.getElementById("vidshift");
 var video=document.getElementById("vidplay");
 if(btn.value=="暂停"){
 	video.pause();
 	btn.value="播放";
 }else if(btn.value=="播放"){
 	video.play();
 	btn.value="暂停";
 }
}

/*全屏函数
 * (function() {
    var runPrefixMethod = function(element, method) {
        var usablePrefixMethod;
        ["webkit", "moz", "ms", "o", ""].forEach(function(prefix) {
            if (usablePrefixMethod) return;
            if (prefix === "") {
                // 无前缀，方法首字母小写
                method = method.slice(0,1).toLowerCase() + method.slice(1);
                
            }
            
            var typePrefixMethod = typeof element[prefix + method];
            
            if (typePrefixMethod + "" !== "undefined") {
                if (typePrefixMethod === "function") {
                    usablePrefixMethod = element[prefix + method]();
                } else {
                    usablePrefixMethod = element[prefix + method];
                }
            }
        });
        
        return usablePrefixMethod;
    };
})();*/
function playSpeed(){
	var video=document.getElementById("vidplay");	
	var btn=document.getElementById("playSpeed");
	if(btn.value=="倍速"){
		video.playbackRate=1.5;
		btn.value="还原";
	}else if(btn.value=="还原"){
		video.playbackRate=1;
		btn.value="倍速";
	}
}

