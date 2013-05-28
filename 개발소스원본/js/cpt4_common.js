
//리스트 시작과 끝 index
var startIndex = 0;
var endIndex = 0;

// dynList page
$(document).delegate("#dynList", "pageinit", function(){

	//더보기 버튼 클릭 이벤트 등록
	$("#showBtn").click(function(){
		makeList();
	});
	//초기화 버튼 클릭 이벤트 등록
	$("#initBtn").click(function(){
		startIndex = 0;
		endIndex = 0;
		$("#address li:gt(0)").remove();
		$("#address").listview("refresh");
		//makeList();
	});
	//화면 로딩 후 첫 실행 
	makeList();	
});

//리스트 만들기
function makeList()
{
	var listMarkup = "";
	//var cnt = address.data.length;
	
	//보여줄 마지막 index 생성
	var showCnt = Number($("#showCnt").val());	
	endIndex = endIndex + showCnt;
	//alert("startIndex="+startIndex+", endIndex="+endIndex);
	
	//json 객체의 정보를 이용해서 리스트 태그를 생성
	for(var i=startIndex; i<endIndex; i++){
		listMarkup = listMarkup + "<li>"+address.data[i].sido+" "+address.data[i].gungu+" "+address.data[i].doro
								  +" "+address.data[i].gmnum1+"-"+address.data[i].gmnum2+"</li>";
	}
	
	//다음번 리스트를 위해서 index 값 업데이트
	startIndex = endIndex;
	
	//리스트 추가
	$("#address li:last ").after(listMarkup);
	
	//리스트 refresh
	$("#address").listview("refresh");
}


//map page
$(document).delegate("#map", "pageinit", function(){
	
	var latitude = 37.565263;
	var longitude = 126.980667;
		
	if(navigator.geolocation)
	{
		//성공
		function geoSuccess(position)
		{
			//alert("성공");
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;			
		}
		
		//실패
		function geoFail()
		{
			//오류 메세지
			alert("위치 정보가 없습니다.");
		}
		
		//위치 정보 가져오기
		navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);
	}
	
	var location = new google.maps.LatLng(latitude, longitude);
	var option = {
			zoom : 15,
			center : location,
			mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), option);
	
	var marker = new google.maps.Marker({
		position : location,
		map : map,
		title : "나 여기 있어요^^"
	});
	
	$("#map_canvas").height($(window).height() - $("div[data-role='header']").height());
	google.maps.event.trigger(map, "resize");
	
});


//theme page
$(document).delegate("#themePage", "pageinit", function(){
	$(":jqmData(role='navbar') a").click(function(){
		
		var newTheme = $(this).attr("data-theme");
		var oldThemePage = $("#themePage").attr("data-theme");
		var oldThemeHd = $("#themeHeader").attr("data-theme");
		var oldThemeFt = $("#themeFooter").attr("data-theme");
		//alert("oldThemePage="+oldThemePage+", oldThemeHd="+oldThemeHd+", oldThemeFt="+oldThemeFt+", newTheme="+newTheme);
		
		//page
		changeTheme("#themePage", oldThemePage, newTheme);
		//header
		changeTheme("#themeHeader", oldThemeHd, newTheme);
		//footer
		changeTheme("#themeFooter", oldThemeFt, newTheme);

	});
});

function changeTheme(element, oldTheme, newTheme)
{
	var classes =  $(element).attr('class').split(' ');

	for( var i in classes ) 
	{
		//page
		if(classes[i] == "ui-body-"+oldTheme)
		{
			classes[i] = "ui-body-"+newTheme;
		}
		//header, footer
		if(classes[i] == "ui-bar-"+oldTheme)
		{
			classes[i] = "ui-bar-"+newTheme;
		}
	}
	
	$(element).attr("data-theme", newTheme);
	$(element).attr("class", classes.join(' '));
	//alert(classes.join(' '));
}

