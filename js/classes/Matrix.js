var xsolve;
(function($, xsolve) {
    'use strict';

    var Matrix = function($table) {
        this.rows = [];

        var self = this;

        $('tr', $table).each(function() {
            var row = [];
            $('td', this).each(function() {
                var cell = new xsolve.Cell($(this));
                row.push(cell);
            });
            self.rows.push(row);
        });

        this.calculateNeighbors();
    };

    Matrix.prototype.toString = function() {
        var output = ' ';
        //console.log(this.rows);
        $.each(this.rows, function() {
            output += '| ';
            $.each(this, function() {
                output += this.char + ' | ';
            });
            output += ' \n ';
        });
        return output;
    };

    Matrix.prototype.highlightChar = function(input) {
        this.eachCell(xsolve.util.lowlight);

        // if(typeof char === 'undefined') {
        //     char = ' ';
        // }

        input = String.toLowerCase(input);
        var char = input[0];
        var tail = input.substr(1);
        var rows = this.rows;

        this.eachCell(function(cell) {
            if(cell.char === char) {
                cell.highlight();
                cell.path(tail, 'any', rows);
            }
        });
    };

    Matrix.prototype.eachCell = function(func) {
        $.each(this.rows, function() {
            $.each(this, function() {
                func(this);
            });
        });
    };

    Matrix.prototype.calculateNeighbors = function() {
        // this.eachCell(function(cell) {
        //
        // });
        var rows = this.rows;
        $.each(this.rows, function(i) {
            $.each(this, function(j) {
                //console.log('pos ' + i + ' ' + j );
                //func(this);
                // x and y are i and j of neighbor
                var x, y;
                // map of neighbors, direction: coords
                var neighbors = {};
                // n
                x = i - 1;
                y = j;
                if( x > -1 ) {
                    neighbors['n'] = [x, y];
                }
                // w
                x = i;
                y = j - 1;
                if( y > -1 ) {
                    neighbors['w'] = [x, y];
                }
                // e
                x = i;
                y = j + 1;
                if( y < rows[i].length ) {
                    neighbors['e'] = [x, y];
                }
                // s
                x = i + 1;
                y = j;
                if( x < rows.length ) {
                    neighbors['s'] = [x, y];
                }
                //console.log('neighbors of ' + i + ',' + j );
                //console.log(neighbors);
                this.neighbor = neighbors;
            });
        });
    };

    xsolve.Matrix = Matrix;
})(jQuery, xsolve || (xsolve = {}));
