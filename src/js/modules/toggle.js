(function($, document, window, undefined){
    "use strict";

    window.project = window.project || {};
    project.modules = project.modules || {};

    project.modules.toggle = function(selector, options){
        
        // Private will not be exposed outside of this closure
        var _private = {};
        // Public is returned and can be leveraged by other modules
        var _public = {};

        _public.settings = _.extend(_private.defaults, options);

        _public.init = function() {
            $('[data-toggle-anchor]').on('click',function(e){
                e.preventDefault();
                $(this).toggleClass('open');

                // ignore clicks on links inside toggled content
                $('.toggle__inner').on('click',function(e){
                    e.stopPropagation();
                });
            });
                 
        };

        // run
        _public.init();

        return _public;
    };

})(jQuery, document, window);