$(document).ready(function(){
	
	$.ajaxSetup({ cache: true });
	$.getScript("//connect.facebook.net/en_US/all.js", function() {
		FB.init({
			appId: '785030534883401'
		});
		ready();
	});
	
});

function ready(){
	
	FB.getLoginStatus(function(response){
		//handleResponse(response);
	});
	
	$("button").click(function(e){
		FB.login(function(response){
			handleResponse(response);
		}, { scope : 'public_profile, email, user_friends, user_education_history, user_location'});
	});
}

function handleResponse(response){
	if(response.status === 'connected'){
		window.location = 'Main.html';
	}
}