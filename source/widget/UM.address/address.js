//收货地址全部交互
var addressInput = '#realname, #add_province, #add_city, #add_country, #address, #zipcode, #recipientphone';
//鼠标进入时增加样式
$('#ui-setAddress').on('mouseenter', '.shipadd_list li', function(event) {
    var that = $(this);
    that.addClass('current');
});
//鼠标离开时删除样式
$('#ui-setAddress').on('mouseleave', '.shipadd_list li', function(event) {
    var that = $(this);
    that.removeClass('current');
});
//关闭收货地址
     $(".close_address").on('click',function(){
            var that = $(this);
         that.parents('#details_form').hide();
     });
//删除收货人地址
function delAddress(id) {
    var _data = id;
    if (window.confirm("确定删除该收货地址?")){
                $.ajax({
                    url: '/MyInfos/delAddress',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        id: _data
                    },
                    success: function(result) {
                        if (result.sign == 1) {
                            $('.shipadd_list li#' + _data).remove();
                            $('#numberAddress').text(result.rows);
                        } else {
                            alert(result.msg);
                        }
                    }
                });
			}else{
	       		return false;
			}
    
}
 //提交生成收货地址列表
function saveNewAddress(addInput) {
     if($('#address_submit_btn').hasClass('submit_in_use')){//提交时，检测是否有标识的类名
         return false;
      }
     $('#address_submit_btn').addClass('submit_in_use');//增加类名，用来防止ajax提交过程中用户重复点击
    var input = $(addInput);
    var data = {
        id: 0
    };
    data.id = $('#add_id').val();
    var id;
    input.each(function() {
        id = this.id;
        id = id.replace('add_', '');
        data[id] = $(this).val();
    });
    data['province_text'] = $('#add_province option:checked').text();
    data['city_text'] = $('#add_city option:checked').text();
    data['country_text'] = $('#add_country option:checked').text();
    var _tpl = '  <input type="hidden" ' 
            + '      data-recipientphone="$phone$" ' 
            + '      data-zipcode="$zipcode$" ' 
            + '      data-address="$address$" ' 
            + '      data-area="$province_text$ $city_text$ $country_text$" ' 
            + '      data-county="$country$" ' 
            + '      data-city="$city$" ' 
            + '      data-province="$province$" ' 
            + '      data-realname="$realname$" ' 
            + '      value="$id$" ' 
            + '      name="data[addid]" ' 
            + '      id="addid_$id$"' 
            + '  />' 
            + '<div class="addr_detail">' 
            + '  <span class="addr_name" title="$realname$">$realname$</span>' 
            + '  <span class="addr_info" title="$province_text$ $city_text$ $country_text$ $address$">$province_text$ $city_text$ $country_text$ $address$</span>' 
            + '  <span class="addr_tel">$phone$</span>' 
            + '</div>' 
            + '<div class="ship_btns">' 
            + '  <a class="setdefault_consignee" href="/MyInfos/setDefaultAddress/$addId$">设为默认地址</a>' 
            + '  <a class="edit_consignee" href="javascript:updateAddress($id$);">编辑</a>'
            + '  <a class="del_consignee" href="#none" onclick="delAddress($id$)">删除</a>' 
            + '</div>';
    var o = {
        id: data.id,
        recipient: data.realname,
        province: data.province,
        city: data.city,
        county: data.country,
        address: data.address,
        zipcode: data.zipcode,
        phone: data.recipientphone

    };
    $.ajax({
        url: '/MyInfos/editAddressInfo',
        type: 'POST',
        dataType: 'json',
        data: o,
        success: function(result) {
            if (!result.sign) {
                alert(result.msg);
                return false;
            }
            var _id = result.addId;
            var tp = _tpl;
            tp = tp.replace(/\$id\$/g, _id);
            tp = tp.replace(/\$phone\$/g, data.recipientphone);
            tp = tp.replace(/\$zipcode\$/g, data.zipcode);
            tp = tp.replace(/\$address\$/g, data.address);
            tp = tp.replace(/\$country\$/g, data.country);
            tp = tp.replace(/\$city\$/g, data.city);
            tp = tp.replace(/\$province\$/g, data.province);
            tp = tp.replace(/\$realname\$/g, data.realname);
            tp = tp.replace(/\$province_text\$/g, data.province_text);
            tp = tp.replace(/\$city_text\$/g, data.city_text)
            tp = tp.replace(/\$country_text\$/g, data.country_text);
            tp = tp.replace(/\$addId\$/g, _id);
            var _addid = $('#addid_' + data.id).parent();
            if (result.type === 1) {
                $('<li id="' + _id + '">' + tp + '</li>').prependTo('ul#shopAdderTo');
                $('#numberAddress').text(result.rows);
            }
            if (result.type === 2) {
                _addid.html(tp);
                $('#numberAddress').text(result.rows);
            }
            if (result.isDefault == 1) {
                _addid.html(tp);
                _addid.find('.addr_detail').append('<span class="default_addr">默认地址</span>');
                _addid.find('.setdefault_consignee').remove();
            }
            $('.info_from').hide();
            $('#address_submit_btn').removeClass('submit_in_use');
        },
        error:function(){
            alert('数据加载失败！');
            $('#address_submit_btn').removeClass('submit_in_use');
        }
    });
}

//编辑收货人地址
function updateAddress(id) {
    $(addressInput).removeClass('error');
    $('.error_tips_address').empty();
    var box = $('#addid_' + id);
    if (box.length == 0) {
        return;
    }
    var data = box.data();
    var inputs = $(addressInput);
    inputs.each(function() {
        var _id = this.id;
        _id = _id.replace('add_', '');
        if (this.id == 'add_province' || this.id == 'add_city' || this.id == 'add_country') {
            $(this).find('option[value="' + data[_id] + '"]').prop('selected', true);
            $('#' + _id).val(data[_id]);
        } else {
            $(this).val(data[_id]);

        }
    });
    renderAreaSelect();
    $('#add_id').val(id);
    var newAddress = $('#details_form');
    newAddress.show();
}
// 保存收货地址
$('body').on('click', '#address_submit_btn', function() {
    var saveAddress ='#realname, #add_province, #address, #zipcode, #recipientphone';
    var addInput = '#realname, #add_province, #add_city, #add_country, #address, #zipcode, #recipientphone';
    var errorbox = $('.error_tips_address');
    var inputs = $(saveAddress);

    var ids = {
        realname: '收货人姓名',
        province: '省份',
        city: '城市',
        country: '地区',
        address: '详细地址',
        zipcode: '邮政编码',
        recipientphone: '手机号码',
        add_province: '省份',
        add_city: '城市',
        add_country: '地区'
    };
    var _reg = {
        recipientphone: (/^(13|14|15|17|18)[0-9]{9}$/.test($('#recipientphone').val()) ? true : false),
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
        if ($.trim($(this).val()) === '') {
            error.push(ids[id]);
            $(this).addClass('error');
        } else {
            // 判断手机号与邮编格式
            if (id == 'recipientphone' || id == 'zipcode') {
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
    saveNewAddress(addInput);

});
// 新增收货人地址显示或隐藏 
$('.newCreateAddress').on('click', function() {
    var newAddress = $('#details_form');
    var number = Number($('#numberAddress').text());
    $(addressInput).val('');
    $('#add_id').val('');
    if (newAddress.is(':hidden') && number < 10) {
        newAddress.show();
    }
});