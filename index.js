$(document).ready(function() {
    var quotes = new Array("Dabbles in a little bit of everything.", "Be cool. Just once, be cool.", "So, this is how you're spending your time?"),
    randno = quotes[Math.floor( Math.random() * quotes.length )];
    $('h2').text( randno );
	
	var thequote;    
	$('a').hover(function(){
		linktext = $(this).attr('href');
		oldtext = $('h2').text();
		$('h2').text(linktext);
	}, function(){
		$('h2').text(oldtext)
	});
});