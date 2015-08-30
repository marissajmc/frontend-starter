(function(){
    "use strict";
    module.exports = function(option, grunt) {

        var config = {
            dev: {
                bsFiles : {
                    src : ["dist/js/*.js", "dist/css/*.css", "src/img/**", 'dist/icons/**']
                },
                options: {
                    watchTask: true,
                    proxy : "localhost:1235"
                }
            }
        };
        return config;
    };
})();

