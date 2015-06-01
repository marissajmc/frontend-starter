// (function(){
//     "use strict"; 
//     module.exports = function(grunt, pkg) {

//         var config = {
//             all : {
//                 src : ['src/icons/*.svg'],
//                 destCss : "src/sass/partials/_icons.scss",
//                 destFonts : "dist/icons/icons.{svg,woff,eot,ttf}",
//                 cssRouter: function (fontpath) {
//                     return '../../' + fontpath;
//                 }

//             }
//         };

//         return config;
//     };
// })();


// See https://github.com/sapegin/grunt-webfont for setup instructions
(function(){
    "use strict"; 
    module.exports = function(grunt, pkg) {
        var _ = require('lodash');

        var config = {
            all : {
                src : ['src/icons/*.svg'],
                destCss : "src/sass/partials/",
                dest : "dist/icons/",
                options : {
                    types : ["eot", "woff", "ttf", "svg"],
                    stylesheet : "scss",
                    engine : "node",
                    autohint : false,
                    htmlDemo : false,
                    template : "iconFontTemplate.css",
                    relativeFontPath : "../icons/",
                    fontHeight : 1000,
                    descent : 0,
                    templateOptions : {
                        baseClass : "icon",
                        classPrefix : "icon--",
                        mixinPrefix : "icon--"
                    }
                }
            }
        };

        return config;
    };
})();
