//map page
$(document).delegate("#map", "pageinit", function(){
	
	var latitude = 37.565263;
	var longitude = 126.980667;
		
	if(navigator.geolocation)
	{
		//����
		function geoSuccess(position)
		{
			//alert("����");
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;			
		}
		
		//����
		function geoFail()
		{
			//���� �޼���
			alert("��ġ ������ �����ϴ�.");
		}
		
		//��ġ ���� ��������
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
		title : "�� ���� �־��^^"
	});

	$("#map_canvas").height($(window).height() - $("div[data-role='header']").height());
	google.maps.event.trigger(map, "resize");
	
});


