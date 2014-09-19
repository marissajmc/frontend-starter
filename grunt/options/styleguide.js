(function(){
    "use strict";
    module.exports = function(option, grunt) {
        var config = {
            options: {
                files : [
                    "src/sass/**/*.scss"
                ],
                output : "styleguide/",
                webDir : "/styleguide/",
                itemTemplate : 'styleguide/item_template.html',
                captureCSS: true
            }
        };  

        return config;
    };

})();