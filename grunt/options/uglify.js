(function(){
    "use strict"; 
    module.exports = function(option, grunt, pkg) {
        var _ = grunt.util._;
        var config = {
            options: {
                sourceMap : true,
                sourceMapIncludeSources: false,
                preserveComments: 'some'
            }
        };

        _.each(pkg.js, function(sources, name){
            config[name] = {};
            config[name].files = {};
            config[name].files["dist/js/"+name + ".js"] = sources;
        });

        return config;
    };
})();
