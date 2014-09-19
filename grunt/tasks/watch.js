(function(){
    "use strict";
    module.exports = function(grunt) {
        grunt.config('watch-orig', grunt.config('watch'));
        grunt.renameTask('watch', 'watch-orig');
        grunt.registerTask('watch', ['savewatch', 'browserSync', 'concurrent:watch']);
    };
})();
