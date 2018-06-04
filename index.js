$(document).ready(function() {
    var quotes = new Array("Dabbles in a little bit of everything.", "Be cool. Just once, be cool.", "So, this is how you're spending your time?"),
    randno = quotes[Math.floor( Math.random() * quotes.length )];
    $('h2').text( randno );
	
	var thequote;    
	$('a').hover(function(){
		oldtext = $(this).text();
		linktext = $(this).attr('href');
		$(this).text(linktext);
	}, function(){
		$(this).text(oldtext)
	});
});