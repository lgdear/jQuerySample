$(document).bind( "mobileinit" ,  global_config );
function global_config()
{
	alert("global_config() �Լ� ȣ�� �Ϸ�! ");
	$.mobile.test = "Test ok!";
	$.mobile.ns = "good";
}
$(document).ready(function (){
	$("button").click( exec );
});
function exec()
{
	alert("��ư Ŭ�� �̺�Ʈ ȣ�� �Ϸ�!");
	alert($.mobile.test);
	alert( $.mobile.ns );
	alert( $.mobile. subPageUrlKey );
	alert( $.mobile.activePageClass );
	alert( $.mobile.activeBtnClass );
	alert( $.mobile.ajaxEnabled );
	alert( $.mobile.hashListeningEnabled );
	alert( $.mobile.linkBindingEnabled  );
	alert( $.mobile.minScrollBack  );
	alert( $.mobile.defaultDialogTransition );
	alert( $.mobile.loadingMessage );
	alert( $.mobile.pageLoadErrorMessage );
	alert( $.mobile.autoInitializePage );
	alert( $.mobile.pushStateEnabled  );
	alert($.mobile.orientationChangeEnabled  );
	alert($.mobile.gradeA() );
} 

