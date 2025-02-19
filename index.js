$(document).ready(function() {
	
	/*Random Text*/
	var quotes = ["Generally Unimportant.",
	"*Dies To A Spelling Mistake*",
	"Video Games!",
	"Be cool. Just once, be cool.",
	"Proud supporter of dark themes for every website.",
	"Your Ad Here!",
	"Ironically, not very much “info”.",
	"A redirection destination."];
    var index = 0;

    function updateText() {
        $('h2').fadeOut(500, function() {
            $(this).text(quotes[index]).fadeIn(500);
            index = (index + 1) % quotes.length;
        });
    }
	
    updateText(); // Initial call
    setInterval(updateText, 5000); // Update interval
	
	
	/*Text Color*/
	$( "a#bsky" ).hover(function() {
		$( "h1" ).addClass('blue');
	}, function() {
		$( "h1" ).removeClass('blue');
	});
	$( "a#youtube" ).hover(function() {
		$( "h1" ).addClass('red');
	}, function() {
		$( "h1" ).removeClass('red');
	});
	$( "a#twitch" ).hover(function() {
		$( "h1" ).addClass('purple');
	}, function() {
		$( "h1" ).removeClass('purple');
	});
	$( "a#roulette" ).hover(function() {
		$( "h1" ).addClass('roulette');
	}, function() {
		$( "h1" ).removeClass('roulette');
	});
	
});