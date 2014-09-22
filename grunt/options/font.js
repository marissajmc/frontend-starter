(function(){
    "use strict"; 
    module.exports = function(grunt, pkg) {

        var config = {
            all : {
                src : ['src/icons/*.svg'],
                destCss : "src/sass/partials/_icons.scss",
                destFonts : "dist/icons/icons.{svg,woff,eot,ttf}",
                cssRouter: function (fontpath) {
                    return '../' + fontpath;
                }

            }
        };

        return config;
    };
})();
