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
	$.get('_ah/api/newsfeed/v1/getActivity', function(data){
		
		var questionCard = $("#questionPanel").detach();
		var reviewCard = $("#reviewPanel").detach();
		var main = $("#main");
		
		for(var i = 0; i < data.items.length; i++){
			var item = data.items[i];
			var temp;
			if(item.whatKind == 2){
				temp = questionCard.clone();
				temp.find("h3").html(data.items[i].courseDetail);
				temp.find("#nameDegree").html(data.items[i].userName);
				temp.find(".question").html(data.items[i].data);
				main.append(temp);
			}else if(item.whatKind == 1){
				temp = reviewCard.clone();
				temp.find("h3").html(data.items[i].courseDetail);
				temp.find("#nameDegree").html(data.items[i].userName);
				temp.find(".question").html(data.items[i].data);
				main.append(temp);
			}
			
		}
		
		
	});
}
