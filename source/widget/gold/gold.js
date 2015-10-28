/**
 * Created by yangmengyuan on 15/10/24.
 */
$(function(){
    var
        $gdtbtn = $('.gold-detail-title li'),
        $gstbtn = $('.gold-store-title-container li'),
        $gsc = $('.gold-store-card'),
        $pab = $('.present-address-box form label');
    $gdtbtn.on("click",function(e){
        var $target = $(e.target);
        var index = $target.index();
        $gdtbtn.removeClass('gold-detail-title-on').eq(index).addClass('gold-detail-title-on');
        var $targetBox = $($target.attr('data-target'));
        $('.gold-detail-block-change').fadeOut(0);
        $targetBox.fadeIn(300);
    });
    $gstbtn.on("click",function(e){
        var $target = $(e.target);
        var index = $target.index();
        $gstbtn.removeClass('gold-store-title-on').eq(index).addClass('gold-store-title-on');
        var $targetBox = $($target.attr('store-target'));
        $('.gold-store-block-change').fadeOut(0);
        $targetBox.fadeIn(300);
    });
    $gsc.on("hover",function(e){
        var $target = $(e.target);
        $target.css({'box-shadow':'0 0 3px #000;'});
    });
    $pab.on("click",function(e){
        var $target = $(e.target);
        var index = $target.index();
        $pab.removeClass('present-address-focus').eq(index).addClass('present-address-focus');
    })
});