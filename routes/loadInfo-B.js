
/*
 * GET load info page.
 */

var Temper;
var Valence;
var Excitement;
/*
var TemperColor = "red";
var ValenceColor = "blue";
var ExcitementColor = "green";

var dominantColor = "";
*/
var fs = require('fs');
var Analyzer = require('../analyzer-v3');

var data = require('../podcastdata.json');
var testdata;
var analysisdata;

exports.view = function(req, res) { 
  // controller code goes here 
  console.log("asdofiajsoij"); 

  var id = req.params.id; 

  var analyzer = new Analyzer('a371a3f6-55d6-4d4d-aab4-9b5c296483e1');

  var audio = './audioedited/' + id + 'edited.wav';

  if(!fs.existsSync(audio)) {
    console.log("File not found"); 
  }

  // The file *does* exist
  else {
    analyzer.analyze(fs.createReadStream(audio),function(err,analysis){
      //console.log(JSON.stringify(analysis.result.analysisSegments[0].analysis.Temper.Value));
      Temper = analysis.result.analysisSegments[0].analysis.Temper.Value;
      Valence = analysis.result.analysisSegments[0].analysis.Valence.Value;
      Excitement = analysis.result.analysisSegments[0].analysis.Arousal.Value;

      console.log("id is " + id);
      console.log("Temper is " + Temper);
      console.log("Valence is " + Valence);
      console.log("Excitement is " + Excitement);
      //dominantColor = 

      //fs.writeFileSync('./test.json', analysisdata, 'utf-8');
      //console.log("test here: " + JSON.stringify(analysis);
    });

    /*
    Temper = analysisdata.results.analysisSegments.analysis.Temper.Value;
    Valence = 
    Excitement = 
    */
  }
};