
/*
 * GET class info page.
 */
var data = require('../podcastdata.json');

exports.view = function(req, res) { 
  // controller code goes here 
  var id = req.params.id; 
  res.render('classInfo', {
    'id': id,
  });
};

