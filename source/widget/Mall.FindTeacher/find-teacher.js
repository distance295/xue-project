/**
 * Created by yangmengyuan on 15/10/20.
 */
$(function(){
    var
        $body = $('body'),
        $ftlist = $(".find-teacher-list");
    $ftlist.each(function(){
        $body.on({
                mouseenter:function(){
                    $(this).find(".find-teacher-hover").stop().animate({"top":0},300);
                },
                mouseleave:function(){
                    $(this).find(".find-teacher-hover").stop().animate({"top":200},300);

                }},'.find-teacher-hover-container'
        );
    });
    $body.on("click",'.find-teacher-follow',function(){
        var followId = $(this).closest('.find-teacher-card').attr('id');
        //console.log(followId);
        $.ajax({
            url : '/teacher/follow',
            type : 'post',
            dataType : 'json',
            data : {
                followId : followId
            },
            success : function(msg){
                if(msg.sign == 2){
                    window.location.href = '';
                }else if(msg.sign == 1){
                    $(this).addClass("find-teacher-have-followed").html("已关注");
                }
            }
        })
    });
});

