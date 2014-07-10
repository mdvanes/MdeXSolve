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

        this.eachCell(function(cell) {
            if(cell.char === char) {
                cell.highlight();
                cell.neighbors(tail);
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
    };

    xsolve.Matrix = Matrix;
})(jQuery, xsolve || (xsolve = {}));
