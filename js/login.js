function login()
{
				
	var user=document.getElementById("user").value;
	var pwd=document.getElementById("pwd").value;
	var vercode=document.getElementById("verificationcode").value;
	if((user=="admin"||user=="522323"||user=="123456@qq.com")&&pwd=="123456"&&vercode=="admin"){				
		user="";
		pwd="";
		vercode="";
		window.location.href="index2.html";
	}else{
			alert("账号或者密码错误")
		}
}
