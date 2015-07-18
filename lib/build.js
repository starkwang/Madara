Promise = require('bluebird');
fs = Promise.promisifyAll(require('fs-extra'));

function buildAllArticle (Array) {
  // body...
  fs.ensureDirAsync('./build/article')
    .then(function(){
      console.log('mkdir ./build/article');
      for(i in Array){
        fs.writeFileAsync('./build/article/'+Array[i].filename+'.html',Array[i].data,{encoding:'utf-8'})
          .then(function(err){
            console.log(Array[i].filename + ' build success!');
          })  
      }
    })
  
}

module.exports = {
  buildAllArticle : buildAllArticle
}