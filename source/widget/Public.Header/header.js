/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-30 14:50:51
 * @version $Id$
 */
//首页倒计时
    var xue = xue || {};
    xue.countdown = null;
    xue.updateEndTime = function(boxs) {
        var box = $(boxs);
        if (box.length === 0) {
            return false;
        }
        var date = new Date();
        var time = date.getTime(); //当前时间距1970年1月1日之间的毫秒数
        box.each(function(i) {
            var endDate = this.getAttribute("endTime"); //结束时间字符串
            if(endDate){
                    //转换为时间日期类型
                    var endDate1 = eval('new Date(' + endDate.replace(/\d+(?=-[^-]+$)/, function(a) {
                        return parseInt(a, 10) - 1;
                    }).match(/\d+/g) + ')');
                    var endTime = endDate1.getTime(); //结束时间毫秒数
                    var lag = (endTime - time) / 1000; //当前时间和结束时间之间的秒数
                    var nMS = 2000000000 * 1000 - date.getTime();
                    if (lag > 0) {
                        var nMS2 = Math.floor(nMS / 100) % 10;
                        var second = Math.floor(lag % 60);
                        var minite = Math.floor((lag / 60) % 60);
                        var hour = Math.floor((lag / 3600) % 24);
                        // xue.log(hour % 24);
                        var day = Math.floor((lag / 3600) / 24);
                        $(this).html(day + "天 " + hour + "时" + minite + "分" + second + "." + nMS2 + "秒");
                        //$(this).html(day + "<span>天</span> " + hour + "<span>时</span>" + minite + "<span>分</span>" + second + "." + nMS2 + "<span>秒</span>");

                    } else{
                        $(this).html("优惠已经结束啦！");
                    }
            }
        });

        xue.countdown = setTimeout(function() {
            xue.updateEndTime(box);
        }, 100);
    };
    xue.clearEndTime = function() {
        clearTimeout(xue.countdown);
    };
$(function () {
    $('#module-header').on('keydown', '.h-search input.h-text', function (e) {
        if (e.which == 13) {
            try {
                search();
            } catch (e) {}
        }
    });
});
