var xsolve;
(function($, xsolve) {
    'use strict';

    var matrix;

    // Class Matrix
    // function Matrix($table) {
    //     this.rows = [];
    //
    //     var self = this;
    //
    //     $('tr', $table).each(function() {
    //         var row = [];
    //         $('td', this).each(function() {
    //             // var ch = $(this).text()[0];
    //             // ch = String.toLowerCase(ch);
    //             //console.log(ch)
    //             var cell = new Cell($(this));
    //             row.push(cell);
    //         });
    //         self.rows.push(row);
    //     });
    //
    //     this.calculateNeighbors();
    // };
    //
    // Matrix.prototype.toString = function() {
    //     var output = ' ';
    //     //console.log(this.rows);
    //     $.each(this.rows, function() {
    //         output += '| ';
    //         $.each(this, function() {
    //             output += this.char + ' | ';
    //         });
    //         output += ' \n ';
    //     });
    //     return output;
    // };
    //
    // Matrix.prototype.highlightChar = function(input) {
    //     this.eachCell(lowlight);
    //
    //     // if(typeof char === 'undefined') {
    //     //     char = ' ';
    //     // }
    //
    //     input = String.toLowerCase(input);
    //     var char = input[0];
    //     var tail = input.substr(1);
    //
    //     this.eachCell(function(cell) {
    //         if(cell.char === char) {
    //             cell.highlight();
    //             cell.neighbors(tail);
    //         }
    //     });
    // };
    //
    // Matrix.prototype.eachCell = function(func) {
    //     $.each(this.rows, function() {
    //         $.each(this, function() {
    //             func(this);
    //         });
    //     });
    // };
    //
    // Matrix.prototype.calculateNeighbors = function() {
    //     // this.eachCell(function(cell) {
    //     //
    //     // });
    // };

    // Class Cell
    // function Cell($elem) {
    //     this.$elem = $elem;
    //     var firstChar = this.$elem.text()[0];
    //     firstChar = String.toLowerCase(firstChar);
    //     this.char = firstChar;
    //     this.neighbor;
    // };
    //
    // Cell.prototype.highlight = function() {
    //     //console.log('highlight ' + this.char);
    //     this.$elem.addClass('highlight');
    // };
    //
    // Cell.prototype.neighbors = function(input) {
    //     console.log('neighbors ' + this.neighbor);
    //     //this.$elem.addClass('highlight');
    // };

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

    // function findChar(ch) {
    //
    // }

    // function highlightChar(ch) {
    //     $('tr', $('#crossword table')).each(function() {
    //         $('td', this).each(function() {
    //             var thisCh = $(this).text()[0];
    //             //console.log(ch)
    //             if(String.toLowerCase(thisCh) === String.toLowerCase(ch)) {
    //                 $(this).addClass('highlight');
    //             } else {
    //                 $(this).removeClass('highlight');
    //             }
    //         });
    //     });
    // }

    function init() {

        matrix = new xsolve.Matrix($('#crossword table'));
        // toString is needed in console.log, but not in alert, see http://stackoverflow.com/questions/9943257/how-do-i-override-the-default-output-of-an-object
        console.log(' Matrix: ~~~~~\n' + matrix.toString() + '~~~~~~~~~~~~~');
        //alert(matrix);
        bindHighlighter($('#in'));
    };

    $(document).ready(function() {
        init();
    });
})(jQuery, xsolve || (xsolve = {}));
