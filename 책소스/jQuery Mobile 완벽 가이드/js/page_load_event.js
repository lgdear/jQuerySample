$(document).bind("pagebeforeload", eventFn_before);
function eventFn_before(event, data)
{ 
	alert("eventFn() �Լ� ȣ�� �Ϸ�!");	
	alert("data.url="+data.url);
	alert("data.absUrl="+data.absUrl );
	alert("data.dataUrl="+data.dataUrl );
}

