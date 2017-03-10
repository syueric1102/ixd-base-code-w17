
/*
 * GET class info page.
 */

var Temper;
var Valence;
var Excitement;
var errorFlag = false;
/*
var TemperColor = "red";
var ValenceColor = "blue";
var ExcitementColor = "green";

var dominantColor = "";
*/
var fs = require('fs');
var Analyzer = require('../analyzer-v3');

var data = require('../podcastdata.json');
var analysisdata;

exports.view = function(req, res) { 
  // controller code goes here 
  var id = req.params.id; 

  var analyzer = new Analyzer('a371a3f6-55d6-4d4d-aab4-9b5c296483e1');

  var audio = './public/audioedited/' + id + 'edited.wav';

  if(!fs.existsSync(audio)) {
    console.log("File not found"); 
    errorFlag = true;
    res.setTimeout(3000, function(){
      res.render('classInfo', {
        'id': id,
        'Temper' : 0,
        'Valence' : 0,
        'Excitement' : 0,
        'errorFlag' : errorFlag
      });
    })
  }

  // The file *does* exist
  else {
    var errorFlag = false;
    analyzer.analyze(fs.createReadStream(audio),function(err,analysis){
      //console.log(JSON.stringify(analysis.result.analysisSegments[0].analysis.Temper.Value));
      Temper = analysis.result.analysisSegments[0].analysis.Temper.Value;
      Valence = analysis.result.analysisSegments[0].analysis.Valence.Value;
      Excitement = analysis.result.analysisSegments[0].analysis.Arousal.Value;

      var totalVal = parseFloat(Temper) + parseFloat(Valence) + parseFloat(Excitement);
      var r = Math.floor(255*(parseFloat(Temper)/totalVal));
      var g = Math.floor(255*(parseFloat(Excitement)/totalVal));
      var b = Math.floor(255*(parseFloat(Valence)/totalVal));

      console.log("id is " + id);
      console.log("Temper is " + Temper);
      console.log("Valence is " + Valence);
      console.log("Excitement is " + Excitement);
      console.log(r);
      console.log(g);
      console.log(b);

      res.setTimeout(3000, function(){
        res.render('classInfo', {
          'id': id,
          'Temper' : Temper,
          'Valence' : Valence,
          'Excitement' : Excitement,
          'r' : r,
          'g' : g,
          'b' : b,
          'errorFlag' : errorFlag
        });
      })
      //dominantColor = 

      //fs.writeFileSync('./test.json', analysisdata, 'utf-8');
      //console.log("test here: " + JSON.stringify(analysis);
    });
    /*
    res.render('classInfo', {
        'id': id,
        'Temper' : Temper,
        'Valence' : Valence,
        'Excitement' : Excitement
    });
    */
  }
};

exports.view2 = function(req, res) { 
  // controller code goes here 
  var id = req.params.id; 

  var analyzer = new Analyzer('a371a3f6-55d6-4d4d-aab4-9b5c296483e1');

  var audio = './audioedited/' + id + 'edited.wav';

  if(!fs.existsSync(audio)) {
    console.log("File not found"); 
    errorFlag = true;
    res.setTimeout(3000, function(){
      res.render('classInfo-B', {
        'id': id,
        'Temper' : 0,
        'Valence' : 0,
        'Excitement' : 0,
        'errorFlag' : errorFlag
      });
    })
  }

  // The file *does* exist
  else {
    var errorFlag = false;
    analyzer.analyze(fs.createReadStream(audio),function(err,analysis){
      //console.log(JSON.stringify(analysis.result.analysisSegments[0].analysis.Temper.Value));
      Temper = analysis.result.analysisSegments[0].analysis.Temper.Value;
      Valence = analysis.result.analysisSegments[0].analysis.Valence.Value;
      Excitement = analysis.result.analysisSegments[0].analysis.Arousal.Value;

      var totalVal = parseFloat(Temper) + parseFloat(Valence) + parseFloat(Excitement);
      var r = Math.floor(255*(parseFloat(Temper)/totalVal));
      var g = Math.floor(255*(parseFloat(Excitement)/totalVal));
      var b = Math.floor(255*(parseFloat(Valence)/totalVal));

      console.log("id is " + id);
      console.log("Temper is " + Temper);
      console.log("Valence is " + Valence);
      console.log("Excitement is " + Excitement);
      console.log(r);
      console.log(g);
      console.log(b);

      res.setTimeout(3000, function(){
        res.render('classInfo-B', {
          'id': id,
          'Temper' : Temper,
          'Valence' : Valence,
          'Excitement' : Excitement,
          'r' : r,
          'g' : g,
          'b' : b,
          'errorFlag' : errorFlag
        });
      })
      //dominantColor = 

      //fs.writeFileSync('./test.json', analysisdata, 'utf-8');
      //console.log("test here: " + JSON.stringify(analysis);
    });
    /*
    res.render('classInfo', {
        'id': id,
        'Temper' : Temper,
        'Valence' : Valence,
        'Excitement' : Excitement
    });
    */
  }
};