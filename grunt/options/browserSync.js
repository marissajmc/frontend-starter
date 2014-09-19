(function(){
    "use strict";
    module.exports = function(option, grunt) {

        var config = {
            dev: {
                bsFiles : {
                    src : ["dist/js/*.js", "dist/css/*.css", "dist/img/**"]
                },
                options: {
                    watchTask: true,
                    proxy : "localhost:1234"
                }
            }
        };
        return config;
    };
})();

