(function(){
    "use strict";
    module.exports = function(option, grunt) {

        var config = {
            css: {
                files: "src/sass/**",
                tasks : ["css","styleguide"]
            },
            js : {
                files : ["src/js/*.js", "src/js/modules/**/*.js"],
                tasks : ["newer:jshint:common", "uglify"]
            },
            icons : {
                files : ["src/icons/*.svg"],
                tasks : ["font"]
            },
            options : {
                spawn : false
            }
        };
        return config;
    };
})();

