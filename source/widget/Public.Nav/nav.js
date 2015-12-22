/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-30 14:50:51
 * @version $Id$
 */

var nav = nav || {};

nav.opt = {
    id: '#ui-categorys',
    handle: '.category-dt',
    body: '.category-dd',
    layer: '.category-layer',
    items: '.category-items',
    item: '.category-item',
    subjects: '.category-subject',
    dataUrl : 'nav.json',
    fixed : false

};
nav.get = function (url, callback) {
    var _opt = this.opt;
    var _url = url || _opt.dataUrl;
    var _handle = $(_opt.handle),
        _body = $(_opt.body);
    if ($(nav.opt.item).length > 0) {
        return;
    }
    $.ajax({
        url: _url,
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            if (result.content.length <= 0) {
                return;
            }
            var _item = [],
                _tpl = '<ul>',
                _sub = '',
                _con = result.content;
            $.each(_con, function (k, v) {
                _tpl += '<li class="category-item item'+ v.id +'" data-id="' + v.id + '">' + '<h3>' + v.name + ' <i class="icon icon-arrow-right pull-right">&gt;</i></h3>' + '<p class="row">';
                _sub += '<div class="category-subject" id="subject_' + v.id + '" data-id="' + v.id + '">';
                $.each(v.items, function (i, c) {
                    _tpl += '<a href="' + c.link + '" class="col-xs-3" data-id="' + c.id + '">' + c.name + '</a>';
                    _sub += '<dl class="subitem" data-id="' + c.id + '">' + '<dt>' + c.name + '</dt>' + '<dd class="row">' + c.content + '</dd>' + '</dl>';
                });
                _tpl += '</p></li>';
                _sub += '</div>';
            });
            _tpl += '</ul>';
            $(_opt.items).html(_tpl);
            $(_opt.layer).html(_sub);
        },
        error: function(a, b, c, d){
//            console.log(arguments);
        }
    });
};

nav.show = function () {
    this.get();
    $(nav.opt.id).addClass('hover');
};
nav.hide = function () {
    var that = $(nav.opt.id);
    if (that.hasClass('fixed')) {
        nav.sub.hide();
        return false;
    }
    that.removeClass('hover');
    nav.sub.hide();
};
nav.sub = {
    show: function (id) {
        var _sub = $('#subject_' + id),
            _item = $(nav.opt.item + '.item' + id);
        _item.addClass('hover').siblings().removeClass('hover');
        _sub.addClass('hover').siblings().removeClass('hover');
        $(nav.opt.layer).addClass('hover');
    },
    hide: function () {
        $(nav.opt.item).removeClass('hover');
        $(nav.opt.layer).removeClass('hover');
    }
};
nav.init = function(o){
    $.extend(this.opt, o);
    
    if(this.opt.fixed){
        $(this.opt.id).addClass('fixed hover');
    }else{
        $(this.opt.id).removeClass('fixed hover');
    }
    
    if ($(nav.opt.id).hasClass('hover')) {
        nav.show();
    }
    $(nav.opt.body).on('mouseenter', nav.opt.item, function () {
        var _id = $(this).data('id');
        nav.sub.show(_id);
    });

    $(nav.opt.handle).on('mouseenter', function () {
        nav.show();
    });
    $(nav.opt.id).on('mouseleave', function () {
        nav.hide();
    });
};
