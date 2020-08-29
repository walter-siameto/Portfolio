// Requires jQuery

$(document).on('click','.js-menu_toggle.closed',function(e){
	e.preventDefault(); $('.list_load, .list_item').stop();
	$(this).removeClass('closed').addClass('opened');

	$('.side_menu').css({ 'left':'0px' });

	var count = $('.list_item').length;
	$('.list_load').slideDown( (count*.6)*100 );
	$('.list_item').each(function(i){
		var thisLI = $(this);
		timeOut = 100*i;
		setTimeout(function(){
			thisLI.css({
				'opacity':'1',
				'margin-left':'0'
			});
		},100*i);
	});
});

$(document).on('click','.js-menu_toggle.opened',function(e){
	e.preventDefault(); $('.list_load, .list_item').stop();
	$(this).removeClass('opened').addClass('closed');

	$('.side_menu').css({ 'left':'-250px' });

	var count = $('.list_item').length;
	$('.list_item').css({
		'opacity':'0',
		'margin-left':'-20px'
	});
	$('.list_load').slideUp(300);
});

// readmore toggle

window.onload = function() {
const moreText = "Read more";
const lessText = "Read less";
const moreButton = $("button.readmorebtn");

moreButton.click(function() {
  const $this = $(this);
  $this.text($this.text() == moreText ? lessText : moreText).next(".more").slideToggle("fast");
});
}

// disable right clicking

window.onload = function() {
  document.addEventListener("contextmenu", function(e){
    e.preventDefault();
  }, false);
  document.addEventListener("keydown", function(e) {
  //document.onkeydown = function(e) {
    // "I" key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
      disabledEvent(e);
    }
    // "J" key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
      disabledEvent(e);
    }
    // "S" key + macOS
     if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
       disabledEvent(e);
     }
     // "U" key
     if (e.ctrlKey && e.keyCode == 85) {
       disabledEvent(e);
     }
     // "F12" key
     if (event.keyCode == 123) {
       disabledEvent(e);
     } }, false); function disabledEvent(e){   if (e.stopPropagation){     e.stopPropagation();
     } else if (window.event){
       window.event.cancelBubble = true;
     }
     e.preventDefault();
     return false;
   }
 }