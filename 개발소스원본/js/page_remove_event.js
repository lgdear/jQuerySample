
//이벤트 등록
$(document).bind("pageremove", eventFn_remove);
//$(document).delegate("#main", "pageremove", eventFn_remove1);
//$(document).delegate("#sub", "pageremove", eventFn_remove2);

$(document).ready(function(){
	alert("document.ready");
});

//이벤트 처리 함수
function eventFn_remove(event)
{
	alert("main pageremove eventFn_remove() 함수 호출 완료!");
}

