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


