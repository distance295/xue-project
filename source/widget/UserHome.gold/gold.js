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
        $dateStart = $('#dateStart') || {},
        $dateEnd = $('#dateEnd') || {},
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
            $pabLabel = $(pabLabel),
            $pan = $('.present-address-new'),
            $df = $('#details_form');
        if($target[0].nodeName != 'LABEL'){
            $target = $target.parents('label');
            var index = $target.index();
        }
        $pabLabel.removeClass('present-address-focus').eq(index).addClass('present-address-focus');
        if($pan.hasClass('present-address-focus')){
            $df.show();
        }else {
            $df.hide();
        }
    });
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
        var con = '' +
            '<div class="present-card-tip">' +
            '</div><div class="present-box">' +
            '<img src="/static/img/UserHome.gold/Modal-present.png" />' +
            '<div class="present-intro"><span class="present-name">清华大学扑克牌</span> ' +
            '<div class="present-intro-name">' +
            '<span class="present-intro-title">描<span>述 ：</span></span>' +
            '<span class="present-intro-content">清华园，孺子牛.......想要更深入了解清华大学么，那就一起玩会扑克牌吧。让玩耍与认知达到统一，美观而便捷</span>' +
            '</div><div class="present-intro-name">' +
            '<span class="present-intro-title">数<span>量 ：</span></span>' +
            '<div class="present-dec"><p class="p1"></p></div><div class="present-num">1</div>' +
            '<div class="present-add"><p class="p1"</p><p class="p2"></p></div>' +
            '<span class="present-piece">仅剩 <em>'+ data.num +'</em> 张</span></div>' +
            '<div class="present-intro-name"><span class="present-intro-title">兑换额 ：</span>' +
            '<span class="present-intro-gold"><em>'+ data.price +'</em>金币</span></div>' +
            '</div></div><div class="present-address-box"><span>请选择收货地址</span>' +
            '<form action="" method="get">' +
            '<label class="present-address-focus"><input type="radio" name="address" checked/>测试河北省 石家庄市 网校测试不用审核通过 15101089366</label><label class="present-address-new">' +
            '<input type="radio" name="address"/>使用新的地址</label>' +
            '<div class="info_from" id="details_form"><p><label for="">收货人</label>' +
            '<span class="add-opt"><input type="text" autocomplete="off" id="realname" name="realname" value=""></span>' +
            '<span class="text">请准确填写真实姓名</span></p>' +
            '<p><label for="">所在地区</label><span class="add-opt">' +
            '<script src="http://www.xueersi.com/js/areadata.js" type="text/javascript"></script>' +
            '<script src="http://www.xueersi.com/js/areadata_function.js" type="text/javascript"></script>' +
            '<input type="hidden" autocomplete="off" id="province" value="0">' +
            '<input type="hidden" autocomplete="off" id="city" value="0">' +
            '<input type="hidden" autocomplete="off" id="country" value="0">' +
            '<select id="add_province" name="province" class="select" style="display: inline-block;">' +
            '<option value="">省份</option>' +
            '<option value="1">北京市</option>' +
            '<option value="2">天津市</option>' +
            '<option value="3">河北省</option>' +
            '<option value="4">山西省</option>' +
            '<option value="5">内蒙古自治区</option>' +
            '<option value="6">辽宁省</option>' +
            '<option value="7">吉林省</option>' +
            '<option value="8">黑龙江省</option>' +
            '<option value="9">上海市</option>' +
            '<option value="10">江苏省</option>' +
            '<option value="11">浙江省</option>' +
            '<option value="12">安徽省</option>' +
            '<option value="13">福建省</option>' +
            '<option value="14">江西省</option>' +
            '<option value="15">山东省</option>' +
            '<option value="16">河南省</option>' +
            '<option value="17">湖北省</option>' +
            '<option value="18">湖南省</option>' +
            '<option value="19">广东省</option>' +
            '<option value="20">广西壮族自治区</option>' +
            '<option value="21">海南省</option>' +
            '<option value="22">重庆市</option>' +
            '<option value="23">四川省</option>' +
            '<option value="24">贵州省</option>' +
            '<option value="25">云南省</option>' +
            '<option value="26">西藏自治区</option>' +
            '<option value="27">陕西省</option>' +
            '<option value="28">甘肃省</option>' +
            '<option value="29">青海省</option>' +
            '<option value="30">宁夏回族自治区</option>' +
            '<option value="31">新疆维吾尔自治区</option>' +
            '<option value="32">台湾省</option>' +
            '<option value="33">香港特别行政区</option>' +
            '<option value="34">澳门特别行政区</option>'+
            '</select>'+
        '<select id="add_city" name="city" class="select"> ' +
            '<option value=" ">城市</option> </select>'+
            '<select id="add_country" name="country" class="select"><option value="">区县</option></select>'+
            '</span><span></span></p><p>'+
            '<label for="">详细地址</label><span class="add-opt">'+
            '<input type="text" autocomplete="off" id="address" name="address" class="add-input"></span>'+
            '<span class="text">请填写详细路名及门牌号</span></p><p><label for="">手机号码</label>'+
            '<span class="add-opt"><input type="text" autocomplete="off" id="phone" name="phone" value=""></span>'+
            '<span class="text">用于接收发货通知短信和送货前通知</span></p><p><label for="">邮政编码</label>'+
            '<span class="add-opt"><input type="text" autocomplete="off" id="zipcode" name="zipcode" value=""></span>'+
            '<span class="text">用于快递确定送货地址</span></p><p><label></label>'+
            '<input type="hidden" autocomplete="off" id="add_id" value="0">'+
            '<a href="javascript:void(0);" id="address_submit_btn" class="btn btn_red">保存收货人信息</a></p>'+
            '<p class="error_tips_address"></p></div></form></div><div class="present-exchange">确认兑换</div>';

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
        var con = "<div class='red-card-tip'></div><div class='red-card-box'><img src='/static/img/UserHome.gold/Modal-red-card.png' /><div class='red-card-intro'><span class='red-card-name'>红名卡</span><div class='red-card-intro-name'><span class='red-card-intro-title'>数<span>量 ：</span></span><div class='red-card-num'>1</div><span>仅剩 <em>19</em> 张</span></div><div class='red-card-intro-name'><span class='red-card-intro-title'>兑换额 ：</span><span><em>260</em>金币</span></div><div class='red-card-intro-name'><span class='red-card-intro-title'>等<span>级 ：</span></span><span>12</span></div><div class='red-card-intro-name'><span class='red-card-intro-title'>有效期 ：</span><span>7*12小时</span></div><div class='red-card-exchange'>确认兑换</div></div></div>"

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
    var addressInput = '#realname, #add_province, #add_city, #address, #zipcode, #phone';
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

        var _tpl =  '  <input type="hidden" '
            +'      data-phone="$phone$" '
            +'      data-zipcode="$zipcode$" '
            +'      data-address="$address$" '
            +'      data-area="$province_text$ $city_text$ $country_text$" '
            +'      data-county="$country$" '
            +'      data-city="$city$" '
            +'      data-province="$province$" '
            +'      data-realname="$realname$" '
            +'      value="$id$" '
            +'      name="data[addid]" '
            +'      id="addid_$id$"'
            +'  />'
            +'<div class="consignee_item current">'
            +'  <span>$realname$ $province_text$</span>'
            +'</div>'
            +'<div class="addr_detail">'
            +'  <span class="addr_name" title="$realname$">$realname$</span>'
            +'  <span class="addr_info" title="$province_text$ $city_text$ $country_text$ $address$">$province_text$ $city_text$ $country_text$ $address$</span>'
            +'  <span class="addr_tel">$phone$</span>'
            +'</div>'
            +'<div class="ship_btns">'
            +'  <a class="setdefault_consignee" href="#none">设为默认地址</a>'
            +'  <a class="edit_consignee" href="javascript:updateAddress($id$);">编辑</a>'
            +'  <a class="del_consignee" href="#none" onclick="delAddress($id$)">删除</a>'
            +'</div>';


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
        $.ajax('addr.json',{///shoppingCart/saveStuAdds
            //url : 'addr.json',
            type: 'POST',
            dataType:'json',
            data : o,
            success:function(result){
                if(!result.sign){
                    return;
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
                tp = tp.replace(/\$city_text\$/g, data.city_text)
                tp = tp.replace(/\$country_text\$/g, data.country_text);

                if(result.type === 1){
                    $('<li id="'+_id+'">'+ tp + '</li>').prependTo('ul.shipadd_list');
                }else if(result.type === 2){
                    $('#addid_'+data.id).parent().html(tp);
                }
                $('.info_from').hide();
            }
        });
    }
    // 保存收货地址
    $('#address_submit_btn').on('click', function() {
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

});