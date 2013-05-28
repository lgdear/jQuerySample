
//이벤트 등록
/*$(document).delegate("#main", "pageinit", function(){
	$("#main").bind("orientationchange",eventFn_orientationchange);
});

$(document).ready( function(){
	$("body").bind("orientationchange",eventFn_orientationchange);
});
*/


$(document).delegate("#main", "pageinit", function(){
	$("#tgt").hide();
	$("button").click(function(){
		//$("ul").show().trigger("updatelayout");
		//$("#tgt").show().trigger("updatelayout");
		$("#tgt").show();
	});
});

//이벤트 처리 함수
function eventFn_orientationchange(event)
{
	alert("orientationchange eventFn_orientationchange() 함수 호출 완료!");
}