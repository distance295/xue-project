/**
 * Created by user on 2015/10/21.
 */

var select = select || {};
select.opt = {
    pointCur  : '.choice-point-cur li',
    point     : '.choice-point-cur',
    grade     : '.choice-grade-cur li',
    pointShow : '.chocie-point-show',
    subject   : '.choice-subject-cur li',
    selector  : '.selector',
    choiceHide: '.choiceHide'
}
/*展现选择框*/
$(select.opt.selector).on('click',function(){
    var that = this;
    if($(that).hasClass('showSelect')){
    	$(that).children('a').html('显示筛选');
        $(that).children('i').removeClass('fa-angle-up fa-chevron-up').addClass('fa-angle-down fa-chevron-down');
        $(that).removeClass('showSelect');
        $(select.opt.choiceHide).addClass('hide');
    }else{
    	$(that).children('a').html('收起筛选');
        $(that).children('i').removeClass('fa-angle-down fa-chevron-down').addClass('fa-angle-up fa-chevron-up');
        $(that).addClass('showSelect');
        $(select.opt.choiceHide).removeClass('hide');
    }
})

/* 录播课交互 */
$('.broadLb').on('click',function(){
    window.location.href='';//录播课页面地址
})

$('.broadZb').on('click',function(){
    window.location.href='';//直播课页面地址
})

