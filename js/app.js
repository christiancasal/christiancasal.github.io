$(document).ready(function() {
	$('#captionHeader').animate({
		color: '#fff',
		opacity: '1'},
		1000);
	$('.parallax').parallax();
	//fadein+slidedown?
});

$(document).ready(function(){
	$('.materialboxed').materialbox();
});

$(document).ready(function(){
	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal-trigger').leanModal();
});

$(document).ready(function(){
	$('.scrollspy').scrollSpy();


$(document).ready(function(){
	$('.slider').slider({full_width: true});
});
