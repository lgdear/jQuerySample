
//pagebeforeload 이벤트 등록
$(document).bind("pagebeforeload", eventFn_before);

$(document).bind("pageload", eventFn_load);

$(document).bind("pageloadfailed", eventFn_fail);

$(document).ready(function(){
	//alert("document.ready");
});

//이벤트 처리 함수
function eventFn_before(event, data)
{
	//alert("eventFn_before() 함수 호출 완료!");
	//alert("data.url="+data.url);
	//alert("data.absUrl="+data.absUrl );
	//alert("data.dataUrl="+data.dataUrl );
	
	
	//event.preventDefault();
	//alert("preventDefault() 함수 호출 완료!");
	//alert(data.deferred.resolve );
	//data.deferred.resolve( data.absUrl, data.options, page );
	//data.deferred.resolve( "http://localhost/JQM/cpt2_page1.html", data );
	//data.deferred.resolve(data.absUrl);
	//data.deferred.reject(  );
}

//
function eventFn_load(event, data)
{
	//alert("eventFn_load() 함수 호출 완료!");
	//alert(data.xhr);
	alert("pageload textStatus = "+data.textStatus);
}

//
function eventFn_fail(event, data)
{
	//alert("eventFn_fail() 함수 호출 완료!");
	alert("pagefail textStatus = "+data.textStatus);
	//alert(data.errorThrown);
}