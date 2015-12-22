<!--
    @require homeHeader.less
-->
<div id="module-myheader" class="bg-primary">
    <div class="container">
        <div class="col-md-6 row">
            <div class="user-avatar pull-left col-xs-2">
                <a href=""><img src="pic/avatar.png" alt=""></a>
            </div>
            <div class="user-info col-xs-8">
                <h3 href="" class="user-name pull-left">快乐的小鸟</h3>
                <a class="user-v pull-left" href="" class=""><img src="../../static/img/v1.png" alt=""></a>
                <a href="" class="mycenter-link">学习中心</a>
            </div>
            <div class="col-xs-8">
                <span href="" class="user-sex badge">
                           <i class="fa fa-venus"></i>
                       </span>
                <a href="" class="user-level label label-warning">Lv.20</a>
            </div>
        </div>
        <div class="col-md-5 text-right">
            <ul class="user-medal list-inline">
                <li class="medal-1">
                    <a href="" title="学习课程超过10节即可激活勋章" data-target="hidediv_">
                        <img src="http://img04.xesimg.com/icon/b/s_0.png" alt="">
                    </a>
                </li>
                <li class="medal-2">
                    <a href="" title="做10道课程测试题即可激活勋章" data-target="hidediv_2">
                        <img src="http://img04.xesimg.com/icon/d/s_0.png" alt="">
                    </a>
                </li>
                <li class="medal-3">
                    <a href="" title="网校学生证" data-target="hidediv_2">
                        <img src="http://img04.xesimg.com/icon/a/s_1.png" alt="">
                    </a>
                </li>

                <!--
                <li class="medal-3">
                    <a href="" title="做10道课程测试题即可激活勋章">
                        <img src="http://img04.xesimg.com/icon/c/s_1.png" alt="">
                    </a>
                </li>
-->

                <li class="medal-4">
                    <a href="" title="参与1次直播即可激活勋章" data-target="hidediv_2">
                        <img src="img/25/s_zb_0.png" alt="">
                    </a>
                </li>

            </ul>
        </div>
    </div>
</div>
<div class="user_student">
    <!--勋章相关隐藏div开始-->
    <!-- 网校学生证-->
    <div id="hidediv_1">
        <div class="pop_student_medal">
            <div class="student_medal_con">
                <div class="ui_medal_pic">
                    <img src="http://img04.xesimg.com/icon/a/l_3.png">
                </div>
                <div class="medal_con">
                    <p class="name">网校学生证</p>
                    <p class="info">你已经是网校的正式学员啦，从学习中获得乐趣吧，让学习更有意思！</p>
                </div>
            </div>
            <div class="medal_info">
                <span class="green">自2013.8.28日起开始在网校学习</span>
            </div>
        </div>
    </div>

    <!--学习达人-->
    <div id="hidediv_2" style="display:none;">
        <div class="pop_student_medal">
            <div class="student_medal_con">
                <div class="ui_medal_pic">
                    <img src="http://img04.xesimg.com/icon/b/l_7.png">
                </div>
                <div class="medal_con">
                    <p class="name">学习达人（<strong>7级</strong>）</p>
                    <p class="info">为了表彰你长期坚持学习，特授予你光荣的7级学习勋章。</p>
                </div>
            </div>
            <div class="medal_upgrade">
                <span class="upgrade">升级：</span>
                <div class="upgrade_bar">
                    <span style="width:74%;"></span>
                </div>
                <span class="upgrade_number">
        		<strong>490</strong>/665        	</span>
            </div>
            <div class="all_upgrade_info" style="color:#666666;">
                距离下次升级还需观看175节视频，加油！
            </div>
        </div>
    </div>

    <!--做题达人-->
    <div id="hidediv_3" style="display:none;">
        <div class="pop_student_medal">
            <div class="student_medal_con">
                <div class="ui_medal_pic">
                    <img src="http://img04.xesimg.com/icon/d/l_4.png">
                </div>
                <div class="medal_con">
                    <p class="name">做题达人（<strong>4级</strong>）</p>
                    <p class="info">为了表彰你一题一题的积累，特授予你光荣的4级做题达人勋章。</p>
                </div>
            </div>
            <div class="medal_upgrade">
                <span class="upgrade">升级：</span>
                <div class="upgrade_bar">
                    <span style="width:51%;"></span>
                </div>
                <span class="upgrade_number">
            	<strong>88</strong>/171            </span>
            </div>
            <div class="all_upgrade" style="color:#666666;">
                正确率34.09%，距离下次升级还需做83道题，加油！ </div>
        </div>
    </div>

    <!--直播达人勋章-->
    <div id="hidediv_4" style="display:none;">
        <div class="pop_student_medal">
            <div class="student_medal_con">
                <div class="ui_medal_pic">
                    <img src="img/80/b_zb_1.png">
                </div>
                <div class="medal_con">
                    <p class="name">直播达人（<strong>1级</strong>）</p>
                    <p class="info">为了表彰你长期参与直播，特授予你光荣的1级直播达人勋章。</p>
                </div>
            </div>
            <div class="medal_upgrade">
                <span class="upgrade">升级：</span>
                <div class="upgrade_bar">
                    <span style="width:80%;"></span>
                </div>
                <span class="upgrade_number">
        		<strong>4</strong>/5            </span>
            </div>
            <div class="all_upgrade_info" style="color:#666666;">
                累积参与直播次数：4次，真棒！
            </div>
        </div>
    </div>
    <!--勋章相关隐藏div结束-->
</div>


<div id="xuebox_studenTips" class="dialog studenTips" style="left: 381.5px; top: 420px; position: absolute;">
    <table class="dialog_box">
        <thead>
            <tr class="t">
                <td class="tl"></td>
                <td class="tc"></td>
                <td class="tr"></td>
            </tr>
        </thead>
        <tbody class="dialog_head hidden">
            <tr class="ct">
                <td class="cl"></td>
                <td class="dialog_handle">
                    <p class="dialog_title" id="xuebox_studenTips_title">标题</p>
                </td>
                <td class="cr"></td>
            </tr>
        </tbody>
        <tbody class="dialog_body">
            <tr class="cc">
                <td class="cl"></td>
                <td id="xuebox_studenTips_content" class="dialog_content_wrap dialog_radius_top dialog_radius_bottom">
                    <div class="dialog_content" style="width: 320px; height: auto;">
                        <div class="studentMedal_tips">
                            <div class="pop_student_medal">
                                <div class="student_medal_con">
                                    <div class="ui_medal_pic">
                                        <img src="http://img04.xesimg.com/icon/a/l_3.png">
                                    </div>
                                    <div class="medal_con">
                                        <p class="name">网校学生证</p>
                                        <p class="info">你已经是网校的正式学员啦，从学习中获得乐趣吧，让学习更有意思！</p>
                                    </div>
                                </div>
                                <div class="medal_info">
                                    <span class="green">自2013.8.28日起开始在网校学习</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td class="cr"></td>
            </tr>
        </tbody>
        <tbody class="dialog_foot hidden">
            <tr class="cb">
                <td class="cl"></td>
                <td class="dialog_buttons" id="xuebox_studenTips_buttons"></td>
                <td class="cr"></td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="b">
                <td class="bl"></td>
                <td class="bc"></td>
                <td class="br"></td>
            </tr>
        </tfoot>
    </table>
    <div class="dialog_arrow arrow_tl"></div>
</div>