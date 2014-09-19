(function(){
    "use strict";

    module.exports = function(grunt){
        grunt.registerTask('image', [
            "newer:imagemin"
        ]);
    };

})();