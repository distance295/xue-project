/**
 * Created by user on 2015/10/21.
 */
    //上半部年级以及知识点选择的处理
var select = {
    /**
     * [chooseSpan description]
     * @param  {string} all       [所有的标签]
     * @param  {string} that      [点击选中的标签]
     * @param  {[type]} className [description]
     * @return {[type]} none      [description]
     */
	chooseSpan : function(all,that,className){
        $(all).removeClass(className);
        $(that).addClass(className);
    }
};

/* 知识点点击选择交互 */
$('.choice-point-cur li').on('click',function(){
	var that = this;
    select.chooseSpan('.choice-point-cur li',that,'active');
})

/* 年级点击选择交互 */
$('.choice-grade-cur li').on('click',function(){
    var that = this;
    select.chooseSpan('.choice-grade-cur li',that,'active');
})
/* 知识点展示“更多”交互 */
$('.chocie-point-show').on('click',function(){
    var that = this;
    if($(that).hasClass('show-choice')){
        $(that).children('a').html('更多');
        $(that).children('i').removeClass('fa-angle-up fa-chevron-up').addClass('fa-angle-down fa-chevron-down');
        $('.choice-point-cur').css('height','2.9rem');
        $(that).removeClass('show-choice');
    }else{
        $(that).children('a').html('收起');
        $(that).children('i').removeClass('fa-angle-down fa-chevron-down').addClass('fa-angle-up fa-chevron-up');
        $('.choice-point-cur').css('height','7.5rem');
        $(that).addClass('show-choice');
    }
})

/* 科目选择交互 */
$('.choice-subject-cur li').on('click',function(){
    var that = this;
    select.chooseSpan('.choice-subject-cur li',that,'active');
})

/* 录播课交互 */
$('.broadLb').on('click',function(){
    window.location.href='';//录播课页面地址
})

$('.broadZb').on('click',function(){
    window.location.href='';//直播课页面地址
})

