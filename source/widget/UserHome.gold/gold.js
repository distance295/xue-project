/**
 * Created by yangmengyuan on 15/10/24.
 */

$(function(){
    var $body = $('body');
    var addressInput = '#realname, #add_province, #add_city,#add_country, #address, #zipcode, #phone';
//提交生成收货地址列表
    function saveNewAddress(inputs){
        var input = inputs || $(addressInput);
        var data = { id : 0 };
        data.id = $('#add_id').val();

        var id;
        inputs.each(function(){
            id = this.id;
            id = id.replace('add_', '');
            data[id] = $(this).val();
        });

        data['province_text'] = $('#add_province option:checked').text();
        data['city_text'] = $('#add_city option:checked').text();
        data['country_text'] = $('#add_country option:checked').text();

        var _tpl =
            '<label class="present-address-focus"><input type="radio" name="addId"  value="$id$" id="addid_$id$" checked/>$realname$ $province_text$ $city_text$ $country_text$ $address$ $phone$</label>'

        var o = {
            id : data.id,
            realname : data.realname,
            province_id : data.province,
            city_id : data.city,
            country_id : data.country,
            address : data.address,
            zipcode : data.zipcode,
            phone : data.phone
        };
        $.ajax('/GoldShop/saveStuAdds/',{
            type: 'POST',
            dataType:'json',
            data : o,
            success:function(result){
                console.log(result);
                console.log(result.sign);
                if(!result.sign){
                    return;
                }
                if(result.sign == 0){
                    alert(result.msg);
                }
                var _id = result.addId;
                var tp = _tpl;
                tp = tp.replace(/\$id\$/g, _id);
                tp = tp.replace(/\$phone\$/g, data.phone);
                tp = tp.replace(/\$zipcode\$/g, data.zipcode);
                tp = tp.replace(/\$address\$/g, data.address);
                tp = tp.replace(/\$country\$/g, data.country);
                tp = tp.replace(/\$city\$/g, data.city);
                tp = tp.replace(/\$province\$/g, data.province);
                tp = tp.replace(/\$realname\$/g, data.realname);
                tp = tp.replace(/\$province_text\$/g, data.province_text);
                tp = tp.replace(/\$city_text\$/g, data.city_text);
                tp = tp.replace(/\$country_text\$/g, data.country_text);

                if(result.type === 1){
                    $(tp).prependTo('.gold_new_address');
                    $(".present-address-new").removeClass('present-address-focus');
                    $(addressInput).val('');
                }else if(result.type === 2){
                    $('#addid_'+data.id).parent().html(tp);
                }
                $('.info_from').hide();
                $('.present-exchange').show();
            }
        });
    }
    // 保存收货地址
    $('body').on('click','#address_submit_btn',function() {
        var inputs = $(addressInput),
            errorbox = $('.error_tips_address');

        var ids = {
            realname: '收货人姓名',
            province: '省份',
            city: '城市',
            country: '地区',
            address: '详细地址',
            zipcode: '邮政编码',
            phone: '手机',
            add_province: '省份',
            add_city: '城市',
            add_country: '地区'
        };
        var _reg = {
            phone: (/^(13|15|18)[0-9]{9}$/.test($('#phone').val()) ? true : false),
            zipcode: (/^[0-9][0-9]{5}$/.test($('#zipcode').val()) ? true : false)
        };
        //邮编
        var id, error = [],
            error_text = '',
            tpl = '$input$ 不能为空',
            error_reg = [],
            reg_text = '';
        inputs.each(function() {
            id = this.id;
            if ($(this).val() === '') {
                error.push(ids[id]);
                $(this).addClass('error');
            } else {
                // 判断手机号与邮编格式
                if (id == 'phone' || id == 'zipcode') {
                    if (!_reg[id]) {
                        error_reg.push(ids[id]);
                        reg_text += ids[id];
                        $(this).addClass('error');
                    } else {
                        $(this).removeClass('error');
                    }
                } else {
                    $(this).removeClass('error');
                }

            }
        });
        var temp_text = '';
        if (error.length > 0) {
            error_text = error.toString();
            temp_text = tpl.replace('$input$', error_text);
        }
        // 判断手机号与邮编格式
        if (error_reg.length > 0) {
            reg_text = error_reg.toString() + '格式不正确';
            if (error.length > 0) {
                temp_text += ', ';
            }
            temp_text += reg_text;
        }
        if (temp_text != '') {
            errorbox.text(temp_text);
            return;
        }
        errorbox.empty();
        saveNewAddress(inputs);

    });
    function goldTabAJax(e, p) {//封装ajax方法
        var _url = $(e).data('url');
        //console.log($(e));
        $.ajax({
            url: _url,
            type: 'post',
            dataType: 'html',
            data: p,
            success: function (result) {
                if (result.substr(0, 4) == 'http' || result.substr(0, 1) == '/') {
                    window.location.href = result;
                    return;
                }
                $('.gold-detail-block-change').html(result);
            }
        });
    }
    var $gdtbtn = $('.gold-detail-title li');
    $gdtbtn.on("click", function (e) {
        var that = $(this);
        that.addClass('active').siblings().removeClass('active gold-detail-title-on');
        var arr = {};
        goldTabAJax(that, arr);
    });
    $body.on("click", ".gold-store-title-container li", function (e) {
        var that = $(this);
        var arr = {};
        goldTabAJax(that, arr);
    });
    $body.on("click", ".gold-exchange-title-container li", function (e) {
        var that = $(this);
        var arr = {};
        goldTabAJax(that, arr);
    });
    $body.on('click', ".gold-exchange-rank span", function (e) {
        var that = $(this);
        var is_used = $(this).data('id');
        var arr = {};
        arr['is_used'] = is_used;
        goldTabAJax(that, arr);
    });
    $body.on('click', ".gold-store-present-rank-by a", function (e) {
        var that = $(this);
        var sort_type = $(this).data('type');
        var arr = {};
        var gold_sort = $('#dataCla').val();
        arr['sort_type'] = sort_type;
        arr['gold_sort'] = gold_sort;
        goldTabAJax(that, arr);
    });

    $body.on('click', ".gold-exchange-use span", function (e) {
        var exchangeid = $(this).closest('.gold-exchange-show').attr('id')
        if (confirm('您确定使用这张卡片吗？')) {
            $.ajax({
                url : '/GoldShop/useMagicCard',
                type : 'post',
                dataType : 'json',
                data : {
                    id : exchangeid
                },
                success: function (result) {
                    if (result.sign == 2) {
                        window.location.href = result.msg;
                        return;
                    }
                    alert(result.msg);
                    if (result.sign == 1) {
                        var url = '/GoldShop/ajaxGetMagicExLogs/',
                            param = 'is_used=1';
                        if (url) {
                            $.ajax({
                                url: url,
                                data: param,
                                type: "POST",
                                dataType: 'html',
                                success: function (result) {
                                    $('.gold-detail-block-change').html(result);
                                }
                            });
                        }
                    }
                }
            })
        }
    });

//鼠标移到目标卡片交互
    $body.on({
        mouseenter:function(){
            $(this)
                .stop()
                .css({'box-shadow':'0 1px 5px 0px #666'},300);
        },
        mouseleave:function(){
            $(this)
                .stop()
                .css({'box-shadow':'none'},300);
        }
    },'.gold-store-present-card');

    $body.on({
        mouseenter:function(){
            $(this)
                .stop()
                .css({'box-shadow':'0 1px 5px 0px #666'},300);
        },
        mouseleave:function(){
            $(this)
                .stop()
                .css({'box-shadow':'none'},300);
        }
    },'.gold-store-card');
    $body.on({
        mouseenter:function(){
            $(this)
                .stop()
                .css({'box-shadow':'0 1px 5px 0px #666'},300);
        },
        mouseleave:function(){
            $(this)
                .stop()
                .css({'box-shadow':'none'},300);
        }
    },'.gold-exchange-present-card');

    var
        pabLabel = '.present-address-box form label',
        presentAdd = '.present-add',
        presentDec = '.present-dec',
        redCardAdd = '.red-card-add',
        redCardDec = '.red-card-dec';

    //魔法卡兑换模态框
    $body.on('click', '.gold-store-card-exchange', function () {
        var cardid = $(this).closest('.gold-store-card').attr('id');
        $.ajax({
            url: '/GoldShop/magicDetail',
            //url: '/data/gold/gold-card-modal.html',
            type: 'post',
            //type: 'get',
            dataType: 'html',
            data: {
                id: cardid
            },
            success: function (result) {
                if (result.substr(0, 4) == 'http' || result.substr(0, 1) == '/') {
                    window.location.href = result;
                    return;
                }
                goldCardModal.showModal(result);
            }
        })
    });

    var goldCardModal = goldCardModal || {};

    goldCardModal.showModal = function(con){
        var that = $(this), data = that.data();
        var con = con;

        createModal.show({
            id : 'cardModal',
            width : '740',
            title : '魔法卡兑换',
            cls : 'cardModal bbb',
            content : con
        });

        $('#cardModal').modal({backdrop: 'static', keyboard: false});

        var
            $rcig = $('.red-card-intro-gold em'),
            $redCardPiece = $('.red-card-piece em'),
            gold = parseInt($rcig.html()),
            piece = parseInt($redCardPiece.html()),
            $redCardNum = $('.red-card-num'),
            exMax = $('#exchange_max').val();
            //exMax = 19;
        $body.on("click",redCardAdd,function(){
            //console.log($pig.length);
            var num = parseInt($redCardNum.html());
            if (num == 0 || num < 0) {
                $redCardNum.html(0);
                $rcig.html(gold);
            } else if (num >= (exMax-1)) {
                $redCardNum.html(exMax);
                $rcig.html(gold * exMax);
                $(redCardAdd).css({'background-color': '#b5b5b5'});
                if (exMax > 1 || num > 1) {
                    $(redCardDec).css({'background-color': '#3398cc'});
                }
            } else if (num >= piece - 1) {
                $redCardNum.html(piece);
                $rcig.html(gold * piece);
                $(redCardAdd).css({'background-color': '#b5b5b5'});
                $(redCardDec).css({'background-color':'#3398cc'});
            }
            else {
                $redCardNum.html(num + 1);
                $rcig.html(gold * (num + 1));
                $(redCardAdd).css({'background-color': '#3398cc'});
                if (exMax > 1 || num > 1) {
                    $(redCardDec).css({'background-color': '#3398cc'});
                }
            }
        });
        $body.on("click",redCardDec,function(){
            var num = parseInt($redCardNum.html());
            if(num == 1)
            {
                $redCardNum.html(num);
                $rcig.html(gold);
                $(redCardDec).css({'background-color':'#b5b5b5'});
                if(!piece){
                    $(redCardAdd).css({'background-color':'#3398cc'});
                }else{
                    $(redCardAdd).css({'background-color':'#3398cc'});
                    if(piece == 1){
                        $(redCardAdd).css({'background-color':'#b5b5b5'});
                    }
                }
            }else if(num == 2){
                $redCardNum.html(num - 1);
                $rcig.html(gold * (num - 1));
                $(redCardDec).css({'background-color':'#b5b5b5'});
                $(redCardAdd).css({'background-color':'#3398cc'});
            }
            else{
                $redCardNum.html(num - 1);
                $rcig.html(gold * (num - 1));
                $(redCardDec).css({'background-color':'#3398cc'});
                $(redCardAdd).css({'background-color':'#3398cc'});
            }
        });
    };

//魔法卡兑换
    $body.on('click','.red-card-exchange',function(){
        var redCardId = $(this).closest('.red-card-box').attr('id'),
            $rct = $('.red-card-tip'),
            div = $rct.html(),
            redCardNum = $('.red-card-num'),
            num = parseInt(redCardNum.html());
        $.ajax({
            url : '/GoldShop/ajaxExchange',
            type : 'post',
            dataType : 'json',
            data : {
                id : redCardId,
                award_type:2,
                num:num
            },
            success : function(msg,event){
                if(msg.sign == 2){
                    window.location.href = msg.msg;
                    return;
                }
                if(msg.sign == 0){
                    if(div !== ''){
                        event.preventDefault();
                    }else{
                        $rct.append('<div class="alert alert-danger fade in"><span class="glyphicon glyphicon-exclamation-sign gold-tip-alert"></span><span>'+msg.msg+'</span></div>')
                    }
                }
                if(msg.sign == 1){
                    $('#cardModal').modal('hide');
                    var _url = msg.msg;
                    $.ajax({
                        url : _url,
                        type : 'post',
                        dataType : 'html',
                        success : function(result){
                            $('.gold-detail-block-change').html(result);
                            var exList = $('#ex-list');
                            var pList = $('#p-list');
                            exList.addClass('active');
                            pList.removeClass('active');
                        }
                    });
                }
            }
        });
    });


//实物兑换模态框

    $body.on('click', '.gold-store-present-exchange', function () {
        var presentid = $(this).closest('.gold-store-present-card').attr('id');
        $.ajax({
            url: '/GoldShop/realAwardDetail',
            //url:'/data/gold/gold-present-modal.html',
            type: 'post',
            //type:'get',
            dataType: 'html',
            data: {
                id: presentid
            },
            success: function (result) {
                if (result.substr(0, 4) == 'http' || result.substr(0, 1) == '/') {
                    window.location.href = result;
                    return;
                }
                goldPresentModal.showModal(result);
            }
        })
    });

    var goldPresentModal = goldPresentModal || {};

    goldPresentModal.showModal = function(con){
        var that = $(this), data = that.data();
        var con = con;
        //console.log(data);
        createModal.show({
            id : 'presentModal',
            width : '740',
            title : "实物礼品兑换",
            cls : "presentModal aaa ccc",
            content : con
        });

        $('#presentModal').modal({backdrop: 'static', keyboard: false});

        $body.on("click",pabLabel, function(e){
            var
                $target = $(e.target),
                $pabLabel = $(pabLabel),
                $pan = $('.present-address-new'),
                $df = $('#details_form'),
                $pe = $('.present-exchange');
            if($target[0].nodeName != 'LABEL'){
                $target = $target.parents('label');
                var index = $target.index();
            }
            $pabLabel.removeClass('present-address-focus').eq(index).addClass('present-address-focus');
            if($pan.hasClass('present-address-focus')){
                $df.show();
                $pe.hide()
            }else {
                $df.hide();
                $pe.show();
            }
        });

        var
        //pig = '.present-intro-gold em',
            $pig = $('.present-intro-gold em'),
            $presentPiece = $('.present-piece em'),
            gold = parseInt($pig.html()),
            piece = parseInt($presentPiece.html()),
            $presentNum = $('.present-num'),
            exMax = $('#exchange_max').val();
        $body.on("click",presentAdd,function(){
            //console.log($pig.length);
            var num = parseInt($presentNum.html());
            if (num == 0 || num < 0) {
                $presentNum.html(0);
                $pig.html(gold);
            } else if (num >= (exMax-1)) {
                $presentNum.html(exMax);
                $pig.html(gold * exMax);
                $(presentAdd).css({'background-color': '#b5b5b5'});
                if (exMax > 1 || num > 1) {
                    $(presentDec).css({'background-color': '#3398cc'});
                }
            } else if (num >= piece - 1) {
                $presentNum.html(piece);
                $pig.html(gold * piece);
                $(presentAdd).css({'background-color': '#b5b5b5'});
                $(presentDec).css({'background-color':'#3398cc'});
            }
            else {
                $presentNum.html(num + 1);
                $pig.html(gold * (num + 1));
                $(presentAdd).css({'background-color': '#3398cc'});
                if (exMax > 1 || num > 1) {
                    $(presentDec).css({'background-color': '#3398cc'});
                }
            }
        });
        $body.on("click",presentDec,function(){
            var num = parseInt($presentNum.html());
            if(num == 1)
            {
                $presentNum.html(num);
                $pig.html(gold);
                $(presentDec).css({'background-color':'#b5b5b5'});
                if(!piece){
                    $(presentAdd).css({'background-color':'#3398cc'});
                }else{
                    $(presentAdd).css({'background-color':'#3398cc'});
                    if(piece == 1){
                        $(presentAdd).css({'background-color':'#b5b5b5'});
                    }
                }
            }else if(num == 2){
                $presentNum.html(num - 1);
                $pig.html(gold * (num - 1));
                $(presentDec).css({'background-color':'#b5b5b5'});
                $(presentAdd).css({'background-color':'#3398cc'});
            }
            else{
                $presentNum.html(num - 1);
                $pig.html(gold * (num - 1));
                $(presentDec).css({'background-color':'#3398cc'});
                $(presentAdd).css({'background-color':'#3398cc'});
            }
        });
        //$body.on("click",presentAdd,function(){
        //    //console.log($pig.length);
        //    var num = parseInt($presentNum.html());
        //    if(num == 0 || num < 0){
        //        $presentNum.html(0);
        //        $pig.html(gold);
        //    }else if(num >= exMax){
        //        $presentNum.html(exMax);
        //        $pig.html(gold * exMax);
        //        $(presentAdd).css({'background-color':'#b5b5b5'});
        //        $(presentDec).css({'background-color':'#3398cc'});
        //    }else if(num >= piece - 1){
        //        $presentNum.html(piece);
        //        $pig.html(gold * piece);
        //        $(presentAdd).css({'background-color':'#b5b5b5'});
        //        $(presentDec).css({'background-color':'#3398cc'});
        //    }
        //    else{
        //        $presentNum.html(num + 1);
        //        $pig.html(gold * (num + 1));
        //        $(presentAdd).css({'background-color':'#3398cc'});
        //        $(presentDec).css({'background-color':'#3398cc'});
        //    }
        //});
        //$body.on("click",presentDec,function(){
        //    var num = parseInt($presentNum.html());
        //    if(num == 0 || num < 0) {
        //        $presentNum.html(0);
        //        $pig.html(gold);
        //    }else if(num == 1)
        //    {
        //        $presentNum.html(num);
        //        $pig.html(gold);
        //        $(presentDec).css({'background-color':'#b5b5b5'});
        //        $(presentAdd).css({'background-color':'#3398cc'});
        //    }else if(num == 2){
        //        $presentNum.html(num - 1);
        //        $pig.html(gold * (num - 1));
        //        $(presentDec).css({'background-color':'#b5b5b5'});
        //        $(presentAdd).css({'background-color':'#3398cc'});
        //    }
        //    else{
        //        $presentNum.html(num - 1);
        //        $pig.html(gold * (num - 1));
        //        $(presentDec).css({'background-color':'#3398cc'});
        //        $(presentAdd).css({'background-color':'#3398cc'});
        //    }
        //});
    };
//实物礼品兑换
    $body.on('click','.present-exchange',function(){
        var
            $pct = $('.present-card-tip'),
            presentId = $(this).closest('.present-box').attr('id'),
            $presentNum = $('.present-num'),
            num = parseInt($presentNum.html()),
            div = $pct.html(),
            adddata = $('.present-address-box input:checked[name="addId"]'),
            addId = adddata.val();

        $.ajax({
            url : '/GoldShop/ajaxExchange',
            type : 'post',
            dataType : 'json',
            data : {
                award_type : 1,
                id : presentId,
                num : num,
                addId : addId
            },
            success : function(msg,event){
                if(msg.sign == 0){
                    if(div !== ''){
                        event.preventDefault();
                    }else{
                        $pct.append('<div class="alert alert-danger fade in"><img src="../../static/img/UserHome.gold/Spam.png" class="alertImg"><span>'+msg.msg+'</span></div>')
                    }
                }
                if(msg.sign == 1){
                    $('#presentModal').modal('hide');
                    var _url = msg.msg;
                    $.ajax({
                        url : _url,
                        type : 'post',
                        dataType : 'html',
                        success : function(result){
                            if(msg.sign == 2){
                                window.location.href = msg.msg;
                                return;
                            }
                            $('.gold-detail-block-change').html(result);
                            var exList = $('#ex-list');
                            var pList = $('#p-list');
                            exList.addClass('active');
                            pList.removeClass('active');
                        }
                    });
                }
            }
        });
    });
});
