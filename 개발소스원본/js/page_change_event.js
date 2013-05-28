
//$(document).bind("pageload", eventFn_load);
//$(document).bind("pageloadfailed", eventFn_loadFail);

//pagebeforechange 이벤트 등록
$(document).bind("pagebeforechange", eventFn_before);

$(document).bind("pagechange", eventFn_change);

$(document).bind("pagechangefailed", eventFn_fail);

$(document).ready(function(){
	alert("document.ready");
});

//이벤트 처리 함수
function eventFn_before(event, data)
{
	alert("pagebeforechange eventFn_before 함수 호출 완료!!");
	
	if(typeof data.toPage == "string")
	{
		//data.toPage = "cpt2_list1.html";
		data.toPage = "cpt2_list2.html";
	}
	alert(data.toPage );
}

//
function eventFn_change(event, data)
{
	alert("pagechange eventFn_change() 함수 호출 완료!");
	alert("pagechange toPage = "+data.toPage );
}

//
function eventFn_fail(event, data)
{
	alert("pagechangefailed eventFn_fail() 함수 호출 완료!");
	alert("pagechange toPage = "+data.toPage );
}

function eventFn_load(event, data)
{
	alert("pageload eventFn_load() 함수 호출 완료!");
}
function eventFn_loadFail(event, data)
{
	alert("pageload eventFn_loadFail() 함수 호출 완료!");
}
