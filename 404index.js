$(document).ready(function() {
	var oldtext;    
	$('a#b, a#r, a#y, a#n, a#dot').hover(function(){
		linkurl = $(this).attr('href');
		linktext = linkurl.replace(/^https?:\/\//,'')
		oldtext = $('h2').text();
		$('h2').text(linktext);
	}, function(){
		$('h2').text(oldtext)
	});
	$('a#info').hover(function(){
		infotext = $(this).attr('data-about');
		oldtext = $('h2').text();
		$('h2').text(infotext);
	}, function(){
		$('h2').text(oldtext)
	});
});