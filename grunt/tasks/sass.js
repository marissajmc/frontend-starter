var sass = require('node-sass');
var fs = require('fs');
var glob = require('glob');
var path = require('path');
var _ = require('lodash');

var conf = {
    src : 'src/sass/*.scss',
    dest : 'dist/css/{file}.css',
    options : {
        sourceMap : true,
        outputStyle : 'compressed',
        sourceMapContents : true,
        includePaths: ['src/vendor/foundation/scss']
    }
};

(function(){
    'use strict';

    module.exports = function(grunt){
        grunt.registerTask('sass', 'Find and compile sass files', function() {
            var done = this.async();
            var filesToRender = 0;
            var filesRendered = 0;

            var render = function(src) {
                var fileName = path.basename(src, '.scss');
                var outFile = conf.dest.replace('{file}', fileName);

                var defaults = {
                    file: src,
                    outFile : outFile
                };

                var options = _.assign(defaults, conf.options);

                sass.render(options, function(err, result) {
                    if(err) {
                        grunt.log.error(err);
                    } else {
                        fs.writeFileSync(outFile, result.css);
                        fs.writeFileSync(outFile + '.map', result.map);
                    }

                    filesRendered += 1;

                    if(filesRendered === filesToRender) {
                        done();
                    }
                });

                
            };

            glob(conf.src, function(err, files){
                if(err) {
                    grunt.log.error(err);
                } else {
                    filesToRender = files.length;
                    files.forEach(render);
                }
            });


            
        });
    };

})();