$(document).on('turbolinks:load', function() {


 	// Mobile Nav
 	$('a#mobile-nav').click(function(e) {
 	  e.preventDefault();
 	  $('.mobile-primary').toggleClass("open");
 	});


 	// Mobile Search Bar
 	$('.search-open').click(function(e) {
 	  e.preventDefault();
 	  if(
 	  	$('#mobile-search-overlay').css('height') === "0px"){
				$('#mobile-search-overlay').addClass("open");
			} else {
 	  		$('#mobile-search-overlay').removeClass("open");
 	  }
 	});

 	$('#search-close').click(function(e) {
 	  e.preventDefault();
 	  if(
 	  	$('#mobile-search-overlay').css('height') === "59px"){
				$('#mobile-search-overlay').removeClass("open");
		}
	});

/*
 	// Notifications & User Dropdowns
	$('a#toggle-notifications').click(function(e) {
   e.preventDefault();
   	$('#notification-container').toggleClass("open");
 	});
*/

	$('a#toggle-user').click(function(e) {
   e.preventDefault();
   	$('#user-container').toggleClass("open");
 	});



 	// Log-in Issues Menu
 	$('#login-issues').click(function(e) {
 		e.preventDefault();
 		$(this).css("display", "none");
 		$('#login-help').css("display", "block");
 	});


 	// Markdown Editor Upload Image Link
 	$('.mde-img a').click(function(e) {
		e.preventDefault();
		$(".mde-img input").trigger('click');
 	});

  // requires-agreement buttons and checkboxes
  $('.requires-agreement-checkbox').click(function(){
    let target_id = '#' + $(".requires-agreement-checkbox").data("target")
    if($(this).is(':checked')){
      $(target_id).attr('disabled', false)
    }
    else{
      $(target_id).attr('disabled', true)
    }
  })
});
