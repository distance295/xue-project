/**
 * Created by user on 2015/10/21.
 */
/* 展示学生勋章 */
function showStudPrize(dom) {
    
    var leftDis = dom.offset().left;
    var heightDis = dom.offset().top + dom.height();
    var _dom = dom.data('target') || dom.attr('data-target');
    //取出勋章页卡的结构
    var tpl = $('#' + _dom).html();
    //定义向上箭头的结构
    var arrow = '<div class="dialog_arrow_c student-medal-dialog-arrow arrow_tl ' + _dom + '"></div>';
    var box = '<div id="stuBox_' + _dom + '" class="student-medal-dialog">' + tpl + '</div>';
    
    $('body').find('.student-medal-dialog').remove();
    $('body').find('.student-medal-dialog-arrow').remove();
    $('body').append(arrow);
    $('body').append(box);
    //目前所测试的距离可能在不同的浏览器中会有偏差；设置页卡的定位
    $('.' + _dom).css({
        'top': heightDis-4,
        'left': leftDis + 5,
        'z-index':11
    })
    $('#stuBox_' + _dom).css({
        'position': 'absolute',
        'top': heightDis-5,
        'left': leftDis - 160,
        'z-index':10
    })
}

/* 鼠标移入，勋章展现 */
$('ul.user-medal.list-inline li img[data-target*="hidediv_"]').off('mouseover').on('mouseover', function () {
    var that = this;
    var dom = $(that);
    //通过判断箭头（唯一标识）来区别页面是否有勋章页卡，如果有就不创建
    if(!$('div.dialog_arrow').length){
        showStudPrize(dom);    
    }
    
    return false;
});

/* 鼠标移出，页卡消失 */
$('ul.user-medal.list-inline li img[data-target*="hidediv_"]').off('mouseout').on(' mouseout', function (e) {
    var tar = $(e.relatedTarget),
        that = this,
        _dom = $(that).data('target'),
        boxId = 'stuBox_' + _dom;
    //删除页卡的方法
    function removeDom(boxId) {
        $('div.dialog_arrow_c.arrow_tl').remove();
        $('#' + boxId).remove();
    }
    //如果
    if(tar.attr('id') !== boxId && !tar.hasClass(_dom)){
        removeDom(boxId);    
    }else{
        $('#'+boxId).on('mouseleave', function(e){
            //如果移动到勋章上面，则页卡不消失
            var tar = $(e.relatedTarget);
            if(!tar.hasClass(_dom)){
                removeDom(boxId);
            }
        })
    }
    
    return false;
});