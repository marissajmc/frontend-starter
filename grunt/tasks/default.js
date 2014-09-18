(function(){
    "use strict";

    module.exports = function(grunt){
        grunt.registerTask('default', [
            "jshint",
            "sass",
            "uglify",
            "styleguide"
        ]);
    };

})();