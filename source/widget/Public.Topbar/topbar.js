/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-30 14:50:51
 * @version $Id$
 */

var topbar = topbar || {};
//var $ = require('jquery');

//头部购物车显示隐藏
topbar.shopCart = function (e) {
    var that = $(e);
    that.parents('.ui-head-shopcart ').addClass('hover');
    //鼠标移出
    $('.ui-head-shopcart').on('mouseleave', function (event) {
        $(this).removeClass('hover');
    });
};
//头部菜单显示隐藏
topbar.menuShow = function (e) {
    var that = $(e);
    that.addClass('hover').siblings().removeClass('hover');
    that.on('mouseleave', function (event) {
        that.removeClass('hover');
    });
};
$(function () {
    //头部菜单
    $('.ui-header-menu li.ui-dropdown').on('mouseenter', function (event) {
        topbar.menuShow(this);
    });
    //头部购物车鼠标移入
    $('.sp-up-wrap').on('mouseenter', function () {
        topbar.shopCart(this);
    });
});
