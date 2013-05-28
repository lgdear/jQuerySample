$(document).bind( "mobileinit" ,  global_config );
function global_config()
{
	alert("global_config() 함수 호출 완료! ");
	$.mobile.test = "Test ok!";
}

