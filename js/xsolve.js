(function($) {
    'use strict';

    var matrix;

    // classes
    function Matrix($table) {
        this.rows = [];

        var self = this;

        $('tr', $table).each(function() {
            var row = [];
            $('td', this).each(function() {
                // var ch = $(this).text()[0];
                // ch = String.toLowerCase(ch);
                //console.log(ch)
                var cell = new Cell($(this));
                row.push(cell);
            });
            self.rows.push(row);
        });
    };

    Matrix.prototype.toString = function() {
        var output = ' ';
        console.log(this.rows);
        $.each(this.rows, function() {
            output += '| ';
            $.each(this, function() {
                output += this.char + ' | ';
            });
            output += ' \n ';
        });
        return output;
    };

    Matrix.prototype.highlightChar = function(char) {
        if(typeof char === 'undefined') {
            char = ' ';
        }
        char = String.toLowerCase(char);
        $.each(this.rows, function() {
            $.each(this, function() {
                if(this.char === char) {
                    this.highlight();
                } else {
                    this.lowlight();
                }
            });
        });
    };

    function Cell($elem) {
        this.$elem = $elem;
        var char = this.$elem.text()[0];
        char = String.toLowerCase(char);
        this.char = char;
    };

    Cell.prototype.highlight = function() {
        //console.log('highlight ' + this.char);
        this.$elem.addClass('highlight');
    };

    Cell.prototype.lowlight = function() {
        this.$elem.removeClass('highlight');
    };

    // Functions

    function bindHighlighter($elem) {
        $elem.keyup(function() {
            var firstChar = $(this).val()[0];
            matrix.highlightChar(firstChar);
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

        matrix = new Matrix($('#crossword table'));
        // toString is needed in console.log, but not in alert, see http://stackoverflow.com/questions/9943257/how-do-i-override-the-default-output-of-an-object
        console.log(' Matrix: ~~~~~\n' + matrix.toString() + '~~~~~~~~~~~~~');
        //alert(matrix);
        bindHighlighter($('#in'));
    };

    $(document).ready(function() {
        init();
    });
})(jQuery)
