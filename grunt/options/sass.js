(function(){
    "use strict";
    var glob = require('glob');
    var _;
    module.exports = function(option, grunt) {
        _ = grunt.util._;
        var config = {
            options: {
                sourceMap : true,
                outputStyle : "compressed",
                includePaths: ['src/vendor/foundation/scss']
            }
        };

        // Common css
        var commonSassFiles = getFilesToCompile('src/sass/');
        var commonCssFiles = _.map(commonSassFiles, fromSasstoCss);

        config.common = {};
        config.common.files = _.object(commonCssFiles, commonSassFiles);
        return config;
    };

    function getFilesToCompile(path) {
        return _.map(glob.sync('*.scss', {cwd: path}), function(file){
            return process.cwd() + "/" + path + file;
        });
    }

    function fromSasstoCss(sassFile) {
        return sassFile.replace('sass', 'css').replace("src", "dist").replace('.scss', '.css');
    }
})();