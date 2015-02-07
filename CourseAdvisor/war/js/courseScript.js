$(document).ready(function(){
	
	ready();
	
	$.ajaxSetup({ cache: true });
	$.getScript("//connect.facebook.net/en_US/all.js", function() {
		FB.init({
			appId: '785030534883401'
		});
		FB.getLoginStatus(function(response){
			if(response.status === 'connected'){
				
			}
		});
	});
	
});

function ready(){
	var code = getUrlParameter("code");
	$.get("_ah/api/courses/v1/courseData/" + code, function(data){
		$(".page-header").find("h1").html(data.code);
		$(".page-header").find("h3").html(data.title);
		$("#descriptionContent").html(data.description);
		
	});
}

function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}