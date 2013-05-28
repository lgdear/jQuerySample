//pagebeforechange 이벤트 등록
$(document).bind("pagebeforechange", eventFn_before);


//이벤트 처리 함수
function eventFn_before(event, data)
{
	alert("pagebeforechange eventFn_before 함수 호출 완료!!");
	
	if(typeof data.toPage == "string")
	{
		data.toPage = "3-004-5.HTML";
	}
	//alert(data.toPage );
}

