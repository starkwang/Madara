fs = require('fs');

function buildAllArticle (Array) {
  // body...
  for(i in Array){
    fs.writeFile('./build/article/'+Array[i].filename+'.html',Array[i].data,{encoding:'utf-8'},function(err){
      console.log(Array[i].filename + ' build success!');
    })
  }
}

module.exports = {
  buildAllArticle : buildAllArticle
}