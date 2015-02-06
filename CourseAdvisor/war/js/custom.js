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