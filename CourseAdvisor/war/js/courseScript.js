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

var code;
var email = 'shantanu002';
var reviewCard, questionCard, answerCard; 

function ready(){
	code = getUrlParameter("code");
	reviewCard = $("#reviewCard").detach();
	questionCard = $("#questionCard").detach();
	answerCard = $("#answerCard").detach();
	
	$.get("_ah/api/courses/v1/courseData/" + code, function(data){
		$(".page-header").find("h1").html(data.code);
		$(".page-header").find("h3").html(data.title);
		$("#descriptionContent").html(data.description);
	});
	
	addReviews();
	addQuestions();
	
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
			addReviews();
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
			addQuestions();
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
}

function addReviews(){
	$.get("_ah/api/courses/v1/getReviews/" + code, function(data){
		
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

function addQuestions(){
	$.get("_ah/api/courses/v1/getQuestions/" + code, function(data){
		
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