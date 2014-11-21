$(document).foundation();

(function(){
    "use strict";
    
    window.project = window.project || {};
    project.modules = project.modules || {};

    var modules = project.modules;

    // init modules
    project.overlay = modules.overlay();
    project.toggleContent = modules.toggle();

})();