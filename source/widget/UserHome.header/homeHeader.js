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
    var arrow = '<div class="dialog_arrow arrow_tl ' + _dom + '"></div>';
    var box = '<div id="stuBox_' + _dom + '">' + tpl + '</div>';
    $('body').append(arrow);
    $('body').append(box);
    //目前所测试的距离可能在不同的浏览器中会有偏差；设置页卡的定位
    $('.' + _dom).css({
        'top': heightDis-5,
        'left': leftDis + 5
    })
    $('#stuBox_' + _dom).css({
        'position': 'absolute',
        'top': heightDis-5,
        'left': leftDis - 160
    })
}

/* 鼠标移入，勋章展现 */
$('ul.user-medal.list-inline li img[data-target*="hidediv_"').on('mouseenter', function () {
    var that = this;
    var dom = $(that);
    showStudPrize(dom);
    return false;
});

/* 鼠标移出，页卡消失 */
$('ul.user-medal.list-inline li').on('mouseleave', function (e) {
    var tar = $(e.relatedTarget),
        that = this,
        _dom = $(that).find('img').data('target'),
        boxId = 'stuBox_' + _dom;

    function removeDom(boxId) {
        $('div.dialog_arrow.arrow_tl').remove();
        $('#' + boxId).remove();
    }
    if(tar.attr('id') !== boxId && !tar.hasClass(_dom)){
        removeDom(boxId);    
    }else{
        $('#'+boxId).on('mouseleave', function(e){
            //确定在展现的是哪一个页卡
            var tar = $(e.relatedTarget);
            if(!tar.hasClass(_dom)){
                removeDom(boxId);
            }
                    
        })
    }
    
    return false;
});