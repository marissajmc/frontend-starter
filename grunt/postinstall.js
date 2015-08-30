(function(){
    'use strict';
    var glob = require('glob');
    var fs = require("fs");
    console.log("Postinstall: Removing .info files");
    glob("node_modules/**/*.info", function(er, files){
        files.forEach(function(file){
            console.log("found file: " + file);
            fs.unlink(file, function(er){
                if(!er) {
                    console.log('Removed: ' + file);
                }
            });
        });
    });
})();