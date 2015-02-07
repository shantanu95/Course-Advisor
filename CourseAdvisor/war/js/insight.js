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

var interested = {
		'CZ2001' : [
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


var row1;
function ready(){
	row1 = $(".courseRow").detach();
	$("table .courseRow").remove();
	$.get("_ah/api/insight/v1/subscriber", function(data){
		console.log(data);
		for(var i = 0; i < data.items.length; i++){
			var row = row1.clone();
			row.find("#course").html(data.items[i].code + " - " + data.items[i].title);
			row.find("#numSub").html(data.items[i].numTaken);
			row.find("#numInterest").html(data.items[i].numInterested);
			row.find("#diffRating").html(data.items[i].diffRating);
			row.find("#intRating").html(data.items[i].interestRating);
			row.find("#numFriends").html(interested[data.items[i].code].length);
			$("table").append(row);
		}
	});
	
	$("#pop").click(function(e){
		$("table .courseRow").remove();
		$.get("_ah/api/insight/v1/subscriber", function(data){
			
			for(var i = 0; i < data.items.length; i++){
				var row = row1.clone();
				row.find("#course").html(data.items[i].code + " - " + data.items[i].title);
				row.find("#numSub").html(data.items[i].numTaken);
				row.find("#numInterest").html(data.items[i].numInterested);
				row.find("#diffRating").html(data.items[i].diffRating);
				row.find("#intRating").html(data.items[i].interestRating);
				row.find("#numFriends").html(interested[data.items[i].code].length);
				$("table").append(row);
			}
		});
	});
	
	$("#numP").click(function(e){
		$("table .courseRow").remove();
		$.get("_ah/api/insight/v1/intPpl", function(data){
			
			for(var i = 0; i < data.items.length; i++){
				var row = row1.clone();
				row.find("#course").html(data.items[i].code + " - " + data.items[i].title);
				row.find("#numSub").html(data.items[i].numTaken);
				row.find("#numInterest").html(data.items[i].numInterested);
				row.find("#diffRating").html(data.items[i].diffRating);
				row.find("#intRating").html(data.items[i].interestRating);
				row.find("#numFriends").html(interested[data.items[i].code].length);
				$("table").append(row);
			}
		});
	});
	
	$("#numF").click(function(e){
		$("table .courseRow").remove();
		$.get("_ah/api/insight/v1/friends", function(data){
			
			for(var i = 0; i < data.items.length; i++){
				var row = row1.clone();
				row.find("#course").html(data.items[i].code + " - " + data.items[i].title);
				row.find("#numSub").html(data.items[i].numTaken);
				row.find("#numInterest").html(data.items[i].numInterested);
				row.find("#diffRating").html(data.items[i].diffRating);
				row.find("#intRating").html(data.items[i].interestRating);
				row.find("#numFriends").html(interested[data.items[i].code].length);
				$("table").append(row);
			}
		});
	});
	
	$("#diff").click(function(e){
		$("table .courseRow").remove();
		$.get("_ah/api/insight/v1/diff", function(data){
			
			for(var i = 0; i < data.items.length; i++){
				var row = row1.clone();
				row.find("#course").html(data.items[i].code + " - " + data.items[i].title);
				row.find("#numSub").html(data.items[i].numTaken);
				row.find("#numInterest").html(data.items[i].numInterested);
				row.find("#diffRating").html(data.items[i].diffRating);
				row.find("#intRating").html(data.items[i].interestRating);
				row.find("#numFriends").html(interested[data.items[i].code].length);
				$("table").append(row);
			}
		});
	});
	
	$("#like").click(function(e){
		$("table .courseRow").remove();
		$.get("_ah/api/insight/v1/like", function(data){
			
			for(var i = 0; i < data.items.length; i++){
				var row = row1.clone();
				row.find("#course").html(data.items[i].code + " - " + data.items[i].title);
				row.find("#numSub").html(data.items[i].numTaken);
				row.find("#numInterest").html(data.items[i].numInterested);
				row.find("#diffRating").html(data.items[i].diffRating);
				row.find("#intRating").html(data.items[i].interestRating);
				row.find("#numFriends").html(interested[data.items[i].code].length);
				$("table").append(row);
			}
		});
	});
	
	
}