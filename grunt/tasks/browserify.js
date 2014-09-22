(function(){
    "use strict";
    module.exports = function(grunt){
        grunt.registerTask("browserify", function(){
            var done = this.async();
            var fs = require('fs');
            var path = require('path');

            var browserify = require('browserify');
            var watchify = require('watchify');

            var watching = grunt.option('watching');

            var b = browserify({
                debug: true,
                cache : {},
                packageCache : {},
                fullPaths : false
            });

            b.plugin('minifyify', {
                map: "main.js.map",
                output : "dist/js/main.js.map",
                compressPath: function (p) {
                  return path.relative('./', p);
                }
            });

            b.add('./src/js/main.js');

            if(watching) {
                var w = watchify(b);
                w.on('update', function(){
                    w.bundle().pipe(fs.createWriteStream('dist/js/main.js')).on('finish', function(){
                        grunt.log.success('File written');
                    });
                }).on('log', function(msg) {
                    grunt.log.writeln("Browserify >> " + msg);
                });


            } else {
                b.bundle().pipe(fs.createWriteStream('dist/js/main.js')).on('finish', function(){
                    done();
                    grunt.log.success('File written');
                });
            }


        });
    };
})();