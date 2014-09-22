(function(){
    "use strict";
    module.exports = function(option, grunt) {

        var config = {
            css: {
                files: "src/sass/**",
                tasks : ["css"]
            },
            img : {
                files : "src/img/**",
                tasks : ["image"]
            },
            // jshint : {
            //     files : ["src/js/*.js", "src/js/modules/**/*.js"],
            //     tasks : ["newer:jshint:common"]
            // },
            icons : {
                files : ["src/icons/*.svg"],
                tasks : ["font"]
            }
        };
        return config;
    };
})();

