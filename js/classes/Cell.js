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

    Cell.prototype.path = function(input, direction, rows) {
        // TODO direction can be multiple directions
        // if direction === any, it is the second character
        //console.log('neighbors ' + this.neighbor);
        if( direction === 'any' && input.length > 0) {
            var nextChar = input[0];
            //console.log('nextChar = ' + nextChar);

            // iterate over all neighbors
            for( var name in this.neighbor ) {
                //console.log(name);
                var x = this.neighbor[name][0];
                var y = this.neighbor[name][1];
                // console.log('x=' + x );
                // console.log('neighbor ' + rows[x][y].char);
                if(rows[x][y].char === nextChar) {
                    // console.log('found ' + nextChar + ' in neighbor');
                    rows[x][y].highlight();
                    // TODO find the next char, but only in the same direction
                    // e.g. cell.path(inputtail, samedirection, rows);
                }
            }
        }
        //this.$elem.addClass('highlight');
    };

    xsolve.Cell = Cell;
})(jQuery, xsolve || (xsolve = {}));
