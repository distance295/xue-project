/**
 * Created by yangmengyuan on 15/10/24.
 */
$(function(){
    var
        $gdtbtn = $('.gold-detail-title li'),
        $gstbtn = $('.gold-store-title-container li'),
        $gsc = $('.gold-store-card'),
        $pabLabel = $('.present-address-box form label'),
        $presentAdd = $('.present-add'),
        $presentDec = $('.present-dec'),
        $presentNum = $('.present-num'),
        $pig = $('.present-intro-gold em'),
        $prensentPiece = $('.present-piece em');
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
    $pabLabel.on("click",function(e){
        var $target = $(e.target);
        if($target[0].nodeName != 'LABEL'){
            $target = $target.parents('label');
            var index = $target.index();
        }
        $pabLabel.removeClass('present-address-focus').eq(index).addClass('present-address-focus');
    });
    var
        gold = parseInt($pig.html()),
        piece = parseInt($prensentPiece.html());
    $presentAdd.on("click",function(){
        var num = parseInt($presentNum.html());
        if(num > piece - 1){
            $presentNum.html(piece);
            $pig.html(gold * piece);
        }
        else{
            $presentNum.html(num + 1);
            $pig.html(gold * (num + 1));
        }
    });
    $presentDec.on("click",function(){
        var num = parseInt($presentNum.html());
        if(num == 1)
        {
            $presentNum.html(num);
            $pig.html(gold);
        }
        else{
            $presentNum.html(num - 1);
            $pig.html(gold * (num - 1));
        }
    });
});