//切换
function table_qiehuan(d){
    var that = $(d),
    box = $('.contentbind').children();
    that.addClass("current").siblings().removeClass("current");  
    var index =  that.index(); 
    box.eq(index).show().siblings().hide();
}

$(function(){
    $('#pay_tab li').click(function(){
     table_qiehuan(this);
 });
});