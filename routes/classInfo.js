
/*
 * GET class info page.
 */

var plotly = require('plotly')('EricSyu', 'Rmjd5Ul2iwKKxcx2DiLt');

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

  var analyzer = new Analyzer('a371a3f6-55d6-4d4d-aab4-9b5c296483e1');

  var audio = './audioedited/' + id + 'edited.wav';

  if(!fs.existsSync(audio)) {
    console.log("File not found"); 
  }

  // The file *does* exist
  else {
    analyzer.analyze(fs.createReadStream(audio),function(err,analysis){
      console.log(JSON.stringify(analysis));
      analysisdata = JSON.stringify(analysis);
      fs.writeFileSync('./test.json', analysisdata, 'utf-8');
    });
  }
  console.log("id is " + id);

};