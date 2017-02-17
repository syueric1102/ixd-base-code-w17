
/*
 * GET search page.
 */

exports.view = function(req, res){
  res.render('professor', {
      'name' : "Klemmer, Scott",
      'class1' : "COGS 120",
  });
    
};