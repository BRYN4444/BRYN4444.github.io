$(document).ready(function() {
    var quotes = new Array("Dabbles in a little bit of everything.", "Be cool. Just once, be cool.", "So, this is how you're spending your time?"),
    randno = quotes[Math.floor( Math.random() * quotes.length )];
    $('h2').text( randno );
	
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