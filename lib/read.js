promise = require('bluebird');
fsp = promise.promisifyAll(require('fs'));
fs = require('fs');
log = console.log;

function readAllArticle(){
  var array = [];
  var dir = fs.readdirSync('./source/md/',function(err){
    console.log('./source/md/ does not exit !');
  });

  var reads = [];
  for(var i = 0 ; i < dir.length ; i++){
        reads.push(fs.readFileAsync('./source/md/' + dir[i] , 'utf-8'));
        // var data = fs.readFileSync('./source/md/' + dir[i] , 'utf-8');
        // var tmp = parseArticle(data);
        // articleObjectCollection.push(tmp);
      }

  array =  promise.all(reads)
    .then(function(data){
      var articleObjectCollection = new Array();
      for(var i = 1 ; i < data.length ; i++){
        var tmp = parseArticle(data[i]);
        articleObjectCollection.push(tmp);
      }
        return articleObjectCollection;
  })

  function parseArticle(data){
    var split = data.split('\n---config---\n');
    var configJSON = split[0];
    var markdown = split[1];
    var config = JSON.parse(configJSON);
    
    var articleObject = {
      config : config ,
      markdown : markdown
    }

    return articleObject;

  }
  log(array);
  return array;
}

module.exports = {
  readAllArticle : readAllArticle
}