(function(){
    "use strict";
    module.exports = function(option, grunt) {

        var config = {
            test: {
                src: 'dist/js/main.js',
                options: {
                    specs: 'test/spec/*.js',
                    helpers: 'test/helper/*.js',
                    vendor: [],
                    keepRunner : true,
                    outfile : "test/index.html"
                }
            }
        };
        return config;
    };
})();

