$(document).ready(function(){
	
	ready();
	/*
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
	*/
});

var questionCard;

function ready(){
	$.get('_ah/api/newsfeed/v1/getActivity', function(data){
		
		questionCard = $("#questionPanel").detach();
		var main = $("#main");
		for(var i = 0; i < data.items.length; i++){
			temp = questionCard.clone();
			temp.find("h3").html(data.items[i].courseDetail);
			temp.find("#nameDegree").html(data.items[i].userName);
			temp.find(".question").html(data.items[i].data);
			main.append(temp);
		}
		
		
	});
}
