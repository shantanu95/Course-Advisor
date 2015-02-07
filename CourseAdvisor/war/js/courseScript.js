$(document).ready(function(){
	
	$.ajaxSetup({ cache: true });
	$.getScript("//connect.facebook.net/en_US/all.js", function() {
		FB.init({
			appId: '785030534883401'
		});
		FB.getLoginStatus(function(response){
			if(response.status === 'connected'){
				ready();
			}
		});
	});
	
});

var code;
var email = 'virat1309@gmail.com';
var reviewCard, questionCard, answerCard; 
var friendPill;
var friendList = [];

var taken = {
		'CZ2001' : [
		            {name: 'Virat Chopra', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p50x50/10474640_875980565747406_7800170515321927365_n.jpg?oh=356e69e8a8cb6a5138614c45d1f5d929&oe=55570BF8&__gda__=1432709326_e1d0b1889bf6a3bd7da229e99eee5551'},
		            ],
		'AB1213' : []
}

var interested = {
		'CZ2001' : [{name: 'Virat Chopra', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p50x50/10474640_875980565747406_7800170515321927365_n.jpg?oh=356e69e8a8cb6a5138614c45d1f5d929&oe=55570BF8&__gda__=1432709326_e1d0b1889bf6a3bd7da229e99eee5551'}
		],
		'AB1213' : []
}

var idToEmail ={
		'932847806727348' : 'shantanu002'
}

function ready(){
	code = getUrlParameter("code");
	reviewCard = $("#reviewCard").detach();
	questionCard = $("#questionCard").detach();
	answerCard = $("#answerCard").detach();
	friendPill = $("#friendPill").detach();
	
	$.get("_ah/api/courses/v1/courseData/" + code, function(data){
		$(".page-header").find("h1").html(data.code);
		$(".page-header").find("h3").html(data.title);
		$("#descriptionContent").html(data.description);
	});
	
	for(var i = 0; i < taken[code].length; i++){
		var temp = friendPill.clone();
		temp.find("img").attr("src", taken[code][i].url);
		temp.find("span").html(taken[code][i].name);
		$("#takenContainer").append(temp);
	}
	
	for(var i = 0; i < interested[code].length; i++){
		var temp = friendPill.clone();
		temp.find("img").attr("src", interested[code][i].url);
		temp.find("span").html(interested[code][i].name);
		$("#interestContainer").append(temp);
	}
	
	addReviews(false, false, false);
	addQuestions(false, false, false);
	
	$("#reviewAdd").click(function(e){
		var act = {};
		act.code = code;
		act.email = email;
		act.whatKind = 1;
		act.activityData = $("#reviewData").val();
		act.answersList = [];
		act.numUpVotes = 0;
		act.numDownVotes = 0;
		act.timestamp = (new Date()).toJSON();
		$.post("_ah/api/courses/v1/addActivity", act, function(data){
			$("#reviewData").val('');
			addReviews($("#friendsOnly").prop("checked"), $("#natOnly").prop("checked"), $("#majorOnly").prop("checked"));
		});
	});
	
	$("#addQuestion").click(function(e){
		var act = {};
		act.code = code;
		act.email = email;
		act.whatKind = 2;
		act.activityData = $("#questionData").val();
		act.answersList = [];
		act.numUpVotes = 0;
		act.numDownVotes = 0;
		act.timestamp = (new Date()).toJSON();
		$.post("_ah/api/courses/v1/addActivity", act, function(data){
			$("#questionData").val('');
			addQuestions($("#friendsOnly").prop("checked"), $("#natOnly").prop("checked"), $("#majorOnly").prop("checked"));
		});
	});
	
	$(document).on("click", "#submitAnswer", function(){
		var id = $(this).data('id');
		var ans = {};
		ans.email = email;
		ans.data = $("#answerText").val();
		$("#answerText").val('');
		ans.timestamp = (new Date()).toJSON();
		$.post("_ah/api/courses/v1/createAnswer/" + id, ans, function(){
			loadAnswers();
		});
	});
	
	
	
	$('a[href="#collapseOne"]').click();
	

	$('a[href="#collapseOne"]').click(function(){
		setTimeout(function(){$("#mainContainer").scrollTo("#headingOne", 800);}, 500);
		
	});
	$('a[href="#collapseTwo"]').click(function(){
		setTimeout(function(){$("#mainContainer").scrollTo("#headingTwo", 800);}, 500);
	});
	
	$('input[type=checkbox]').change(function(e){
		addReviews($("#friendsOnly").prop("checked"), $("#natOnly").prop("checked"), $("#majorOnly").prop("checked"));
		addQuestions($("#friendsOnly").prop("checked"), $("#natOnly").prop("checked"), $("#majorOnly").prop("checked"));
	});
	
	$("#refreshReview").click(function(){
		addReviews($("#friendsOnly").prop("checked"), $("#natOnly").prop("checked"), $("#majorOnly").prop("checked"));
	});
	
	$("#refreshQuestion").click(function(){
		addQuestions($("#friendsOnly").prop("checked"), $("#natOnly").prop("checked"), $("#majorOnly").prop("checked"));
	});

}

function addReviews(friends, nat, major){
	$.get("_ah/api/courses/v1/getReviews/" + code + "?email=" + encodeURIComponent(email) + "&friends=" + friends + "&nat=" + nat + "&major=" + major, 
			function(data){
		
		var main = $("#reviewMain");
		main.empty();
		for(var i = 0; i < data.items.length; i++){
			var temp = reviewCard.clone();
			temp.data("id", data.items[i].id);
			temp.find("#name").html(data.items[i].userName);
			temp.find("#data").html(data.items[i].data);
			temp.find("#upVoteBadge").html(data.items[i].numUpVotes);
			temp.find("#downVoteBadge").html(data.items[i].numDownVotes);
			
			temp.find("#upButton").data('id', data.items[i].id);
			temp.find("#downButton").data('id', data.items[i].id);
			
			temp.find("#upButton").click(function(e){
				var but = $(this);
				$.post("_ah/api/courses/v1/vote", {
					id: but.data('id'),
					up: true
				}, function(){
					var bad = but.find("#upVoteBadge");
					bad.html(parseInt(bad.html()) + 1);
				});
			});
			
			temp.find("#downButton").click(function(e){
				var but = $(this);
				$.post("_ah/api/courses/v1/vote", {
					id: but.data('id'),
					up: false
				}, function(){
					var bad = but.find("#downVoteBadge");
					bad.html(parseInt(bad.html()) + 1);
				});
			});
			main.append(temp);
		}
		
	});
}

function addQuestions(friends, nat, major){
	$.get("_ah/api/courses/v1/getQuestions/" + code + "?email=" + encodeURIComponent(email) + "&friends=" + friends + "&nat=" + nat + "&major=" + major, 
			function(data){
		
		var main = $("#questionMain");
		main.empty();
		for(var i = 0; i < data.items.length; i++){
			var temp = questionCard.clone();
			temp.find("#name").html(data.items[i].userName);
			temp.find("#data").html(data.items[i].data);
			temp.find("#upVoteBadge").html(data.items[i].numUpVotes);
			temp.find("#downVoteBadge").html(data.items[i].numDownVotes);
			
			temp.find("#upButton").data('id', data.items[i].id);
			temp.find("#downButton").data('id', data.items[i].id);
			
			temp.find("#upButton").click(function(e){
				var but = $(this);
				$.post("_ah/api/courses/v1/vote", {
					id: but.data('id'),
					up: true
				}, function(){
					var bad = but.find("#upVoteBadge");
					bad.html(parseInt(bad.html()) + 1);
				});
			});
			
			temp.find("#downButton").click(function(e){
				var but = $(this);
				$.post("_ah/api/courses/v1/vote", {
					id: but.data('id'),
					up: false
				}, function(){
					var bad = but.find("#downVoteBadge");
					bad.html(parseInt(bad.html()) + 1);
				});
			});
			
			temp.find("#answerButton").data('id', data.items[i].id);
			temp.find("#answerButton").data('title', data.items[i].data);
			temp.find("#answerButton").click(function(){
				$("#submitAnswer").data('id', $(this).data('id'));
				$("#questionText").html($(this).data('title'));
				loadAnswers();
			});
			main.append(temp);
		}
		
	});
}

function loadAnswers(){
	$.get("_ah/api/courses/v1/getAnswers?id=" + $("#submitAnswer").data('id'), function(data){
		var cont = $("#answerContainer");
		cont.empty();
		for(var i = 0; i < data.items.length; i++){
			var temp = answerCard.clone();
			temp.find("#name").html(data.items[i].email);
			temp.find("#data").html(data.items[i].data);
			cont.append(temp);
		}
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