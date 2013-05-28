
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


