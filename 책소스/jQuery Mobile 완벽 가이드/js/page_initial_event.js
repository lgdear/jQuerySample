//이벤트 등록 
$(document).delegate("#sub", "pagebeforecreate", eventFn_beforecreate);
$(document).delegate("#sub", "pagecreate", eventFn_create);
$(document).delegate("#sub", "pageinit", eventFn_init);

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
