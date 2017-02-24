'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('project a').click(addClass);
}

function addProject(result) {
  var projectHTML =
    '<img src="' + result.image + '" class="detailsImage">' +
    '<h3>' + result.title + '</h3>' +
    '<p><small>' + result.date +
    '</small></p><br /><p>' + result.summary + '</p>'; 
  var classhtml = 
   

  $("#project" + result.id + " .details").html(projectHTML);
}
