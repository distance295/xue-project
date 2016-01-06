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
    //$body.on("click",'.find-teacher-follow',function(){
    //    var followId = $(this).closest('.find-teacher-card').attr('id');
    //    //console.log(followId);
    //    $.ajax({
    //        url : '/teacher/follow',
    //        type : 'post',
    //        dataType : 'json',
    //        data : {
    //            followId : followId
    //        },
    //        success : function(msg){
    //            if(msg.sign == 2){
    //                window.location.href = '';
    //            }else if(msg.sign == 1){
    //                $(this).addClass("find-teacher-have-followed").html("已关注");
    //            }
    //        }
    //    })
    //});
    var $ftname = $('.find-teacher-name');
    $ftname.each(function(){
        var
            str = $(this).text(),
            str_char = /[a-zA-Z]/g,
            str_chin = /[\u4e00-\u9fa5]/g;

        var
            str_char_num = str.match(str_char),
            str_chin_num = str.match(str_chin);
        if(str_char_num){
            var char_maxwidth = 8;
            if(str_char_num.length>char_maxwidth){
                $(this).text(str.substring(0, char_maxwidth));
                $(this).html($(this).html() + '...');
            }
            //console.log(str_char_num.length)
        }else if(str_chin_num){
            var chin_maxwidth = 4;
            if(str_chin_num.length>chin_maxwidth){
                $(this).text(str.substring(0,chin_maxwidth));
                $(this).html($(this).html()+'...');
            }
        }
    });
    $('.find-teacher-course a').each(function(){
        var maxwidth=20;
        if($(this).text().length>maxwidth){
            $(this).text($(this).text().substring(0,maxwidth));
            $(this).html($(this).html()+'...');
        }
    });

});

