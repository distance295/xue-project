(function($){
$.extend({
ms_DatePicker: function (options) {
            var defaults = {
                YearSelector: "#year",
                MonthSelector: "#month",
                DaySelector: "#day",
                FirstText: "请选择",
                FirstValue: 0
            };
            var opts = $.extend({}, defaults, options);
            var $YearSelector = $(opts.YearSelector);
            var $MonthSelector = $(opts.MonthSelector);
            var $DaySelector = $(opts.DaySelector);
            var FirstText = opts.FirstText;
            var FirstValue = opts.FirstValue;

            // 初始化
            var str = "<option value=\"" + FirstValue + "\">" + FirstText + "</option>";
            $YearSelector.html(str);
            $MonthSelector.html(str);
            $DaySelector.html(str);

            // 年份列表
            var yearNow = new Date().getFullYear();
            var yearSel = $YearSelector.attr("rel");
            for (var i = yearNow; i >= 1990; i--) {
                var sed = yearSel==i?"selected":"";
                var yearStr = "<option value=\"" + i + "\" " + sed+">" + i + "</option>";
                $YearSelector.append(yearStr);
            }

            // 月份列表
            var monthSel = $MonthSelector.attr("rel");
            for (var i = 1; i <= 12; i++) {
                var sed = monthSel==i?"selected":"";
                var monthStr = "<option value=\"" + i + "\" "+sed+">" + i + "</option>";
                $MonthSelector.append(monthStr);
            }
            function BuildMonth() {  
                if ($YearSelector.val() == 0) {
                    $MonthSelector.html(str);
                }else{
                    $MonthSelector.html(str);
                   for (var i = 1; i <= 12; i++) {
                       var monthStr = "<option value=\"" + i + "\" "+i+">" + i + "</option>";
                       $MonthSelector.append(monthStr);
                   } 
                }
            }

            // 日列表(仅当选择了年月)
            function BuildDay() {
                if ($YearSelector.val() == 0 || $MonthSelector.val() == 0) {
                    // 未选择年份或者月份
                    $DaySelector.html(str);
                } else {
                    $DaySelector.html(str);
                    var year = parseInt($YearSelector.val());
                    var month = parseInt($MonthSelector.val());
                    var dayCount = 0;
                    switch (month) {
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            dayCount = 31;
                            break;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            dayCount = 30;
                            break;
                        case 2:
                            dayCount = 28;
                            if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
                                dayCount = 29;
                            }
                            break;
                        default:
                            break;
                    }                    
                    for (var i = 1; i <= dayCount; i++) {
                        var dayStr = "<option value=\"" + i + "\" "+i+">" + i + "</option>";
                        $DaySelector.append(dayStr);
                    }
                }
            }
            //格式验证
            dateFormat = function () {
                if ($YearSelector.val() == 0){
                    $(".date-warning").css({
                      'display': 'none',
                    }).html(null);
                    return true
                }else{
                    if ($MonthSelector.val() == 0) {
                        $(".date-warning").css({
                          'display': 'block',
                        }).html("请输入月份");
                    }else{
                        if ($DaySelector.val() == 0) {
                            $(".date-warning").css({
                              'display': 'block',
                            }).html("请输入日");
                        }else{
                            $(".date-warning").css({
                              'display': 'none',
                            }).html(null);
                            return true
                        }
                    }
                }
            }

            $YearSelector.change(function () {
                BuildMonth();
                BuildDay();
                dateFormat();
                $('#year').css({
                    border: '1px solid #68c04a'
                });
            });
            $MonthSelector.change(function () {
                BuildDay();
                dateFormat();
                $('#month').css({
                    border: '1px solid #68c04a'
                });
            });
            $DaySelector.change(function () {
                dateFormat();
                $('#day').css({
                    border: '1px solid #68c04a'
                });
            });
            if($DaySelector.attr("rel")!=""){
                var daySel = $DaySelector.attr("rel");
                for (var i = 1; i <= 31; i++) {
                    var sed = daySel==i?"selected":"";
                    var dayStr = "<option value=\"" + i + "\" "+sed+">" + i + "</option>";
                    $DaySelector.append(dayStr);
                }
            }
        } // End ms_DatePicker
});
})(jQuery);