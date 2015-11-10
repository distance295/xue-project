/**
 * Created by user on 2015/10/21.
 */
var select = {
	chooseSpan : function(all,that,className){
        $(all).removeClass(className);
        $(that).addClass(className);
    }
};


$('.choice-point-cur span').on('click',function(){
	var that = this;
    select.chooseSpan('.choice-point-cur span',that,'select-point');
})

$('.choice-grade-cur span').on('click',function(){
    var that = this;
    select.chooseSpan('.choice-grade-cur span',that,'select-grade');
})

$('.chocie-point-show').on('click',function(){
    var that = this;
    if($(that).hasClass('show-choice')){
        $(that).children('span').html('更多');
        $(that).children('img').attr('src','img/arrow_down.png');
        $('.choice-point-cur').css('height','3rem');
        $(that).removeClass('show-choice');
    }else{
        $(that).children('span').html('收起');
        $(that).children('img').attr('src','img/arrow_up.png');
        $('.choice-point-cur').css('height','12rem');
        $(that).addClass('show-choice');
    }
})

$('.choice-subject-cur span').on('click',function(){
    var that = this;
    select.chooseSpan('.choice-subject-cur span',that,'select-subject');
})
