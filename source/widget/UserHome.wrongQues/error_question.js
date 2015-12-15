/**
 * Created by user on 2015/10/21.
 */

var select = select || {};
select.opt = {
    pointCur   : '.choice-point-cur li',
    point      : '.choice-point-cur',
    grade      : '.choice-grade-cur li',
    pointShow  : '.chocie-point-show',
    subject    : '.choice-subject-cur li',
    selector   : '.selector',
    choiceHide : '.choiceHide',
    answerShow : '.que-body-show-text',
    imgAnswer  : '.stuAns',
};

/*展现 知识点+年级+学科 选择框*/
//$(select.opt.selector).on('click', function () {
//    var that = this;
//        /* 选择框已经打开处理分支 */
//    if ($(that).hasClass('showSelect')) {
//    	$(that).children('a').html('显示筛选');
//        $(that).children('i').removeClass('fa-angle-up fa-chevron-up').addClass('fa-angle-down fa-chevron-down');
//        $(that).removeClass('showSelect');
//        $(select.opt.choiceHide).slideUp();
//    } else {
//        /* 选择框未打开处理分支 */
//    	$(that).children('a').html('收起筛选');
//        $(that).children('i').removeClass('fa-angle-down fa-chevron-down').addClass('fa-angle-up fa-chevron-up');
//        $(that).addClass('showSelect');
//        $(select.opt.choiceHide).slideDown();
//    }
//});


/* 错题本答案交互 */
//$(select.opt.answerShow).on('click', function () {
//    var that   = this,
//        answer = $(that).parent('.que-body').next('.que-answer');
//        /* 答案未展开处理分支 */
//    if ($(that).hasClass('showAnswer')) {
//        $(that).removeClass('showAnswer');
//        $(that).html('展开答案');
//        $(that).prev('i').removeClass('fa-angle-up fa-chevron-up').addClass('fa-angle-down fa-chevron-down');
//        answer.slideUp();
//    } else {
//        /* 答案已展开处理分支 */
//        $(that).addClass('showAnswer');
//        answer.slideDown();
//        $(that).html('收起答案');
//        $(that).prev('i').removeClass('fa-angle-down fa-chevron-down').addClass('fa-angle-up fa-chevron-up');
//    }
//});

/* 错题本图片答案交互 */
$(select.opt.imgAnswer).on('click', function () {
    var that= $(this),
        /* 图片路径 */
        urlSite = that.data('url')||that.attr('data-url'),
        imgUrl  = '/static/img/' + urlSite,
        con     = '<img src="' + imgUrl + '" style="width:754px;"/>';
        createModal.show({
            id      : "wrongQuestionFlow",
            width   : '784',
            title   : '错题本',
            cls     : 'wrongQueShow',
            content : con
        })
        $('#wrongQuestionFlow').modal('show');
        
})


/* 录播课交互 */
$('.broadLb').on('click', function () {
    window.location.href = '';//录播课页面地址
});

$('.broadZb').on('click', function () {
    window.location.href = '';//直播课页面地址
});

