/**
 * Facebook SDK included below
 */

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1382611612050608',
    xfbml      : true,
    version    : 'v2.2'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

/**
Side Bar Code As Below
**/

$(document).ready(function() {
	  $('[data-toggle=offcanvas]').click(function() {
	    $('.row-offcanvas').toggleClass('active');
	  });
	});

/* var citynames = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: {
    url: 'assets/citynames.json',
    filter: function(list) {
      return $.map(list, function(cityname) {
        return { name: cityname }; });
    }
  }
});
citynames.initialize();

$('input').tagsinput({
  typeaheadjs: {
    name: 'citynames',
    displayKey: 'name',
    valueKey: 'name',
    source: citynames.ttAdapter()
  }
}); */

var citynames = new Bloodhound({
	  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  prefetch: {
	    url: 'assets/citynames.json',
	    filter: function(list) {
	      return $.map(list, function(cityname) {
	        return { name: cityname }; });
	    }
	  }
	});
	citynames.initialize();

	$('.typeaheadtest').tagsinput({
	  typeaheadjs: {
	    name: 'citynames',
	    tagClass: 'wide',
	    displayKey: 'name',
	    valueKey: 'name',
	    source: citynames.ttAdapter()
	  }
	});

