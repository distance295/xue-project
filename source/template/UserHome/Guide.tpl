<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>学习中心-录播直播作业列表</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <!-- 这是CSS库文件 -->
    <link rel="stylesheet" type="text/css" href="../../lib/bootstrap/3.3.5-custom/css/bootstrap.min.css">
    <!-- 这是当前模块样式文件 -->
    <script type="text/javascript" src="../../lib/jQuery/2.1.1/jquery.min.js"></script>
</head>
<body>
    <!-- 引导用户 -->
    <link rel="import" href="../../widget/UserHome.courses/guide.tpl?__inline">
    <!-- 引导用户 -->
    <script type="text/javascript">
    $(function () {
        // 禁止屏幕滚动
        $("body").addClass("shade_scroll");
        $(".btns_exit").click(function(){
            $("body").removeClass("shade_scroll");
        });
        $(".btns_finish").click(function(){
            $("body").removeClass("shade_scroll");
        });
        
        var step = $(".step_item");//声名当前元素的变量

        step.find('.btns_next').on('click', function() {

            var that = $(this).parent();//获得当前step_item元素：是为点击元素的父元素
            var index = that.index();//获得元素的索引值
            var next = step.eq(index+1);//获得下一个元素 ：索引值加1

            that.fadeOut('fast');//当前元素隐藏
            next.fadeIn('fast');//下一个元素显示
            //获得显示元素的top值--为了让元素居中减去 窗口高度除以2
            var h = next.offset().top - $(window).height() / 2;
            $(window).scrollTop(h);//执行滚动条滚动
        });


       $(".btns_exit,.btns_finish").on('click', function () {//点击按钮退出引导
           $('.guidance_wrap').remove();//删除引导代码
       });
   });
    </script>
    <!-- 这是jquery库文件 -->
    <!-- 这是当前模块js文件 -->
</body>
</html>