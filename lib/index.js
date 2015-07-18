readModule = require('./read');
renderModule = require('./render');
buildModule = require('./build');
initModule = require('./init');
log = console.log;

function constructAll () {
  // body...
  var data = readModule.readAllArticle();
  var html = renderModule.renderAllArticle(data);
  buildModule.buildAllArticle(html);
}

module.exports = {
  constructAll : constructAll ,
  init : initModule.init
}