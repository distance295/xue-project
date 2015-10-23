/**
 * Created by yangmengyuan on 15/10/22.
 */
$(function(){
    $(".live-scroll-btn").on({
        mouseenter:function(){
            $(this).css({'background-color':'#3bafda'});
        },
        mouseleave:function(){
            $(this).css({'background-color':'#fff'});
        },
        click:function(){
            $(this).find(".live-scroll-box-container")
        }
    });
});