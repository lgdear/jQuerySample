//theme page
$(document).delegate("#themePage", "pageinit", function(){
	$(":jqmData(role='navbar') a").click(function(){
		
		var newTheme = $(this).attr("data-theme");
		var oldThemePage = $("#themePage").attr("data-theme");
		var oldThemeHd = $("#themeHeader").attr("data-theme");
		var oldThemeFt = $("#themeFooter").attr("data-theme");
		//alert("oldThemePage="+oldThemePage+", oldThemeHd="+oldThemeHd+", oldThemeFt="+oldThemeFt+", newTheme="+newTheme);
		
		//page �׸� ����
		changeTheme("#themePage", oldThemePage, newTheme);
		//header �׸� ����
		changeTheme("#themeHeader", oldThemeHd, newTheme);
		//footer �׸� ����
		changeTheme("#themeFooter", oldThemeFt, newTheme);

	});
});

//�׸� ���� ó�� �Լ�
function changeTheme(element, oldTheme, newTheme)
{
	var classes =  $(element).attr('class').split(' ');

	for( var i in classes ) 
	{
		//page �׸� �Ӽ�
		if(classes[i] == "ui-body-"+oldTheme)
		{
			classes[i] = "ui-body-"+newTheme;
		}
		//header, footer �׸� �Ӽ�
		if(classes[i] == "ui-bar-"+oldTheme)
		{
			classes[i] = "ui-bar-"+newTheme;
		}
	}
	
	//���ο� �׸� ����
	$(element).attr("data-theme", newTheme);
	$(element).attr("class", classes.join(' '));
	//alert(classes.join(' '));
}



