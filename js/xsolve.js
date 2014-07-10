var xsolve;
(function($, xsolve) {
    'use strict';

    var matrix;

    // Global Functions
    xsolve.util = {};

    xsolve.util.lowlight = function(cell) {
        cell.$elem.removeClass('highlight');
    };


    // Local Functions
    function bindHighlighter($elem) {
        $elem.keyup(function() {
            // var firstChar = $(this).val()[0];
            // matrix.highlightChar(firstChar);
            var input = $(this).val().trim();
            matrix.highlightChar(input);
        });
    };

    function init() {
        matrix = new xsolve.Matrix($('#crossword table'));
        // toString is needed in console.log, but not in alert, see http://stackoverflow.com/questions/9943257/how-do-i-override-the-default-output-of-an-object
        console.log(' Matrix: ~~~~~\n' + matrix.toString() + '~~~~~~~~~~~~~');
        //alert(matrix);
        bindHighlighter($('#in'));
    };


    // Init
    $(document).ready(function() {
        init();
    });
})(jQuery, xsolve || (xsolve = {}));
