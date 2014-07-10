var xsolve;
(function($, xsolve) {
    'use strict';

    var Cell = function($elem) {
        this.$elem = $elem;
        var firstChar = this.$elem.text()[0];
        firstChar = String.toLowerCase(firstChar);
        this.char = firstChar;
        this.neighbor;
    };

    Cell.prototype.highlight = function() {
        //console.log('highlight ' + this.char);
        this.$elem.addClass('highlight');
    };

    Cell.prototype.neighbors = function(input) {
        console.log('neighbors ' + this.neighbor);
        //this.$elem.addClass('highlight');
    };

    xsolve.Cell = Cell;
})(jQuery, xsolve || (xsolve = {}));
