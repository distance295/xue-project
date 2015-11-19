/**
 * Created by yangmengyuan on 15/10/24.
 */
$(function(){
    var
    //tab切换
        $gdtbtn = $('.gold-detail-title li'),
        $gstbtn = $('.gold-store-title-container li'),
        $getbtn = $('.gold-exchange-title-container li'),
        $gerspan = $('.gold-exchange-rank span'),
    //鼠标移到目标卡片交互
        $gsp = $('.gold-store-present-card'),
        $gsc = $('.gold-store-card'),
        $gep = $('.gold-exchange-present-card'),
    //实物兑换模态框
        $body = $('body'),
        pabLabel = '.present-address-box form label',
        presentAdd = '.present-add',
        presentDec = '.present-dec',
        //presentNum = '.present-num',
        $dateStart = $('#dateStart'),
        $dateEnd = $('#dateEnd'),
        $cardCreateModal = $('.card-createModal'),
        $presentCreateModal = $('.present-createModal');

//tab切换
    $gdtbtn.on("click",function(e){
        var $target = $(e.target);
        var index = $target.index();
        $(this).addClass('active').siblings().removeClass('active gold-detail-title-on');
//        $gdtbtn.removeClass('gold-detail-title-on').eq(index).addClass('gold-detail-title-on');
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
    //鼠标移到目标卡片交互
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
    //实物兑换模态框
    $body.on("click",pabLabel, function(e){
        var
            $target = $(e.target),
            $pabLabel = $(pabLabel);
        if($target[0].nodeName != 'LABEL'){
            $target = $target.parents('label');
            var index = $target.index();
        }
        $pabLabel.removeClass('present-address-focus').eq(index).addClass('present-address-focus');
    });
    //    var
    //        //pig = '.present-intro-gold em',
    //        $pig = $('.present-intro-gold em'),
    //        $presentPiece = $('.present-piece em'),
    //        gold = parseInt($pig.html()),
    //        piece = parseInt($presentPiece.html());
    ////console.log($pig);
    //    $body.on("click",presentAdd,function(){
    //        console.log($pig.length);
    //        var $presentNum = $(presentNum);
    //        var num = parseInt($presentNum.html());
    //        if(num > piece - 1){
    //            $presentNum.html(piece);
    //            $pig.html(gold * piece);
    //        }
    //        else{
    //            $presentNum.html(num + 1);
    //            $pig.html(gold * (num + 1));
    //        }
    //    });
    //$body.on("click",presentDec,function(){
    //    var $presentNum = $(presentNum);
    //    var num = parseInt($presentNum.html());
    //    if(num == 1)
    //    {
    //        $presentNum.html(num);
    //        $pig.html(gold);
    //    }
    //    else{
    //        $presentNum.html(num - 1);
    //        $pig.html(gold * (num - 1));
    //    }
    //});
    $dateStart.calendar({
        controlId: "dateStartCalendar",
        controlClass:"calendar",
        speed: 200,
        complement: true,
        readonly: true,
        upperLimit: new Date(),
        lowerLimit: new Date("2010/01/01")
    });
    $dateEnd.calendar({
        controlId: "dateEndCalendar",
        controlClass:"calendar",
        speed: 200,
        complement: true,
        readonly: true,
        upperLimit: new Date(),
        lowerLimit: new Date("2010/01/01")
    });

    $presentCreateModal.on('click',function(){
        var that = $(this), data = that.data();
        var con = "<div class='present-card-tip'></div><div class='present-box'><img src='/widget/UserHome.gold/img/Modal-present.png' /><div class='present-intro'><span class='present-name'>清华大学扑克牌</span> <div class='present-intro-name'><span class='present-intro-title'>描<span>述 ：</span></span><span class='present-intro-content'>清华园，孺子牛.......想要更深入了解清华大学么，那就一起玩会扑克牌吧。让玩耍与认知达到统一，美观而便捷</span></div><div class='present-intro-name'><span class='present-intro-title'>数<span>量 ：</span></span><div class='present-dec'><p class='p1'></p></div><div class='present-num'>1</div><div class='present-add'><p class='p1'</p><p class='p2'></p></div><span class='present-piece'>仅剩 <em>"+ data.num +"</em> 张</span></div><div class='present-intro-name'><span class='present-intro-title'>兑换额 ：</span><span class='present-intro-gold'><em>"+ data.price +"</em>金币</span></div></div></div><div class='present-address-box'><span>请选择收货地址</span><form action='' method='get'><label class='present-address-focus'><input type='radio' name='address' checked/>测试河北省 石家庄市 网校测试不用审核通过 15101089366</label><label><input type='radio' name='address'/>使用新的地址</label></form></div><div class='present-exchange'>确认兑换</div>";

        createModal.show({
            id : 'presentModal',
            width : '740',
            title : "实物礼品兑换",
            cls : "presentModal aaa ccc",
            content : con
        });
        var
        //pig = '.present-intro-gold em',
            $pig = $('.present-intro-gold em'),
            $presentPiece = $('.present-piece em'),
            gold = parseInt($pig.html()),
            piece = parseInt($presentPiece.html()),
            $presentNum = $('.present-num');
        $body.on("click",presentAdd,function(){
            //console.log($pig.length);
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
        $body.on("click",presentDec,function(){
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
        var
            $pct = $('.present-card-tip'),
            $pe = $('.present-exchange');
        $pe.on('click',function(event){
            var div = $pct.html();
            if(div !== ''){
                event.preventDefault();
            }else{
                $pct.append('<div class="alert alert-danger fade in"><span>兑换失败,你的金币余额不足哦~</span></div>')
            }
        });
    });

    $cardCreateModal.on('click',function(){
        var that = $(this), data = that.data();
        var con = "<div class='red-card-tip'></div><div class='red-card-box'><img src='/widget/UserHome.gold/img/Modal-red-card.png' /><div class='red-card-intro'><span class='red-card-name'>红名卡</span><div class='red-card-intro-name'><span class='red-card-intro-title'>数<span>量 ：</span></span><div class='red-card-num'>1</div><span>仅剩 <em>19</em> 张</span></div><div class='red-card-intro-name'><span class='red-card-intro-title'>兑换额 ：</span><span><em>260</em>金币</span></div><div class='red-card-intro-name'><span class='red-card-intro-title'>等<span>级 ：</span></span><span>12</span></div><div class='red-card-intro-name'><span class='red-card-intro-title'>有效期 ：</span><span>7*12小时</span></div><div class='red-card-exchange'>确认兑换</div></div></div>"

        createModal.show({
            id : 'cardModal',
            width : '740',
            title : '魔法卡兑换',
            cls : 'cardModal bbb',
            content : con
        });

        var
            $rce = $('.red-card-exchange'),
            $rct = $('.red-card-tip');
        $rce.on('click',function(event){
            var div = $rct.html();
            if(div !== ''){
                event.preventDefault();
            }else{
                $rct.append('<div class="alert alert-danger fade in"><span>兑换失败,你的金币余额不足哦~</span></div>')
            }
        });
    });

    //createModal.init(
    //    {
    //        title : "魔法卡兑换",
    //        cls : "cardModal",
    //        content : "<div class='red-card-box'><img src='/widget/UserHome.gold/img/Modal-red-card.png' /><div class='red-card-intro'><span class='red-card-name'>红名卡</span><div class='red-card-intro-name'><span class='red-card-intro-title'>数<span>量 ：</span></span><div class='red-card-num'>1</div><span>仅剩 <em>19</em> 张</span></div><div class='red-card-intro-name'><span class='red-card-intro-title'>兑换额 ：</span><span><em>260</em>金币</span></div><div class='red-card-intro-name'><span class='red-card-intro-title'>等<span>级 ：</span></span><span>12</span></div><div class='red-card-intro-name'><span class='red-card-intro-title'>有效期 ：</span><span>7*12小时</span></div><div class='red-card-exchange'>确认兑换</div></div></div>"
    //    },
    //    {
    //        title : "实物礼品兑换",
    //        cls : "presentModal",
    //        content : "<div class='present-box'><img src='/widget/UserHome.gold/img/Modal-present.png' /><div class='present-intro'><span class='present-name'>清华大学扑克牌</span> <div class='present-intro-name'><span class='present-intro-title'>描<span>述 ：</span></span><span class='present-intro-content'>清华园，孺子牛.......想要更深入了解清华大学么，那就一起玩会扑克牌吧。让玩耍与认知达到统一，美观而便捷</span></div><div class='present-intro-name'><span class='present-intro-title'>数<span>量 ：</span></span><div class='present-dec'><p class='p1'></p></div><div class='present-num'>1</div><div class='present-add'><p class='p1'</p><p class='p2'></p></div><span class='present-piece'>仅剩 <em>19</em> 张</span></div><div class='present-intro-name'><span class='present-intro-title'>兑换额 ：</span><span class='present-intro-gold'><em>6800</em>金币</span></div></div></div><div class='present-address-box'><span>请选择收货地址</span><form action='' method='get'><label class='present-address-focus'><input type='radio' name='address' checked/>测试河北省 石家庄市 网校测试不用审核通过 15101089366</label><label><input type='radio' name='address'/>使用新的地址</label></form></div><div class='present-exchange'>确认兑换</div>"
    //    }
    //
    //);
});