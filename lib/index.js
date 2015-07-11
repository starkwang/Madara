markdown = require('markdown').markdown;
promise = require('bluebird');
jade = require('jade');
fs = promise.promisifyAll(require('fs'));
readModule = require('./read');
renderModule = require('./render');
buildModule = require('./build');
log = console.log;


var data = readModule.readAllArticle();
var html = renderModule.renderAllArticle(data);
buildModule.buildAllArticle(html);