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
        $presentPiece = $('.present-piece em'),
        $getbtn = $('.gold-exchange-title-container li'),
        $gerspan = $('.gold-exchange-rank span'),
        $gsp = $('.gold-store-present-card'),
        $gep = $('.gold-exchange-present-card');
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
    $getbtn.on("click",function(e){
        var $target = $(e.target);
        var index = $target.index();
        $getbtn.removeClass('gold-exchange-title-on').eq(index).addClass('gold-exchange-title-on');
        var $targetBox = $($target.attr('exchange-target'));
        $('.gold-exchange-block-change').fadeOut(0);
        $targetBox.fadeIn(300);
    });
    $gerspan.on('click',function(e){
        var $target = $(e.target);
        var index = $(this).closest('.gold-exchange-rank').find('span').index(this);
        $gerspan.removeClass('gold-exchange-use-focus').eq(index).addClass('gold-exchange-use-focus');
        var $targetBox = $($target.attr('use-target'));
        $('.gold-exchange-use-block-change').fadeOut(0);
        $targetBox.fadeIn(300);
    });
    $gsp.on({
        mouseenter:function(){
            $(this)
                .css({'box-shadow':'0 1px 5px 0px #666'},300)
                .animate({'margin-top':5},300);
        },
        mouseleave:function(){
            $(this)
                .css({'box-shadow':'none'},300)
                .animate({'margin-top':10},300)
        }
    });
    $gsc.on({
        mouseenter:function(){
            $(this)
                .css({'box-shadow':'0 1px 5px 0px #666'},300)
                .animate({'margin-top':5},300);
        },
        mouseleave:function(){
            $(this)
                .css({'box-shadow':'none'},300)
                .animate({'margin-top':10},300)
        }
    });
    $gep.on({
        mouseenter:function(){
            $(this)
                .css({'box-shadow':'0 1px 5px 0px #666'},300)
                .animate({'margin-top':5},300);
        },
        mouseleave:function(){
            $(this)
                .css({'box-shadow':'none'},300)
                .animate({'margin-top':10},300)
        }
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
        piece = parseInt($presentPiece.html());
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