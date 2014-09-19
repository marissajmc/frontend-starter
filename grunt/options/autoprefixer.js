(function(){
    "use strict";
    module.exports = function(option, grunt) {

        var config = {
            options: {
                map : true,
                browsers: ['last 2 versions','> 1%', 'ie 8', 'ie 9']
            },
            dist: {
               src : "dist/css/*.css"
                
            }
        };
        return config;
    };
})();

