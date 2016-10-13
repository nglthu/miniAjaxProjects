
function loadData() {

    var $body = $('body');
	
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

	var street = $('#street').val();
	var city = $('#city').val();
	var address = street + ',' + city;
    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
$body.append('<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x300&location='+address+'">')

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);

