//theme page
$(document).delegate("#themePage", "pageinit", function(){
	$(":jqmData(role='navbar') a").click(function(){
		
		var newTheme = $(this).attr("data-theme");
		var oldThemePage = $("#themePage").attr("data-theme");
		var oldThemeHd = $("#themeHeader").attr("data-theme");
		var oldThemeFt = $("#themeFooter").attr("data-theme");
		//alert("oldThemePage="+oldThemePage+", oldThemeHd="+oldThemeHd+", oldThemeFt="+oldThemeFt+", newTheme="+newTheme);
		
		//page 테마 변경
		changeTheme("#themePage", oldThemePage, newTheme);
		//header 테마 변경
		changeTheme("#themeHeader", oldThemeHd, newTheme);
		//footer 테마 변경
		changeTheme("#themeFooter", oldThemeFt, newTheme);

	});
});

//테마 변경 처리 함수
function changeTheme(element, oldTheme, newTheme)
{
	var classes =  $(element).attr('class').split(' ');

	for( var i in classes ) 
	{
		//page 테마 속성
		if(classes[i] == "ui-body-"+oldTheme)
		{
			classes[i] = "ui-body-"+newTheme;
		}
		//header, footer 테마 속성
		if(classes[i] == "ui-bar-"+oldTheme)
		{
			classes[i] = "ui-bar-"+newTheme;
		}
	}
	
	//새로운 테마 적용
	$(element).attr("data-theme", newTheme);
	$(element).attr("class", classes.join(' '));
	//alert(classes.join(' '));
}



