(function($, document, window, undefined){
    "use strict";

    window.project = window.project || {};
    project.modules = project.modules || {};

    project.modules.overlay = function(selector, options){

        // Private will not be exposed outside of this closure
        var _private = {};
        // Public is returned and can be leveraged by other modules
        var _public = {};

        _public.settings = _.extend(_private.defaults, options);

        _public.init = function() {
            $('.overlay-launch').on('click',function(e){
                e.preventDefault();

                _private.showOverlay();

                $('.overlay-wrapper .close').on('click',function(e){
                    e.preventDefault();
                    _private.hideOverlay();
                });
            });
        };

        _private.showOverlay = function(videoID) {

            $('.opacity-bg, .overlay-wrapper').show();
            
            // close overlay
            $('.opacity-bg').bind('click', function(e) {
                _private.hideOverlay();
            });
            document.onkeyup = function(e) {
                var k = e || window.event;
                if (k.keyCode === 27) {
                    _private.hideOverlay();
                }
            };
        };

        _private.hideOverlay = function() {
            $('.opacity-bg,.overlay-wrapper').hide();
        };

        // run
        _public.init();

        return _public;
    };

})(jQuery, document, window);