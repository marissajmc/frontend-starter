(function(){
    "use strict";

    module.exports = function(grunt){
        grunt.registerTask('js', [
            "newer:jshint",
            "newer:uglify"
        ]);
    };

})();