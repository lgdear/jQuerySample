//�̺�Ʈ ���
$(document).bind("pagebeforehide", eventFn_beforehide);
$(document).bind("pagebeforeshow", eventFn_beforeshow);
$(document).bind("pagehide", eventFn_hide);
$(document).bind("pageshow", eventFn_show);

//�̺�Ʈ ó�� �Լ�
function eventFn_beforehide(event, ui)
{
	alert("pagebeforehide eventFn_beforehide () �Լ� ȣ�� �Ϸ�!");
	alert(ui.nextPage);
}

//
function eventFn_beforeshow(event, ui)
{
	alert("pagebeforeshow eventFn_beforeshow() �Լ� ȣ�� �Ϸ�!!");
	alert(ui.prevPage);
}

//
function eventFn_hide(event, ui)
{
	alert("pagehide eventFn_hide() �Լ� ȣ�� �Ϸ�!");
	alert(ui.nextPage);
}

//
function eventFn_show(event, ui)
{
	alert("pageshow eventFn_show() �Լ� ȣ�� �Ϸ�!");
	alert(ui.prevPage);
}
