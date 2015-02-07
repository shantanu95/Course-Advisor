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

var row1;
function ready(){
	row1 = $(".courseRow").detach();
	$("table .courseRow").remove();
	$.get("_ah/api/insight/v1/subscriber", function(data){
		
		for(var i = 0; i < data.items.length; i++){
			var row = row1.clone();
			row.find("#id").html(data.items[i].code + " - " + data.items[i].title);
			row.find("#numSub").html(data.items[i].numTaken);
			row.find("#numInterest").html(data.items[i].numInterested);
			row.find("#diffRating").html(data.items[i].diffRating);
			row.find("#intRating").html(data.items[i].interestRating);
			$("table").append(row);
		}
	});
	
	$("#numP").click(function(e){
		$("table .courseRow").remove();
		$.get("_ah/api/insight/v1/intPpl", function(data){
			
			for(var i = 0; i < data.items.length; i++){
				var row = row1.clone();
				row.find("#id").html(data.items[i].code + " - " + data.items[i].title);
				row.find("#numSub").html(data.items[i].numTaken);
				row.find("#numInterest").html(data.items[i].numInterested);
				row.find("#diffRating").html(data.items[i].diffRating);
				row.find("#intRating").html(data.items[i].interestRating);
				$("table").append(row);
			}
		});
	});
	
	$("#numF").click(function(e){
		$("table .courseRow").remove();
		$.get("_ah/api/insight/v1/intPpl", function(data){
			
			for(var i = 0; i < data.items.length; i++){
				var row = row1.clone();
				row.find("#id").html(data.items[i].code + " - " + data.items[i].title);
				row.find("#numSub").html(data.items[i].numTaken);
				row.find("#numInterest").html(data.items[i].numInterested);
				row.find("#diffRating").html(data.items[i].diffRating);
				row.find("#intRating").html(data.items[i].interestRating);
				$("table").append(row);
			}
		});
	});
	
	$("#diff").click(function(e){
		$("table .courseRow").remove();
		$.get("_ah/api/insight/v1/diff", function(data){
			
			for(var i = 0; i < data.items.length; i++){
				var row = row1.clone();
				row.find("#id").html(data.items[i].code + " - " + data.items[i].title);
				row.find("#numSub").html(data.items[i].numTaken);
				row.find("#numInterest").html(data.items[i].numInterested);
				row.find("#diffRating").html(data.items[i].diffRating);
				row.find("#intRating").html(data.items[i].interestRating);
				$("table").append(row);
			}
		});
	});
	
	$("#like").click(function(e){
		$("table .courseRow").remove();
		$.get("_ah/api/insight/v1/like", function(data){
			
			for(var i = 0; i < data.items.length; i++){
				var row = row1.clone();
				row.find("#id").html(data.items[i].code + " - " + data.items[i].title);
				row.find("#numSub").html(data.items[i].numTaken);
				row.find("#numInterest").html(data.items[i].numInterested);
				row.find("#diffRating").html(data.items[i].diffRating);
				row.find("#intRating").html(data.items[i].interestRating);
				$("table").append(row);
			}
		});
	});
	
	
}