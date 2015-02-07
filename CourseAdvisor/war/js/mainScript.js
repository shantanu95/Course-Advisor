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


var substringMatcher = function(strs) {
	return function findMatches(q, cb) {
	var matches, substrRegex;
	 
	// an array that will be populated with substring matches
	matches = [];
	 
	// regex used to determine if a string contains the substring `q`
	substrRegex = new RegExp(q, 'i');
	 
	// iterate through the pool of strings and for any string that
	// contains the substring `q`, add it to the `matches` array
	$.each(strs, function(i, str) {
	if (substrRegex.test(str)) {
	// the typeahead jQuery plugin expects suggestions to a
	// JavaScript object, refer to typeahead docs for more info
	matches.push({ value: str });
	}
	});
	 
	cb(matches);
	};
	};
	 
	var courses = ['CZ2001 - Algorithms', 'AB1213'
	]; 	

var courseTile;
function ready(){
	questionCard = $("#questionPanel").detach();
	reviewCard = $("#reviewPanel").detach();
	courseTile = $("#courseTile").detach();
	$("#searchBox").typeahead({
		 hint: true,
		 highlight: true,
		 minLength: 1 
	}, {
		 name: 'states',
		 displayKey: 'value',
		 source: substringMatcher(courses)
	});
	loadNewsFeed();
	$.get('_ah/api/newsfeed/v1/popularCourses', function(data){
		var main = $("#popCourseCont");
		for(var i = 0; i < data.items.length; i++){
			var temp = courseTile.clone();
			temp.find("h4").html(data.items[i].code);
			temp.find("small").html(data.items[i].title);
			temp.find("a").attr("href", "Course.html?code=" + data.items[i].code);
			main.append(temp);
		}
	});
	
	$("input[type=checkbox]").change(function(e){
		if($("input[type=checkbox]").prop("checked")){
			$.get('_ah/api/newsfeed/v1/getFrndActivity?email1=' + encodeURIComponent("luihu@singamail.com") + 
					"&email2=" + encodeURIComponent("krishan1309@memail.com"), function(data){
				
				var main = $("#main");
				main.empty();
				for(var i = 0; i < data.items.length; i++){
					var item = data.items[i];
					var temp;
					if(item.whatKind == 2){
						temp = questionCard.clone();
						temp.find("h3 a strong").html(data.items[i].courseDetail);
						temp.find("h3 a").attr("href", "Course.html?code=" + data.items[i].courseDetail.split(" -")[0])
						temp.find("#name").html(data.items[i].userName);
						temp.find(".question").html(data.items[i].data);
						temp.find("#upVoteBadge").html(data.items[i].numUpVotes);
						temp.find("#downVoteBadge").html(data.items[i].numDownVotes);
						main.append(temp);
					}else if(item.whatKind == 1){
						temp = reviewCard.clone();
						temp.find("h3 a strong").html(data.items[i].courseDetail);
						temp.find("h3 a").attr("href", "Course.html?code=" + data.items[i].courseDetail.split(" -")[0])
						temp.find("#name").html(data.items[i].userName);
						temp.find(".question").html(data.items[i].data);
						temp.find("#upVoteBadge").html(data.items[i].numUpVotes);
						temp.find("#downVoteBadge").html(data.items[i].numDownVotes);
						main.append(temp);
					}
					
				}
				
			});
		}else{
			loadNewsFeed();
		}
	});
}

function loadNewsFeed(){
	$.get('_ah/api/newsfeed/v1/getActivity', function(data){
		
		
		var main = $("#main");
		main.empty();
		for(var i = 0; i < data.items.length; i++){
			var item = data.items[i];
			var temp;
			if(item.whatKind == 2){
				temp = questionCard.clone();
				temp.find("h3 a strong").html(data.items[i].courseDetail);
				temp.find("h3 a").attr("href", "Course.html?code=" + data.items[i].courseDetail.split(" -")[0])
				temp.find("#name").html(data.items[i].userName);
				temp.find(".question").html(data.items[i].data);
				main.append(temp);
			}else if(item.whatKind == 1){
				temp = reviewCard.clone();
				temp.find("h3 a strong").html(data.items[i].courseDetail);
				temp.find("h3 a").attr("href", "Course.html?code=" + data.items[i].courseDetail.split(" -")[0])
				temp.find("#name").html(data.items[i].userName);
				temp.find(".question").html(data.items[i].data);
				main.append(temp);
			}
			
		}
		
	});
}
