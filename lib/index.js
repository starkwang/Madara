readModule = require('./read');
renderModule = require('./render');
buildModule = require('./build');
initModule = require('./init');
promise = require('bluebird');
log = console.log;

function constructAll () {
  // body...


  readModule.readAllArticle()
    .then(function(data){
      log(data);
      return renderModule.renderAllArticle(data);
    })
    .then(function(html){
      buildModule.buildAllArticle(html);
    });
  //var html = renderModule.renderAllArticle(data);
  //buildModule.buildAllArticle(html);
}

module.exports = {
  constructAll : constructAll ,
  init : initModule.init
}