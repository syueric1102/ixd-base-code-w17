
/*
 * GET class info page.
 */

exports.view = function(req, res) { 
  // controller code goes here 
  var nameClass = req.params.name; 
  console.log("The project name is: " + nameClass);
  res.render('classInfo', {
    'class': nameClass,
  });
};


