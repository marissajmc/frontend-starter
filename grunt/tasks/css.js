(function(){
    "use strict";

    module.exports = function(grunt){
        grunt.registerTask('css', [
            "newer:sass",
            "newer:autoprefixer"
        ]);
    };

})();