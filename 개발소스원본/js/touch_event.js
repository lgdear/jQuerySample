
//이벤트 등록
$(document).delegate("#main", "pageinit", function(){
	//alert("pageinit");
	$("button").bind("tap", eventFn_tap);
	$("button").bind("taphold", eventFn_taphold);
	$("button").bind("swipe", eventFn_swipe);
	$("button").bind("swipeleft", eventFn_swipeleft);
	$("button").bind("swiperight", eventFn_swiperight);
});

//이벤트 처리 함수
function eventFn_tap()
{
	alert("tap eventFn_tap() 함수 호출 완료!");
}
function eventFn_taphold()
{
	alert("taphold eventFn_taphold() 함수 호출 완료!");
}
function eventFn_swipe()
{
	alert("swipe eventFn_swipe() 함수 호출 완료!");
}
function eventFn_swipeleft()
{
	alert("swipeleft eventFn_swipeleft() 함수 호출 완료!");
}
function eventFn_swiperight()
{
	alert("swiperight eventFn_swiperight() 함수 호출 완료!");
}

