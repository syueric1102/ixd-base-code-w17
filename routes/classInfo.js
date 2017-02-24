
/*
 * GET class info page.
 */
var data = require('../podcastdata.json');

exports.view = function(req, res) { 
  // controller code goes here 
  var id = req.params.id; 
  console.log("The class id is: " + id);
  res.render('classInfo', {
    'id': id,
  });
};

console.log(data.PodcastClass[0].Prof);

