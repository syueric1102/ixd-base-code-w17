
/*
 * GET search page.
 */
var data = require('../podcastdata.json');

exports.view2 = function(req, res){
  res.render('search-B', data);
};

console.log(data.PodcastClass[2].Prof);

