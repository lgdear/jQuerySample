//�̺�Ʈ ��� 
$(document).delegate("#sub", "pagebeforecreate", eventFn_beforecreate);
$(document).delegate("#sub", "pagecreate", eventFn_create);
$(document).delegate("#sub", "pageinit", eventFn_init);

//�̺�Ʈ ó�� �Լ�
function eventFn_beforecreate(event, ui)
{
	alert("pagebeforecreate eventFn_beforecreate() �Լ� ȣ�� �Ϸ�!");
}

//
function eventFn_create(event, ui)
{
	alert("pagecreate eventFn_create() �Լ� ȣ�� �Ϸ�!!");
}

//
function eventFn_init(event, ui)
{
	alert("pageinit eventFn_init() �Լ� ȣ�� �Ϸ�!");
}
