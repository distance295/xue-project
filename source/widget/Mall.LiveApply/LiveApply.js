
// $(function(){
//     $('.applyinfo a').on('click', function() {
//          var success_arr = [
//             'baoming_success',
//             'number_full',
//             'yuyue_success'
//         ];

//         var hide_arr = [
//             'baoming_nostart',
//             'baoming_over',
//             'yuyue_nostart',
//             'yuyue_over'
//         ];
//         var pattern = /button\/(.*?)\.png/g;
//         var imgSrc = $('.applyinfo a img').attr('src');
//         var imgName = pattern.exec(imgSrc)[1];
//         if ($.inArray(imgName, hide_arr) != -1) {
//             $('.settime .baoming_detail').remove();
//         }
//         if ($.inArray(imgName, hide_arr) != -1 || $.inArray(imgName, success_arr) != -1) {
//             $('.applyinfo a').addClass('failapply');
//         }
//         if ($.inArray(imgName, hide_arr) != -1 || $.inArray(imgName, success_arr) != -1) {
//             return false;
//         }
//         var alowGrade = 1;
//         var gradeNames = '一年级';
//         if(alowGrade==0){
//             alert('本次活动是为了'+gradeNames+'年级学员准备的，如果您年级填写错误，请修改年级');
//             return false;
//         }
//         $('.apply_container .special').css('display', 'block');
//         $('.applyinfo').css('border-bottom', '1px dashed #cbcbcb');
//         var windowHeight = parseInt($("body").css("height"));//整个页面的高度
//         $( "html,body").animate({ "scrollTop" : windowHeight }, 1000);
//     })
//     $('#apply_button').on('click', function(){
//         var f=$('.usersinfo');
//         var tpl='<span class="sub-wrong">请填写此信息</span>';
//         var tpl1='<span class="sub-wrong">请填写正确手机号码</span>';
//         var box=$('input[type=tel]');
//         var isPhone = (/^(13|15|16|18)[0-9]{9}$/.test(box.val()) ? true : false);
//         f.find('input').each(function() {
//             if(this.value === ""){
//                 $(this).addClass('error');
//                 if($(this).parent().find('.sub-wrong').length === 0){
//                     $(this).parent().append(tpl);
//                 }
//                 return false;
//             }else{
//                 if($(this).attr('type') == 'tel'){
//                     if(!isPhone){
//                         $(this).addClass('error');
//                         if($(this).parent().find('.sub-wrong').length === 0){
//                             $(this).parent().append(tpl1);
//                         }
//                         return false;
//                     }
//                 }
//             }
//             f.find('.sub-wrong').remove();
//             f.find('input').removeClass('error');
//         });

//         if(f.find('input.error').length === 0){
//             var formData = $("#form").serialize();
//             $.ajax({
//                 url	: '/Signup/join/',
//                 type: 'POST',
//                 data: formData,
//                 dataType:'json',
//                 success: function(result){
//                     if(result.sign == 1){
//                         xue.alert(result.msg, function(){
//                             //							window.location = '/Signup/detail/' + 823;
//                             window.location.reload();
//                         });
//                         setTimeout(function(){
//                             window.location.reload();
//                         }, 3000);
//                     }else if(result.sign == 2) {
//                         window.location.href = result.msg;
//                     }else{
//                         xue.alert(result.msg);
//                         return false;
//                     }
//                 }
//             });
//         }
//     })

//    // updateEndTime();
// });

// // function updateEndTime(){
// //     xue.date.clock.start({
// //         date : '2015-12-23 17:26:04',
// //         tpl : 'yyyy-MM-dd HH:mm:ss',
// //         endTime : '2015-12-24 18:00:00',
// //         endCallback : function(d){
// //             location.href = location.href;
// //             //			if(xue.isIE){
// //             //				window.navigate(document.URL);
// //             //			}else{
// //             //				location.href = location.href;
// //             //				document.execCommand('Refresh');
// //             //				$('head').append('<meta http-equiv="refresh" content="3">');
// //             //			}

// //         },
// //         callback : function(c){
// //             var box = $('.settime');
// //             var a = c / 1000;
// //             var second = Math.floor(a % 60);
// //             var minute = Math.floor((a / 60) % 60);
// //             var hour = Math.floor((a / 3600) % 24);
// //             var day = Math.floor((a / 3600) / 24);
// //             box.html(
// //                 '剩余：<span>' + day + '</span>天'
// //                 + '<span>' + hour + '</span>时'
// //                 + '<span>' + minute + '</span>分'
// //                 + '<span>' + second + '</span>秒'
// //             );
// //         }
// //     });
// // }