(function(){
    "use strict";

    module.exports = function(grunt){
        grunt.registerTask('default', [
            "js",
            "webfont",
            "css",
            "styleguide"
        ]);
    };

})();