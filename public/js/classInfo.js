'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  var url = window.location.href;
  var id = parseInt(url.split("classInfo/")[1], 10);
  //var id = url.charAt(url.length-1);
  console.log("page id is : " + id);
  
  $('#classname').append("<h1>Class: " + searchdata.PodcastClass[id].Class + "</h1>");
  $('#profname').append("<h3>Professor: " + searchdata.PodcastClass[id].Prof + "</h3>");
  $('#podcastlink').append("<h3>Podcast Link: " + searchdata.PodcastClass[id].selection3_url + "</h3>");
  $('#vid').append("<video width='320' height='240' controls>" +  
                    "<source src='" + searchdata.PodcastClass[id].selection3_url + "' type='video/mp4'>" + 
                    "<source src='" + searchdata.PodcastClass[id].selection3_url + "' type='video/ogg'>" +
                    "Your browser does not support the video tag." + 
                    "</video>");
}