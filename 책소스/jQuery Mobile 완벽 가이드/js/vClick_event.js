$(document).delegate("#main", "pageinit", function(){
	//alert("pageinit");
	$("button").bind("vmouseover", eventFn_vmouseover);
	$("button").bind("vmousedown", eventFn_vmousedown);
	$("button").bind("vmousemove", eventFn_vmousemove);
	$("button").bind("vmouseup", eventFn_vmouseup);
	$("button").bind("vclick", eventFn_vclick);
	$("button").bind("vmousecancel", eventFn_vmousecancel);
});
//�̺�Ʈ ó�� �Լ�
function eventFn_vmouseover()
{
	alert("vmouseover eventFn_vmouseover() �Լ� ȣ�� �Ϸ�!");
}
function eventFn_vmousedown()
{
	alert("vmousedown eventFn_vmousedown() �Լ� ȣ�� �Ϸ�!");
}
function eventFn_vmousemove()
{
	alert("vmousemove eventFn_vmousemove() �Լ� ȣ�� �Ϸ�!");
}
function eventFn_vmouseup()
{
	alert("vmouseup eventFn_vmouseup() �Լ� ȣ�� �Ϸ�!");
}
function eventFn_vclick()
{
	alert("vclick eventFn_vclick() �Լ� ȣ�� �Ϸ�!");
}
function eventFn_vmousecancel()
{
	alert("vmousecancel eventFn_vmousecancel() �Լ� ȣ�� �Ϸ�!");
}
