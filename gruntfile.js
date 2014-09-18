(function(){
    "use strict";

    module.exports = function(grunt) {
        var taskConfig = getConfigs(grunt, './grunt/options/');
        grunt.initConfig(taskConfig);
        require('load-grunt-tasks')(grunt);
        grunt.loadTasks('grunt/tasks');
    };

    //load task config files.
    function getConfigs(grunt, path) {
        var config = {};
        var glob = require('glob');

        glob.sync('*', {cwd: path}).forEach(function(filename) {
            var option = filename.replace(/\.js$/,'');
            config[option] = require(path + option)(option, grunt);
        });
     
        return config;
    }

})();

