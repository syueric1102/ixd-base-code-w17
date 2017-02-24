'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	for(var i = 0; i < searchdata.PodcastClass.length; i++) {
		$('#myUL').append("<li><a href='classInfo/" + i + "'><h3>" + searchdata.PodcastClass[i].Class + "</h3></a><h4>" + searchdata.PodcastClass[i].Prof + "</h4></li>")
	}
	
}

console.log(searchdata.PodcastClass[1].Prof);
