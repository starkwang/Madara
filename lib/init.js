fs = require('fs-extra');
// process = require('child_process');

function init(){
  // process.exec('git clone https://github.com/starkwang/Madara.git',
  //     function (error, stdout, stderr) {
  //       if (error !== null) {
  //         console.log('exec error: ' + error);
  //       }
  //   });

  fs.mkdirs('./build/article',function(err){
    console.log('mkdir /build/article');
  });
  fs.mkdirs('./source/md',function(err){
    console.log('mkdir /source/md');
  });
}

module.exports = {
  init : init
}