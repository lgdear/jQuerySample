//pagebeforechange �̺�Ʈ ���
$(document).bind("pagebeforechange", eventFn_before);


//�̺�Ʈ ó�� �Լ�
function eventFn_before(event, data)
{
	alert("pagebeforechange eventFn_before �Լ� ȣ�� �Ϸ�!!");
	
	if(typeof data.toPage == "string")
	{
		data.toPage = "3-004-5.HTML";
	}
	//alert(data.toPage );
}

