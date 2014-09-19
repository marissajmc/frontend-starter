(function(){
    "use strict";
    module.exports = function(option, grunt) {

        var config = {
            dynamic: {                         // Another target
              files: [{
                expand: true,                  // Enable dynamic expansion
                cwd: 'src/img',                // Src matches are relative to this path
                src: ['**/*.{png,jpg,gif,svg}'],   // Actual patterns to match
                dest: 'dist/img'               // Destination path prefix
              }]
            }
        };
        return config;
    };
})();

