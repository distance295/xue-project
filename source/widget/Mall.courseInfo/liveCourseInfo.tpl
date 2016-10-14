<!--
	直播课程：
    @require ui-course-info.less
-->
<div class="ui-course-infor-wrap">
    <h2 class="coures-name-title">人教版四升五年级上下全册数学满分班<em>目标满分班</em></h2>
    <div class="course-left-player f-left">
        <div class="video-player" data-url="/data/Mall.courseInfo/video.html" data-params="a=1&b=2">
            <img src="pic/lb-xiangqing_03.png" height="400" width="590" alt="">
            <span class="video-icon"></span>
        </div>
         <div class="main-teacher">
                <span class="avatar-m">
				          <img src="http://s02.xesimg.com/teacher/2013/08/26/13774956202468.jpg" alt="">
				      </span>
                <span class="name-m">达务力江老师</span>
                <span class="name-r">课程满意度<strong>92.55</strong></span>
            </div>
    </div>
    <div class="course-center-list f-left">
        <div class="course-info-limit">
          <span class="limit-course"> <i class="fa fa-clock-o" aria-hidden="true"></i>
            限额抢购
          </span>
          <span class="right">
            名额仅剩: <i class="red">50</i>
            人
          </span>
        </div>
       <div class="course-endtime course-endtime-limit">
           <span>报名截止还剩:</span>
           <em class="settime" endtime="2016-7-25 19:15:59"></em>
           <script type="text/javascript">
                $(function(){
                   xue.updateEndTime('.settime');//执行倒计时函数
                });
	       </script>
       </div>
<!--       <div class="qq-layer-item"></div>-->
        <div class="course-favorable-money">
            <div class="favrble-money f-left">
                <span>
						优惠价格: <em class="red">￥6600</em>
					</span> <del>原价:<em>￥825</em></del>
                   <span class="tips" title="本期已开课，您将从第二讲开始学习"><img src="img/icon-mon.png"/></span>
            </div>
        </div>
        <div class="course-favorable-list">
            优惠活动：
            <span>续报9折</span>
            <span>送u盘</span>
            <span>送练习册</span>
            <span>实物礼品</span>
        </div>
          <div class="course-content-teacher">
           <div class="coach-teacher">
                <span class="coach-c">辅导老师：</span>
                <span class="avatar-c">
				          <img src="http://s02.xesimg.com/teacher/2013/08/26/13774956202468.jpg" alt="" class="coach-avatar-info">
				      </span>
                <span class="name-c">王海丰老师</span>
               <!-- <span class="app-dimension-code">
                   <img class="line" src="img/icon-line.png" alt="">
                   <img class="qq-jiaru" src="img/qq_90.png" alt="qq" width="45">
                    <em>
                       加入QQ群咨询<br/>
                       <i style="color:#e74c3c;font-style:normal;">4324134566</i><a href="#" style="float:right;margin:3px 5px 0;"><img src="img/icon-mon.png"/></a>
                   </em>
               </span> -->
                <span class="info-c "><strong class="hotReport">已满</strong><br/>剩余名额</span>
            </div>
        </div>
        <div class="course-serve-list">
            <span class="f-left">课程服务：</span>
            <ul class="xes-serve-list">
                <li>直播课程</li>
                <li><a href="#" target="_blank">24小时答疑</a></li>
                <li><a href="#" target="_blank">考试检测</a></li>
                <li class="disabled"><a href="#" target="_blank">1对1作业批改</a></li>
                <li><a href="#" target="_blank">学期家长会</a></li>
                <li><a href="#" target="_blank">彩色纸质讲义</a></li>
                <li><a href="#" target="_blank">随时退款</a></li>
                <li class="disabled"><a href="#" target="_blank">彩色纸质练习册</a></li>
                <li><a href="#" target="_blank">随时观看回放</a></li>
                <li><a href="#" target="_blank">手机看课</a></li>
            </ul>
        </div>
        <div class="course-end-time">
            <span>07月01日-08月30日每天9:00-11:00上课 </span>
            <span class="time-icon">有效期至2015-07-07</span>
        </div>

        <div class="course-button-list">
            <span class="f-left">
				<button class="btn btn-danger do_not_sign_up">暂时不可报名</button>
			</span>
            <span class="f-left">
				<a class="btn btn-danger btn-join-exam" href="#">预约试听</a>
			</span>
            <span class="collect f-left">
					<a id="collectId" onclick="collect(11323)" href="javascript:void(0);">收藏课程</a>
				</span>
        </div>
    </div>

</div>
<script>
    function qqteacher(){
        var h = $(window).height();
        $('.qq-layer-item').css('height', h);
    }
    qqteacher();
    $('body').on('click','.course-teacher-qq span',function(){
        $(this).parent().remove();
         $('.qq-layer-item').remove();
    });
</script>
