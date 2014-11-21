// Avoid `console` errors in browsers that lack a console.
(function() {
    "use strict";
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

}());

// get query string parameters
$.fn.getUrlVars = function(){
    "use strict";
    var vars = [], hash;
    // remove any # in the url
    var pageurl = window.location.href.replace('#','');
    var hashes = pageurl.slice(pageurl.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++){
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
};

// detect media query change
$.fn.mqchange = function(queries, callback) {
    "use strict";
    var $mq = $('#mq-test');
    var mqh = $mq.height();
    $(window).resize(function() {
        var height = $mq.height();
        if (mqh !== height) {
            callback(queries[height]);
            mqh = height;
        }
    });
    callback(queries[mqh]);
    return this;
};

// scrollTo
$.fn.scrollTo = function(elem, duration) {
    "use strict";
    if (elem.offset() !== undefined){
        $('html,body').animate({
            scrollTop: elem.offset().top
        },duration);
    }
};