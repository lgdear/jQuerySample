//�̺�Ʈ ���
$(document).delegate("#main", "pageinit", function(){
	//alert("pageinit");
	$("button").bind("tap", eventFn_tap);
	$("button").bind("taphold", eventFn_taphold);
	$("button").bind("swipe", eventFn_swipe);
	$("button").bind("swipeleft", eventFn_swipeleft);
	$("button").bind("swiperight", eventFn_swiperight);
});
//�̺�Ʈ ó�� �Լ�
function eventFn_tap()
{
	alert("tap eventFn_tap() �Լ� ȣ�� �Ϸ�!");
}
function eventFn_taphold()
{
	alert("taphold eventFn_taphold() �Լ� ȣ�� �Ϸ�!");
}
function eventFn_swipe()
{
	alert("swipe eventFn_swipe() �Լ� ȣ�� �Ϸ�!");
}
function eventFn_swipeleft()
{
	alert("swipeleft eventFn_swipeleft() �Լ� ȣ�� �Ϸ�!");
}
function eventFn_swiperight()
{
	alert("swiperight eventFn_swiperight() �Լ� ȣ�� �Ϸ�!");
}
