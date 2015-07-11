promise = require('bluebird');
fsp = promise.promisifyAll(require('fs'));
fs = require('fs');
log = console.log;

var a;

function readAllArticle(){
  var articleObjectCollection = new Array();

  var dir = fs.readdirSync('./source/md/');
  for(var i = 0 ; i < dir.length ; i++){
        var data = fs.readFileSync('./source/md/' + dir[i] , 'utf-8');
        var tmp = parseArticle(data);
        articleObjectCollection.push(tmp);
      }

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
  return articleObjectCollection;
}


module.exports = {
  readAllArticle : readAllArticle
}