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
	$body.append('<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address + '">');
	// YOUR CODE GOES HERE!
	//wiki
	var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + city + '&format=json&callback=wikiCallback';
	$.ajax({
		url: wikiUrl
		, dataType: 'jsonp'
		, success: function (response) {
			var articleList = response[1];
			for (var i = 0; i < articleList.length; i++) {
				articleStr = articleList[i];
				var url = 'http://en.wikipedia.org/wiki/' + articleStr;
				$wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
			};
		}
	});
	
	//newyork time
	var nytimeURL='http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+city+'&sort=newest&api-key=e7d9b2ccdfc3404b8c448422e8db6ed7';
	$.getJSON(nytimeURL, function(data){
		$nytHeaderElem.text("NewYork Times about "+city);
		articles = data.response.docs;
		for(var i=0; i<articles.length; i++){
			var article = articles[i];
			$nytHeaderElem.append('<li class="article"><a href="'+article.web_url+'">'+article.headline.main+'</a>'+'<p>'+article.snippet+'</p>'+'</li>')
		}
	});
	
	
	
	
	return false;
};
$('#form-container').submit(loadData);