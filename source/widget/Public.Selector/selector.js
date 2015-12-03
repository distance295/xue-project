/**
 * Created by user on 2015/10/21.
 */
    //上半部年级以及知识点选择的处理
var select = select || {};

select.opt = {
    pointCur  : '.choice-point-cur li',
    point     : '.choice-point-cur',
    pointInput: '.choice-point-cur-input',
    grade     : '.choice-grade-cur li',
    pointShow : '.chocie-point-show',
    subject   : '.choice-subject-cur li',
    selector  : '.selector',
    choiceHide: '.choiceHide'
}

/**
* [chooseSpan description]
* @param  {string} all       [所有的标签]
* @param  {string} that      [点击选中的标签]
* @param  {[type]} className [description]
* @return {[type]} none      [description]
*/
select.chooseSpan = function(all,that,className){
    $(all).removeClass(className);
    $(that).addClass(className);
}



/* 知识点点击选择交互 */
$(select.opt.pointCur).on('click',function(){
	var that = this;
    select.chooseSpan(select.opt.pointCur,that,'active');
})

/* 年级点击选择交互 */
$(select.opt.grade).on('click',function(){
    var that = this;
    select.chooseSpan(select.opt.grade,that,'active');
})
/* 知识点展示“更多”交互 */
$(select.opt.pointShow).on('click',function(){
    var that = this;
    if($(that).hasClass('show-choice')){
        $(that).children('a').html('更多知识点');
        $(that).children('i').removeClass('fa-angle-up fa-chevron-up').addClass('fa-angle-down fa-chevron-down');
        if($(select.opt.point).length){
            $(select.opt.point).css({'height':'3.0rem','overflow':'hidden'});    
        }else{
            $(select.opt.pointInput).css({
                'height':'2.9rem',
                'overflow':'hidden'
            }); 
        }
        
        $(that).removeClass('show-choice');
    }else{
        $(that).children('a').html('收起知识点');
        $(that).children('i').removeClass('fa-angle-down fa-chevron-down').addClass('fa-angle-up fa-chevron-up');
        if($(select.opt.point).length){
            $(select.opt.point).css({'height':'7.5rem','overflow':'auto'});    
        }else{
            $(select.opt.pointInput).css({
                'height':'7.4rem',
                'overflow':'auto'
            })
        }
        
        $(that).addClass('show-choice');
    }
})

/* 科目选择交互 */
$(select.opt.subject).on('click',function(){
    var that = this;
    select.chooseSpan(select.opt.subject,that,'active');
})


