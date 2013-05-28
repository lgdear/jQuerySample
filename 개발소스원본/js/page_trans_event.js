
//$(document).bind("pageload", eventFn_load);
//$(document).bind("pageloadfailed", eventFn_loadFail);

//이벤트 등록
$(document).bind("pagebeforehide", eventFn_beforehide);

$(document).bind("pagebeforeshow", eventFn_beforeshow);

$(document).bind("pagehide", eventFn_hide);

$(document).bind("pageshow", eventFn_show);


$(document).ready(function(){
	alert("document.ready");
});

//이벤트 처리 함수
function eventFn_beforehide(event, ui)
{
	alert("pagebeforehide pagebeforehide() 함수 호출 완료!");
	alert(ui.prevPage);
	alert(ui.nextPage);
}

//
function eventFn_beforeshow(event, ui)
{
	alert("pagebeforeshow eventFn_beforeshow() 함수 호출 완료!!");
	alert(ui.prevPage);
	alert(ui.nextPage);
}

//
function eventFn_hide(event, ui)
{
	alert("pagehide eventFn_hide() 함수 호출 완료!");
	alert(ui.prevPage);
	alert(ui.nextPage);
}

//
function eventFn_show(event, ui)
{
	alert("pageshow eventFn_show() 함수 호출 완료!");
	alert(ui.prevPage);
	alert(ui.nextPage);
}


//
function eventFn_load(event, data)
{
	alert("pageload eventFn_load() 함수 호출 완료!");
}
function eventFn_loadFail(event, data)
{
	alert("pageload eventFn_loadFail() 함수 호출 완료!");
}
