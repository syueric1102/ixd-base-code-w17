
/*
 * GET class info page.
 */

var fs = require('fs');
var Analyzer = require('../analyzer-v3');

var data = require('../podcastdata.json');
var analysisdata;

exports.view = function(req, res) { 
  // controller code goes here 
  var id = req.params.id; 

  res.render('classInfo', {
    'id': id,
  });

  var analyzer = new Analyzer('a371a3f6-55d6-4d4d-aab4-9b5c296483e1')
  var audio = './audioedited/' + id + 'edited.wav'
  console.log(id);

  analyzer.analyze(fs.createReadStream(audio),function(err,analysis){
    console.log(JSON.stringify(analysis));
  	analysisdata = JSON.stringify(analysis);
    fs.writeFileSync('./test.json', analysisdata, 'utf-8');
  });

};