$(document).bind("pagebeforeload", eventFn_before);
function eventFn_before(event, data)
{ 
	alert("eventFn() 함수 호출 완료!");	
	alert("data.url="+data.url);
	alert("data.absUrl="+data.absUrl );
	alert("data.dataUrl="+data.dataUrl );
}

