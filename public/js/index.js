/*global $, jQuery, alert*/

$(document).ready(function() {
    //option A
    $("form").submit(function(e){
        alert('submit intercepted');
        e.preventDefault(e);
    });
});