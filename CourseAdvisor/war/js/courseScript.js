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
		            {name: 'Shantanu Gupta', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c170.50.621.621/s200x200/931230_584299254943035_1974268375_n.jpg?oh=26f99f689cac7950dfb34d871556aa72&oe=555F52DE&__gda__=1431513939_42b4634a342cb4d8aa1d928ef22ce9e5'}
		            ],
		'AB1213' : [
		            {name: 'Joshua Ninan', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/c0.0.200.200/p200x200/537120_643601862342573_303274490_n.jpg?oh=c9cc87af65961448539a543358ac9c89&oe=559538B3&__gda__=1432673100_6853a9c88273f003092267a19406df7b'},
		            {name: 'Virat Chopra', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p50x50/10474640_875980565747406_7800170515321927365_n.jpg?oh=356e69e8a8cb6a5138614c45d1f5d929&oe=55570BF8&__gda__=1432709326_e1d0b1889bf6a3bd7da229e99eee5551'}
		            ],
		 'CZ1002' : [
		             {name: 'Lui Hu', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p200x200/10624697_10152912421808780_7908947362069562809_n.jpg?oh=d6b47cd0a290bee3e997ccc2163777f3&oe=555906A0&__gda__=1430920251_75e82a9f8f853b7b5ebfcb5100b7b88a'},
		             {name: 'Uday Nagpal', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c127.37.466.466/s200x200/33761_172664622744402_2778483_n.jpg?oh=138ec1662f4414169f90c88a62715d7d&oe=55611660&__gda__=1432601259_e2a7cf99c9a8522933152c3d642d555c'}
		             ],
		  'CZ1003' : [
		              {name: 'Shantanu Gupta', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c170.50.621.621/s200x200/931230_584299254943035_1974268375_n.jpg?oh=26f99f689cac7950dfb34d871556aa72&oe=555F52DE&__gda__=1431513939_42b4634a342cb4d8aa1d928ef22ce9e5'},
		              {name: 'Uday Nagpal', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c127.37.466.466/s200x200/33761_172664622744402_2778483_n.jpg?oh=138ec1662f4414169f90c88a62715d7d&oe=55611660&__gda__=1432601259_e2a7cf99c9a8522933152c3d642d555c'}
		              ],
		  'BU8201' : [
		              {name: 'Joshua Ninan', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/c0.0.200.200/p200x200/537120_643601862342573_303274490_n.jpg?oh=c9cc87af65961448539a543358ac9c89&oe=559538B3&__gda__=1432673100_6853a9c88273f003092267a19406df7b'},
		              {name: 'Krishan Gopal', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p200x200/10473170_651863971568425_6382448360990458950_n.jpg?oh=fd5c90b2e3a3839c542aa3fd40018932&oe=55668D82&__gda__=1432618559_326c90f90771e66f7d67e4cb3563d6e4'},
		              {name: 'Rohan Sood', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.37.200.200/p200x200/10649829_10205205158514344_1925113432589726918_n.jpg?oh=eccd25cbcaf66bc7905ec47363d898ca&oe=5553C05D&__gda__=1432060598_ac41d57fdd3d61f782d68cf9b69cb83f'},
		              {name: 'Virat Chopra', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p50x50/10474640_875980565747406_7800170515321927365_n.jpg?oh=356e69e8a8cb6a5138614c45d1f5d929&oe=55570BF8&__gda__=1432709326_e1d0b1889bf6a3bd7da229e99eee5551'} 
		              ],
		   'MH1812' : [
		               {name: 'Krishan Gopal', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p200x200/10473170_651863971568425_6382448360990458950_n.jpg?oh=fd5c90b2e3a3839c542aa3fd40018932&oe=55668D82&__gda__=1432618559_326c90f90771e66f7d67e4cb3563d6e4'}
		               ],
		   'HE9091' : [
						{name: 'Joshua Ninan', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/c0.0.200.200/p200x200/537120_643601862342573_303274490_n.jpg?oh=c9cc87af65961448539a543358ac9c89&oe=559538B3&__gda__=1432673100_6853a9c88273f003092267a19406df7b'},
						{name: 'Krishan Gopal', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p200x200/10473170_651863971568425_6382448360990458950_n.jpg?oh=fd5c90b2e3a3839c542aa3fd40018932&oe=55668D82&__gda__=1432618559_326c90f90771e66f7d67e4cb3563d6e4'},
						{name: 'Shantanu Gupta', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c170.50.621.621/s200x200/931230_584299254943035_1974268375_n.jpg?oh=26f99f689cac7950dfb34d871556aa72&oe=555F52DE&__gda__=1431513939_42b4634a342cb4d8aa1d928ef22ce9e5'},
						{name: 'Uday Nagpal', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c127.37.466.466/s200x200/33761_172664622744402_2778483_n.jpg?oh=138ec1662f4414169f90c88a62715d7d&oe=55611660&__gda__=1432601259_e2a7cf99c9a8522933152c3d642d555c'} 
		               ]

}

var interested = {
		'CZ2001' : [{name: 'Virat Chopra', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p50x50/10474640_875980565747406_7800170515321927365_n.jpg?oh=356e69e8a8cb6a5138614c45d1f5d929&oe=55570BF8&__gda__=1432709326_e1d0b1889bf6a3bd7da229e99eee5551'},
					{name: 'Joshua Ninan', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/c0.0.200.200/p200x200/537120_643601862342573_303274490_n.jpg?oh=c9cc87af65961448539a543358ac9c89&oe=559538B3&__gda__=1432673100_6853a9c88273f003092267a19406df7b'}
					],
		'AB1213' : [
		            {name: 'Krishan Gopal', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p200x200/10473170_651863971568425_6382448360990458950_n.jpg?oh=fd5c90b2e3a3839c542aa3fd40018932&oe=55668D82&__gda__=1432618559_326c90f90771e66f7d67e4cb3563d6e4'},
		            {name: 'Lui Hu', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p200x200/10624697_10152912421808780_7908947362069562809_n.jpg?oh=d6b47cd0a290bee3e997ccc2163777f3&oe=555906A0&__gda__=1430920251_75e82a9f8f853b7b5ebfcb5100b7b88a'},
		            {name: 'Rohan Sood', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.37.200.200/p200x200/10649829_10205205158514344_1925113432589726918_n.jpg?oh=eccd25cbcaf66bc7905ec47363d898ca&oe=5553C05D&__gda__=1432060598_ac41d57fdd3d61f782d68cf9b69cb83f'},
		            {name: 'Shantanu Gupta', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c170.50.621.621/s200x200/931230_584299254943035_1974268375_n.jpg?oh=26f99f689cac7950dfb34d871556aa72&oe=555F52DE&__gda__=1431513939_42b4634a342cb4d8aa1d928ef22ce9e5'}
		            ],
		'CZ1002' : [
		            {name: 'Krishan Gopal', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p200x200/10473170_651863971568425_6382448360990458950_n.jpg?oh=fd5c90b2e3a3839c542aa3fd40018932&oe=55668D82&__gda__=1432618559_326c90f90771e66f7d67e4cb3563d6e4'}
		            ],
		'CZ1003' : [
		            {name: 'Krishan Gopal', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p200x200/10473170_651863971568425_6382448360990458950_n.jpg?oh=fd5c90b2e3a3839c542aa3fd40018932&oe=55668D82&__gda__=1432618559_326c90f90771e66f7d67e4cb3563d6e4'},
		            {name: 'Virat Chopra', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p50x50/10474640_875980565747406_7800170515321927365_n.jpg?oh=356e69e8a8cb6a5138614c45d1f5d929&oe=55570BF8&__gda__=1432709326_e1d0b1889bf6a3bd7da229e99eee5551'}
		            ],
		 'BU8201' : [
					{name: 'Shantanu Gupta', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c170.50.621.621/s200x200/931230_584299254943035_1974268375_n.jpg?oh=26f99f689cac7950dfb34d871556aa72&oe=555F52DE&__gda__=1431513939_42b4634a342cb4d8aa1d928ef22ce9e5'},
					{name: 'Uday Nagpal', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c127.37.466.466/s200x200/33761_172664622744402_2778483_n.jpg?oh=138ec1662f4414169f90c88a62715d7d&oe=55611660&__gda__=1432601259_e2a7cf99c9a8522933152c3d642d555c'} 
		            ],
		  'MH1812' : [
		              {name: 'Joshua Ninan', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/c0.0.200.200/p200x200/537120_643601862342573_303274490_n.jpg?oh=c9cc87af65961448539a543358ac9c89&oe=559538B3&__gda__=1432673100_6853a9c88273f003092267a19406df7b'},
		              {name: 'Lui Hu', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p200x200/10624697_10152912421808780_7908947362069562809_n.jpg?oh=d6b47cd0a290bee3e997ccc2163777f3&oe=555906A0&__gda__=1430920251_75e82a9f8f853b7b5ebfcb5100b7b88a'},
		              {name: 'Rohan Sood', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.37.200.200/p200x200/10649829_10205205158514344_1925113432589726918_n.jpg?oh=eccd25cbcaf66bc7905ec47363d898ca&oe=5553C05D&__gda__=1432060598_ac41d57fdd3d61f782d68cf9b69cb83f'},
		              {name: 'Uday Nagpal', url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c127.37.466.466/s200x200/33761_172664622744402_2778483_n.jpg?oh=138ec1662f4414169f90c88a62715d7d&oe=55611660&__gda__=1432601259_e2a7cf99c9a8522933152c3d642d555c'}
		              ],
			'HE9091' : []
		            
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
