/**
 * Created by yangmengyuan on 15/10/20.
 */
$(function(){
    var
        $hcontainer = $(".find-teacher-hover-container"),
        $ftlist = $(".find-teacher-list"),
        $ftfollow = $(".find-teacher-follow");
    $ftlist.each(function(){
        $hcontainer.on({
                mouseenter:function(){
                    $(this).find(".find-teacher-hover").stop().animate({"top":0},300);
                },
                mouseleave:function(){
                    $(this).find(".find-teacher-hover").stop().animate({"top":200},300);

                    
                }}
        );
    });
    $ftfollow.on("click",function(){
        $(this).addClass("find-teacher-have-followed").html("已关注");
    });
});

