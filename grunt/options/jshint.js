(function(){
    "use strict";
    var _;
    module.exports = function(option, grunt) {
        _ = grunt.util._;
        var config = {
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                },
                es3 : true,
                forin : true,
                indent: 4,
                strict: true
            }
        };

        // Also lint grunt files
        config.grunt = {};
        config.grunt.files = {};
        config.grunt.files.src = ['gruntfile.js', 'grunt/**/*.js'];

        config.common = {};
        config.common.files = {};
        config.common.files.src = ["src/js/**/*.js", "!src/js/vendor/**/*.js"];

        return config;
    };
})();

