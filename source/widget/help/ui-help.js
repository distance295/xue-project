$(function() {
    $(".ui_tabs_help li a").each(function(index) { //带参数遍历各个选项卡
      $(this).click(function() { //注册每个选卡的单击事件
        $(".ui_tabs_help li a.current").removeClass("current"); //移除已选中的样式
        $(this).addClass("current"); //增加当前选中项的样式
        //显示选项卡对应的内容并隐藏未被选中的内容
        $("ul.ui_help_main li:eq(" + index + ")").show()
          .siblings().hide();
      });
    });

    //名师列表鼠标效果
    $(".help_guide dl").hover(function() {
      $(this).addClass("current");
    }, function() {
      $(this).removeClass("current");
    });
    //显示和隐藏
    function inforShow(ccc) {
      var con = $(ccc);
      var don = con.next('.infor_spot');
      if (don.is(':visible')) {
        con.removeClass('current');
        don.hide();
      } else {
        con.addClass('current');
        don.show();
      };
    }
    $('.title_spot').click(function() {
      inforShow(this);
    });
});