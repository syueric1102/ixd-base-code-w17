
/*
 * GET search page.
 */
var data = require('../podcastdata.json');

exports.view = function(req, res){
  res.render('search', data);
};
