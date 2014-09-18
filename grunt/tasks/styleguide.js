(function(){
    "use strict";
    module.exports = function(grunt) {
        var _ = grunt.util._;
        var config = grunt.config('styleguide');
        var styleguide = require('simple-styleguides');
        grunt.registerTask('styleguide', function() {
            var done = this.async();
            var nsg = styleguide(config.options, function(){
                done();
            });
        });
    };
})();
