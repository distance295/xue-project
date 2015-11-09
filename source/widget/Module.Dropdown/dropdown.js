/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-30 14:50:51
 * @version $Id$
 */

var dropdown = dropdown || {};
//var $ = require('jquery');



//头部菜单显示隐藏
dropdown.show = function (e) {
    var that = $(e);
    that.addClass('hover').siblings().removeClass('hover');
    that.find('.dropdown-body').show();
    that.on('mouseleave', function (event) {
        that.removeClass('hover');
        that.find('.dropdown-body').hide();
    });
};
$(function () {
    //头部菜单
    $('.ui-dropdown').on('mouseenter', function (event) {
        dropdown.show(this);
    });

});
