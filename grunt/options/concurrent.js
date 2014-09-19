(function(){
    "use strict";
   
    module.exports = function(option, grunt) {
        var config = {
            watch: {
                tasks: ['watch-orig', 'browserify'],
                options: { logConcurrentOutput: true }
            }
        };
        return config;
    };
})();

