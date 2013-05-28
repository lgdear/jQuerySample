$(document).delegate("#main", "pageinit", function(){
	//alert("pageinit");
	$("button").bind("vmouseover", eventFn_vmouseover);
	$("button").bind("vmousedown", eventFn_vmousedown);
	$("button").bind("vmousemove", eventFn_vmousemove);
	$("button").bind("vmouseup", eventFn_vmouseup);
	$("button").bind("vclick", eventFn_vclick);
	$("button").bind("vmousecancel", eventFn_vmousecancel);
});
//이벤트 처리 함수
function eventFn_vmouseover()
{
	alert("vmouseover eventFn_vmouseover() 함수 호출 완료!");
}
function eventFn_vmousedown()
{
	alert("vmousedown eventFn_vmousedown() 함수 호출 완료!");
}
function eventFn_vmousemove()
{
	alert("vmousemove eventFn_vmousemove() 함수 호출 완료!");
}
function eventFn_vmouseup()
{
	alert("vmouseup eventFn_vmouseup() 함수 호출 완료!");
}
function eventFn_vclick()
{
	alert("vclick eventFn_vclick() 함수 호출 완료!");
}
function eventFn_vmousecancel()
{
	alert("vmousecancel eventFn_vmousecancel() 함수 호출 완료!");
}
