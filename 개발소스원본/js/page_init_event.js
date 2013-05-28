
//$(document).bind("pageload", eventFn_load);
//$(document).bind("pageloadfailed", eventFn_loadFail);

//이벤트 등록
/*
$("#sub").live("pagebeforecreate", eventFn_beforecreate);
$("#sub").live("pagecreate", eventFn_create);
$("#sub").live("pageinit", eventFn_init);
$("#main").live("pageinit", eventFn_init);
*/

$(document).delegate("#sub", "pagebeforecreate", eventFn_beforecreate);
$(document).delegate("#sub", "pagecreate", eventFn_create);
$(document).delegate("#sub", "pageinit", eventFn_init);
$(document).delegate("#main", "pageinit", eventFn_init);

$(document).ready(function(){
	alert("document.ready");
});

//이벤트 처리 함수
function eventFn_beforecreate(event, ui)
{
	alert("pagebeforecreate eventFn_beforecreate() 함수 호출 완료!");
}

//
function eventFn_create(event, ui)
{
	alert("pagecreate eventFn_create() 함수 호출 완료!!");
}

//
function eventFn_init(event, ui)
{
	alert("pageinit eventFn_init() 함수 호출 완료!");
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
