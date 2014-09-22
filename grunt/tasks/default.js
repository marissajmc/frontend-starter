(function(){
    "use strict";

    module.exports = function(grunt){
        grunt.registerTask('default', [
            "js",
            "font",
            "css",
            "image",
            "styleguide"
        ]);
    };

})();