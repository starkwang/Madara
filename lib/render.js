markdown = require('markdown').markdown;
jade = require('jade');
log = console.log;

var renderAtricle = jade.compileFile('themes/galaxy/template/article.jade',{pretty:true});
function renderAllArticle (dataArray) {
  var renderCollection = [];
  for(item in dataArray){
    var passage = markdown.toHTML(dataArray[item].markdown);
    log(typeof(passage));
    var html = renderAtricle({
      title : dataArray[item].config.title ,
      time : dataArray[item].config.time , 
      markdown : passage;
    });
    //html = html.replace(/{{% markdown %}}/g,markdown.toHTML(dataArray[item].markdown));
    
    var fileObject = {
      filename : dataArray[item].config.title ,
      data : html
    }

    renderCollection.push(fileObject);
  }
  return renderCollection;
}

module.exports = {
  renderAllArticle : renderAllArticle
}