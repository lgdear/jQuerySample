//이벤트 등록
$(document).bind("pagebeforehide", eventFn_beforehide);
$(document).bind("pagebeforeshow", eventFn_beforeshow);
$(document).bind("pagehide", eventFn_hide);
$(document).bind("pageshow", eventFn_show);

//이벤트 처리 함수
function eventFn_beforehide(event, ui)
{
	alert("pagebeforehide eventFn_beforehide () 함수 호출 완료!");
	alert(ui.nextPage);
}

//
function eventFn_beforeshow(event, ui)
{
	alert("pagebeforeshow eventFn_beforeshow() 함수 호출 완료!!");
	alert(ui.prevPage);
}

//
function eventFn_hide(event, ui)
{
	alert("pagehide eventFn_hide() 함수 호출 완료!");
	alert(ui.nextPage);
}

//
function eventFn_show(event, ui)
{
	alert("pageshow eventFn_show() 함수 호출 완료!");
	alert(ui.prevPage);
}
