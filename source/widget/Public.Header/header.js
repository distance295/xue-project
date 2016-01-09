/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-30 14:50:51
 * @version $Id$
 */

$(function () {
    $('#module-header').on('keydown', '.h-search input.h-text', function (e) {
        if (e.which == 13) {
            try {
                search();
            } catch (e) {}
        }
    });
});
