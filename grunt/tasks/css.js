(function(){
    "use strict";

    module.exports = function(grunt){
        grunt.registerTask('css', [
            "sass",
            "newer:autoprefixer"
        ]);
    };

})();