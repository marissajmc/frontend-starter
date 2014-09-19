(function(){
    "use strict";
    module.exports = function(grunt) {
        grunt.registerTask('savewatch', function(){
            grunt.option('watching', true);
        });
    };
})();
