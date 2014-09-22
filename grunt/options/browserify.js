(function(){
    "use strict";
   
    module.exports = function(option, grunt) {
        var watching = grunt.option('watching');
        var path = require('path');
        var config = {
            dist: {
                files : {
                    'dist/js/main.js' : 'src/js/main.js'
                },
                options : {
                    preBundleCB: function (b) {
                        b.plugin('minifyify', {
                            map: "main.js.map",
                            output : "dist/js/main.js.map",
                            compressPath: function (p) {
                              return path.relative('./', p);
                            }
                        });
                    },
                    browserifyOptions : {
                        debug : true,
                        transform : [
                            'debowerify'
                        ],
                        baseDir : ""
                    },
                    watch : watching ? true : false,
                    keepAlive : watching ? true : false
                }
            }
        };
        return config;
    };
})();

