(function($) {
    'use strict';

    var matrix = [];

    // classes
    function Matrix() {
        this.rows = [];
    }

    Matrix.prototype.toString = function() {
        return 'test string';
    };

    function Cell(char) {
        this.char = char;
    }

    // functions
    function makeMatrix($table) {
        $('tr', $table).each(function() {
            var row = [];
            $('td', this).each(function() {
                var ch = $(this).text()[0];
                //console.log(ch)
                row.push(ch);
            });
            matrix.push(row);
        });
        //console.log(matrix);
    }

    function bindHighlighter($elem) {
        $elem.keyup(function() {
            console.log($(this).val());

            //findChar( $(this).val()[0] );
            highlightChar( $(this).val()[0] );
        });
    }

    function findChar(ch) {

    }

    function highlightChar(ch) {
        $('tr', $('#crossword table')).each(function() {
            $('td', this).each(function() {
                var thisCh = $(this).text()[0];
                //console.log(ch)
                if(String.toLowerCase(thisCh) === String.toLowerCase(ch)) {
                    $(this).addClass('highlight');
                } else {
                    $(this).removeClass('highlight');
                }
            });
        });
    }

    function init() {
        // $('#crossword td').hover(function() {
        //     var firstLetter = $(this);
        // });

        makeMatrix($('#crossword table'));
        bindHighlighter($('#in'));

        var matrix = new Matrix();
        console.log(matrix.toString());
    }

    $(document).ready(function() {
        init();
    });
})(jQuery)
