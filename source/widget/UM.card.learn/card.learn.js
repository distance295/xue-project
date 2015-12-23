//切换
function changeTab(d,box){
    var that = $(d),
    box = $(box).children();
    that.addClass("current").siblings().removeClass("current");  
    var index =  that.index(); 
    box.eq(index).show().siblings().hide();
}

$('#pay_tab li').click(function(){
  changeTab(this,".contentbind");
});

var xue =xue || {};
    xue.formCheck = xue.formCheck || {};
var fCheck = xue.formCheck;

/* 提示信息的css样式 */
fCheck.setTips = function(select, tips){
  $(select).css({
    'display': 'block',
  }).html(tips);
};

/* 输入正确时，清除提醒 */
fCheck.clearTips = function(select){
  $(select).css({
    'display':'none'
  }).html(null);
};

/* 学习卡充值 */
$(function() {
    $(".btn-pay").click(function() {
        if ($(".studyCardPwd").val() == '') {
              fCheck.setTips(".studyCardPwd-warning",'请输入学习卡密码');
            $(".studyCardPwd").focus(function() {
              fCheck.clearTips(".studyCardPwd-warning");});
            return false;
        }

        $.ajax({
            type: "POST",
            url: "/MyPayCenters/aStudyCardRechare",
            data: "studyCardPwd=" + $(".studyCardPwd").val(),
            dataType: 'json',
            success: function(d) {
                if (d.sign == 1) {
                    //location.href = "/RequestPassword/UpdatePasswordSecuess";
                    alert('学习卡充值成功');
                } else {
                    fCheck.setTips('.studyCardPwd-warning',d.msg);
                }
                if(msg.sign === 2){
                    window.location.href = msg.msg;
                } 
            }
        });
    })
 
})  

/* 银行卡充值 */
$(".cl-btn").on('click', function() {
    var value = document.getElementById("bankpay").value;
    var isbank = (/^[1-9]\d$|^[1-9]\d\d$|^[1-9]\d\d\d$|^[1-4]\d\d\d\d$|^50000$/.test(value) ? true : false);
    if (isbank) {
        $('.cl-input').hide();
        $('.payment_bank').show();
    }else{
        alert("只能填写大于等于10，小于等于50000 的整数金额");
    };
});

/* 设置在线支付银行状态 */
function setOlineBank(){
    var bankList_wrap = $('.paylists:not(.hasCkecked)').find('.bank_list');
    // 收起多余的银行
    bankList_wrap.each(function(i){
        var that = $(this);
        // var eq = (i == 0) ? 7 : 3;
        var eq = 11;
        that.find('li:gt('+ eq +')').hide().addClass('list_more');
        if(that.find('li').length <= 12){
            that.next('.bank_more').hide();
        }else{
            that.next('.bank_more').find('span').text('更多银行');
        }
    });
    // 更多银行展开收起效果
    $('.bank_more').on('click', function(){
        var that = $(this),
            list = that.prev().find('li.list_more');
        if(that.hasClass('open')){
            list.hide();
            that.removeClass('open');
            that.find('span').text('更多银行');
        }else{
            list.show();
            that.addClass('open');
            that.find('span').text('收起');
        }
    });
    // 设置上次支付过的银行
    var old_bank = $('#default_bank'),
        bankList = bankList_wrap.find('input[name="bank_id"]');
    // 根据上次支付的银行设置默认银行
    if(old_bank.val() != ''){
        bankList.each(function(){
            var that = $(this), tp = that.attr('paytype'), id = that.attr('payid');
            if(that.val() == old_bank.val() && tp == old_bank.attr('paytype')){
                var defalut_bank_dom = that.parent().html();
                $('.hasCkecked li').html(defalut_bank_dom);
                $('.hasCkecked li').find('input').prop('checked', true);
            }
        });
        $('.hasCkecked').show();
        $('.paylists:not(.hasCkecked)').hide();
    }else{
        $('.hasCkecked').hide();
        $('.paylists:not(.hasCkecked)').show();
    }
    // 选择其他银行的点击事件
    $('#chose_other').on('click', function(){
        bankList.each(function(){
            var that = $(this), tp = that.attr('paytype'), id = that.attr('payid');
            if(that.val() == old_bank.val() && tp == old_bank.attr('paytype')){
                that.prop('checked', true);
            }
        });
        $('.hasCkecked').hide();
        $('.paylists:not(.hasCkecked)').show();
    });
    // 选择银行当前状态
     $('.bank_list li').click(function(){
        var that = $(this).find('input[name="bank_id"]');
        var payid = that.attr('payid'),
            paytp = that.attr('paytype');
        that.prop('checked', true);
        $('#paytype_id').val(payid);
        $('#onlinePayType').val(paytp);
        $('.bank_list li').removeClass('current');
        $(this).addClass('current');
    });
}
/* 设置在线支付银行状态 end */
