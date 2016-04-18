<!--
   课程列表：
    @require coursestudycenter.js
    @require cycle.js
    @require raphael.js
    @require ../Module.Modal/Modal.js
    @require ../Public.Dynamic/fresh.less
    @require coursestudycenter.less   
    @require ../Module.Pagination/paginations.js 
    @require ../Public.Module/courses_dialog.js   
    @require ../Public.Module/xue.userinfo.min.js    
-->
<div class="courseList-wrap courseList-label">
    <div class="courseList">
        <div class="study-report">
            <div class="progress-show">
                <div class="processingbar"><font>10%</font><div class="processingbar_bg"></div></div>    
            </div>
            <p>本课程共<span>50</span>次直播</p>
            <p>你已参加<span>10</span>次</p>
            <p>未按时参加<span>5</span>次</p>
        </div>
        <div class="courseList-body">
            <div class="courselist-innner-left">
                <div class="courser-innner-up">
                    <div class="left course-center">
                        <p class="course-title">
                            <span class="course-title-inner">
                                <label class="course-label course-blue-label">直播</label>
                                <a class="title-detail" href="##">【飞遍化学】炸开你的化学世界大门(第三季)&mdash;&mdash;大揭秘 </a>
                            </span>
                        </p>
                        <p class="end-time">
                            <span>有效期至：<strong>2015-9-20</strong></span>
                        </p>

                        <p class="course-title title-more">
                            <a class="title-detail" href="##">第三讲：三角函数的各种知识 </a>
                        </p>

                        <p class="end-time">
                            <span><strong>2015-8-10（周六）9:00—11:30 </strong></span>
                        </p>
                    </div>
                    <div class="more-service left">
                        <h4 class="gray-arrow">更多服务</h4>
                        <ul class="more-list">
                            <li><a href="###">评价</a></li>
                            <li class="drop-course"><a href="###">退课</a></li>
                            <li class="temporary-adjustCourse"><a href="###">临时调课</a></li>
                            <li class="permanent-adjustCourse"><a href="###">永久调课</a></li>
                        </ul>

                        <!-- 退课-->
                        <div class="hide drop-course-wrap">
                            <div class="drop-course-detail-inner">
                                <p class="drop-charge-tip">课程将退<span class="drop-charge">400元</span>到您的账户余额中。</p>
                                <p class="drop-course-btn-wrap"><a href="###" class="drop-course-btn ajust-course-btn">确定</a></p>
                            </div>
                        </div>
                        <!-- 退课详情 -->
                        <div class="hide drop-course-detail">
                            <div class="drop-course-detail-inner">
                                <p class="drop-charge-tip">课程将退<span class="drop-charge">400元</span>到您的账户余额中。</p>
                                <p class="drop-charge-explain">退费说明：</p>
                                <p>直播课剩余场次<span>5</span>，总场次<span>10</span>，退费额=用户实际消费（1000）*（5/10）=<span>500</span>元（使用代金券<span>1</span>张共<span>100</span>元不再返还），如有疑问请拨打客服电话后再进行操作。</p>
                                <p class="drop-course-btn-wrap"><a href="###" class="drop-course-btn ajust-course-btn">确定</a></p>
                            </div>
                        </div>
                        <!-- 退课成功 -->
                        <div class="dropCourse-success-wrap hide">
                            <div class="dropCourse-success-inner">
                                退课成功！
                            </div>
                        </div>
                        <!-- 临时调课 -->
                        <div class="hide temporary-adjust-course-detail">
                            <div class="temporary-adjust-course-detail-inner">
                                <p>周六有事不能按时才加直播课？别担心，用临时调课换个上课时间喽。调课结束后自动回到原班级。</p>
                                <p>您还有<span>3</span>次临时调课机会。</p>
                                <ul class="adjust-course-select">
                                    <li class="adjust-course-select-adjusted">
                                        <span>希望调整的场次：</span>
                                        <p>第一场：记叙文的是手形结构</p>
                                    </li>
                                    <li class="adjust-course-select-adjusted">
                                        <span>希望调整的场次：</span>
                                        <p>第一场：记叙文的是手形结构</p>
                                    </li>
                                    <li >
                                        <span>希望调整的场次：</span>
                                        <select>
                                            <option>第一场：记叙文的是手形结构</option>
                                            <option>第一场：记叙文的是手形结构</option>
                                        </select>
                                    </li>
                                    <li >
                                        <span>希望调整的场次：</span>
                                        <select>
                                            <option>第一场：记叙文的是手形结构</option>
                                            <option>第一场：记叙文的是手形结构</option>
                                        </select>
                                    </li>
                                    <li >
                                        <span>希望调整的场次：</span>
                                        <select>
                                            <option>第一场：记叙文的是手形结构</option>
                                            <option>第一场：记叙文的是手形结构</option>
                                        </select>
                                    </li>
                                    <li >
                                        <span>希望调整的场次：</span>
                                        <select>
                                            <option>第一场：记叙文的是手形结构</option>
                                            <option>第一场：记叙文的是手形结构</option>
                                        </select>
                                    </li>
                                </ul>
                                <p class="drop-course-btn-wrap"><a href="###" class="drop-course-btn ajust-course-btn">确定</a></p>
                            </div>
                        </div>
                        <!-- 临时调课成功 -->
                        <div class="temporary-adjust-wrap hide">
                            <div class="drop-course-success-inner temporary-course-success-inner">
                             <p class="temporary-course-success-inner-tip01">调课成功！</p>
                             <p class="temporary-course-success-inner-tip02">已调场次：</p>
                             <p class="temporary-course-success-inner-tip03">第一场：记叙文的是手形结构</p>
                             <p class="temporary-course-success-inner-tip04">2月14号周六早9:00-11:30<span>调至</span>2月15号周六晚19:00-21:00</p>
                         </div>
                     </div>
                     <!-- 永久调课无课可调 -->
                     <div class="hide permanent-adjust-nocourse">
                        <div class='permanent-adjust-nocourse-detail'>
                            <p>当期为续报期，暂时无法永久调课</p>
                            <p>续报期将于<span>2016年9月16日</span>结束，请于续报期结束后调整上课时间，感谢谅解！</p>
                            <p class="drop-course-btn-wrap"><a href="###" class="drop-course-btn ajust-course-btn">确定</a></p>
                        </div>
                    </div>
                    <!-- 永久调课 -->
                    <div class="hide permanent-adjust-course-detail">
                        <div class="permanent-adjust-course-detail-inner">
                            <p class="permanent-adjust-course-titletips">购买时定下的上课时间不合适？用永久调课换个上课时间呗。您还有<span>3</span>次永久调课机会。</p>
                            <p>当前上课时间：<span>2月19号---3月15号 每周六上午9:00-11:30</span></p>
                            <p class="permanent-adjust-course-tips">永久调课不能再回到当前班级。如果上课时间已进行过的场次在新上课时间还未进行，将暂时无法回放已进行过的场次，待新上课时间的对应场次结束后，可观看直播回放。</p>
                            <p>希望上课的时间：灰色时段表示该时段的班级无空余名额</p>
                            <ul class="adjust-course-select">
                                <li><a href="###">一期：7月01-8月30日9:00-11:30</a></li>
                                <li class="permanent-adjust-course-noplace"><span>一期：7月01-8月30日9:00-11:30</span></li>
                                <li><a href="###">一期：7月01-8月30日9:00-11:30</a></li>
                                <li><a href="###">一期：7月01-8月30日9:00-11:30</a></li>
                                <li><a href="###">一期：7月01-8月30日9:00-11:30</a></li>
                                <li><a href="###">一期：7月01-8月30日9:00-11:30</a></li>
                            </ul>
                            <p class="drop-course-btn-wrap"><a href="###" class="drop-course-btn ajust-course-btn">确定</a></p>
                        </div>
                    </div>
                    <!-- 永久调课成功 -->
                    <div class="permanent-adjust-wrap hide">
                        <div class="drop-course-success-inner permanent-course-success-inner">
                         <p class="permanent-course-success-inner-tip01">调课成功！</p>
                         <p class="permanent-course-success-inner-tip02">请牢记调整后的上课时间：<span>一期：7月01日-8月30日9:00-11:30</span></p>
                     </div>
                 </div>
             </div>
         </div>
         <p class="amount-show">
            <a href="##" class="btn-danger btn "><em class="button-icon icon-just-white"></em>立即听课</a>
            <a href="##" class="btn btn-default liveHelp-btn" data-original-title="" title="">课程大纲<label class="newLabel">5</label></a>
            <a href="##" class="btn btn-default last listTest-btn" data-original-title="" title="">随堂测<label class="newLabel homeworkLabel">10</label></a>
            <a href="##" class="btn btn-default ">录播视频</a>
            <a href="##" class="btn btn-default courseList-material">讲义/资料</a>
            <a href="##" class="btn btn-default courseList-exam">考试</a>    
        </p>
        <div class="list-help-pop hide"><p>你有<span>N</span>场直播未完成，赶紧去看回放吧</p></div>
        <ul class="listTest-pop hide">
            <li><span>5</span>份作业已批改完成</li>
            <li><span>2</span>份作业已驳回</li>
            <li><span>3</span>份作业待提交</li>
        </ul>
    </div>
    <div class="courseList-teacher">
        <div class=" teacher-main teacher-main-border">
            <div class="avatar-photo">
                <a href="###" class="QR-code-hover" data-container="body">
                    <img src="img/default_photo.png">
                </a>
                <div class="QR-code-instructor hide">
                   <div class="QR-code-inner">
                       <div class="QR-code">
                        <img src="img/QR-code.png">
                    </div>
                    <p class="QR-code-prompt">用微信扫一扫上面二维码</br>或直接搜索微信号</p>
                    <p class="Prompt-qq">15800798@qq.com</p>
                </div>
            </div>
        </div>
        <div class="coach-con">
            <p class="teacher-coach">张三</p>
            <p class="teacher-majar"><a href="##" class="phone_icon">找辅导老师</a></p>
        </div>
    </div>

    <div class=" teacher-main  majar-teacher">
        <div class="avatar-photo">
            <img src="img/default_photo.png">
        </div>
        <div class="coach-con">
            <p class="teacher-coach">宋泽穹</p>
            <p class="teacher-majar"><a href="##" class="phone_icon">去老师主页</a></p>
        </div>
    </div>
</div>
</div>
</div>
<div class="label-study-wrap">
    <label class="label-study label-delay label-delayed">已延期</label>
    <label class="label-study label-continun">续报</label>
    <label class="label-study label-sheng">升级</label>
</div>
</div>
<div class="courseList-wrap courseList-label">
    <div class="courseList">
        <div class="study-report">
            <div class="progress-show">
                <div class="processingbar"><font>30%</font><div class="processingbar_bg"></div></div>    
            </div>
            <p>本课程共<span>50</span>次直播</p>
            <p>你已参加<span>10</span>次</p>
            <p>未按时参加<span>5</span>次</p>
        </div>
        <div class="courseList-body">
            <div class="left course-center">
                <p class="course-title">
                    <label class="course-label course-blue-label">直播</label>
                    <a class="title-detail" href="##">【飞遍化学】炸开你的化学世界大门(第三季)&mdash;&mdash;大揭秘 </a>
                    <span class="change-course">调课中</span>
                    <a href="##" class="course_estimate">评论</a>
                </p>
                <p class="end-time">
                    <span>有效期至：<strong>2015-9-20</strong></span>
                </p>

                <p class="course-title title-more">
                    <a class="title-detail" href="##">第三讲：三角函数的各种知识 </a>
                </p>

                <p class="end-time">
                    <span><strong>2015-8-10（周六）9:00—11:30 </strong></span>
                </p>
                <p class="amount-show">
                    <a class="btn-danger btn " href="##"><em class="button-icon icon-just-white"></em>立即听课</a>
                    <a class="btn btn-default liveHelp-btn" href="##" >课程大纲<label class="newLabel">5</label></a>
                    <a class="btn btn-default last listTest-btn" href="##">随堂测<label class="newLabel homeworkLabel">10</label></a>
                </p>
                <div class="list-help-pop hide"><p>你有<span>N</span>场直播未完成，赶紧去看回放吧</p></div>
                <ul class="listTest-pop hide">
                    <li><span>5</span>份作业已批改完成</li>
                    <li><span>2</span>份作业已驳回</li>
                    <li><span>3</span>份作业待提交</li>
                </ul>
            </div>
            <div class="more-service left">
                <h4 class="gray-arrow">更多服务</h4>
                <ul class="more-list">
                    <li><a href="###">录播视频</a></li>
                    <li class="courseList-material"><a href="###">资料</a></li>
                    <li class="courseList-exam"><a href="###">考试</a></li>
                </ul>
            </div>

            <div class="courseList-teacher">
                <div class=" teacher-main teacher-main-border">
                    <div class="avatar-photo">
                        <img src="img/default_photo.png">
                    </div>
                    <div class="coach-con">
                        <p class="teacher-coach">张三</p>
                        <p class="teacher-majar"><a href="##" class="phone_icon">找辅导老师</a></p>
                    </div>
                </div>

                <div class=" teacher-main  majar-teacher">
                    <div class="avatar-photo">
                        <img src="img/default_photo.png">
                    </div>
                    <div class="coach-con">
                        <p class="teacher-coach">宋泽穹</p>
                        <p class="teacher-majar"><a href="##" class="phone_icon">去老师主页</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="label-study-wrap">
        <label class="label-study label-delay">延期</label>
        <label class="label-study label-continun">续报</label>
        <label class="label-study label-sheng">升级</label>
    </div>
</div>
<div class="courseList-wrap courseList-label">
    <div class="courseList">
        <div class="study-report">
            <div class="progress-show">
                <div class="processingbar"><font>60%</font><div class="processingbar_bg"></div></div>    
            </div>
            <p>本课程共<span>50</span>次直播</p>
            <p>你已参加<span>10</span>次</p>
            <p>未按时参加<span>5</span>次</p>
        </div>
        <div class="courseList-body">
            <div class="left course-center">
                <p class="course-title">
                    <label class="course-label course-blue-label">直播</label>
                    <a class="title-detail" href="##">【飞遍化学】炸开你的化学世界大门(第三季)&mdash;&mdash;大揭秘 </a>
                    <a href="##" class="course_estimate">评论</a>
                </p>
                <p class="end-time">
                    <span>有效期至：<strong>2015-9-20</strong></span>
                </p>

                <p class="course-title title-more">
                    <a class="title-detail" href="##">第三讲：三角函数的各种知识 </a>
                </p>

                <p class="end-time">
                    <span><strong>2015-8-10（周六）9:00—11:30  一天后提供回看</strong></span>
                </p>
                <p class="amount-show">
                    <button disabled="" class="btn  course-btn-gray">等待回看</button>
                    <a class="btn btn-default " href="##">课程大纲</a>
                    <a class="btn btn-default  last" href="##">随堂测</a>
                </p>
            </div>
            <div class="more-service left">
                <h4 class="gray-arrow">更多服务</h4>
                <ul class="more-list">
                    <li><a href="###">录播视频</a></li>
                    <li class="courseList-material"><a href="###">资料</a></li>
                    <li class="courseList-exam"><a href="###">考试</a></li>
                </ul>
            </div>
            <div class="courseList-teacher">
                <div class=" teacher-main teacher-main-border">
                    <div class="avatar-photo">
                        <img src="img/default_photo.png">
                    </div>
                    <div class="coach-con">
                        <p class="teacher-coach">张三</p>
                        <p class="teacher-majar"><a href="##" class="phone_icon">找辅导老师</a></p>
                    </div>
                </div>

                <div class=" teacher-main  majar-teacher">
                    <div class="avatar-photo">
                        <img src="img/default_photo.png">
                    </div>
                    <div class="coach-con">
                        <p class="teacher-coach">宋泽穹</p>
                        <p class="teacher-majar"><a href="##" class="phone_icon">去老师主页</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="label-study-wrap">
        <label class="label-study label-delay">延期</label>
        <label class="label-study label-continun">续报</label>
    </div>
</div>
<div class="courseList-wrap courseList-label">
    <div class="courseList">
        <div class="study-report">
            <div class="progress-show">
                <div class="processingbar"><font>100%</font><div class="processingbar_bg"></div></div>    
            </div>
            <p>本课程共<span>50</span>次直播</p>
            <p>你已参加<span>10</span>次</p>
            <p>未按时参加<span>5</span>次</p>
        </div>
        <div class="courseList-body">
            <div class="left course-center">
                <p class="course-title">
                    <label class="course-label course-blue-label">直播</label>
                    <a class="title-detail" href="##">【飞遍化学】炸开你的化学世界大门(第三季)&mdash;&mdash;大揭秘 </a>
                    <a href="##" class="course_estimate">评论</a>
                </p>
                <p class="end-time">
                    <span>有效期至：<strong>2015-9-20</strong></span>
                </p>

                <p class="course-title title-more">
                    <a class="title-detail" href="##">第三讲：三角函数的各种知识 </a>
                </p>

                <p class="end-time">
                    <span><strong>2015-8-10（周六）9:00—11:30  一天后提供回看</strong></span>
                </p>
                <p class="amount-show">
                    <a class="btn btn-primary " href="##"><em class="button-icon icon-will-red"></em>立即回看</a>
                    <a class="btn btn-default  " href="##">课程大纲</a>
                    <a class="btn btn-default   last" href="##">随堂测</a>
                </p>
            </div>
            <div class="more-service left">
                <h4 class="gray-arrow">更多服务</h4>
                <ul class="more-list">
                    <li><a href="###">录播视频</a></li>
                    <li class="courseList-material"><a href="###">资料</a></li>
                    <li class="courseList-exam"><a href="###">考试</a></li>
                </ul>
            </div>
            <div class="courseList-teacher">
                <div class=" teacher-main teacher-main-border">
                    <div class="avatar-photo">
                        <img src="img/default_photo.png">
                    </div>
                    <div class="coach-con">
                        <p class="teacher-coach">张三</p>
                        <p class="teacher-majar"><a href="##" class="phone_icon">找辅导老师</a></p>
                    </div>
                </div>
                <div class=" teacher-main  majar-teacher">
                    <div class="avatar-photo">
                        <img src="img/default_photo.png">
                    </div>
                    <div class="coach-con">
                        <p class="teacher-coach">宋泽穹</p>
                        <p class="teacher-majar"><a href="##" class="phone_icon">去老师主页</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div class="label-study-wrap">
        <label class="label-study label-delay">延期</label>
        <label class="label-study label-continun">续报</label>
    </div>
</div>
<div class="courseList-wrap courseList-label">
    <div class="courseList courseList-record">
        <div class="study-report">
            <div class="progress-show">
                <div class="processingbar"><font>80%</font><div class="processingbar_bg"></div></div>    
            </div>
            <p>本课程共<span>50</span>节</p>
            <p>你已学习<span>10</span>节</p>
            <p>超过<span>20%</span>的学员</p>
        </div>
        <div class="courseList-body">
            <div class="left course-center">
                <p class="course-title">
                    <label class="course-label course-green-label">录播</label>
                    <a class="title-detail" href="##">【飞遍化学】炸开你的化学世界大门(第三季)&mdash;&mdash;大揭秘 </a>
                    <a href="##" class="course_estimate">评论</a>
                </p>
                <p class="end-time">
                    <span>剩余天数：<strong>100</strong>天</span>
                </p>

                <p class="course-title title-more">
                    <span>上次学到：</span><a class="title-detail" href="##">第三讲：三角函数的各种知识 </a>
                </p>

                <p class="end-time">
                </p>
                <p class="amount-show">
                    <a class="btn-danger btn " href="##"><em class="button-icon icon-will-red"></em>立即学习</a>
                    <a class="btn btn-default " href="##">课程大纲</a>
                    <a class="btn btn-default " href="##">讲义/资料</a>
                    <a class="btn btn-default last " href="##"><label class="newLabel live-label">live</label>直播辅导</a>
                </p>
            </div>

            <div class="more-service left">
                <h4 class="gray-arrow">更多服务</h4>
                <ul class="more-list">
                    <li class="courseList-material"><a href="###">资料</a></li>
                    <li class="courseList-exam"><a href="###">考试</a></li>
                </ul>
            </div>
            <div class="courseList-teacher ">
                <div class=" teacher-main teacher-main-border majar-items">
                    <ul class="avatar-items">
                        <li>
                            <a class="avatar-photo">
                                <img src="img/default_photo.png">
                            </a>
                            <div class="coach-con">
                                <p class="teacher-coach">张三</p>
                                <p class="teacher-majar"><a href="##" class="phone_icon">去老师主页</a></p>
                            </div>
                        </li>
                        <li>
                            <a class="avatar-photo">
                                <img src="img/default_photo.png">
                            </a>
                            <div class="coach-con">
                                <p class="teacher-coach">宋泽穹</p>
                                <p class="teacher-majar"><a href="##" class="phone_icon">去老师主页</a></p>
                            </div>
                        </li>
                    </ul>
                    <div class="avatar-roll">
                        <a href="javascript:void(0);" class="prev none">
                            <em class="icon-chevron-left">左</em>
                        </a>
                        <a href="javascript:void(0);" class="next">
                            <em class="icon-chevron-right">右</em>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="label-study-wrap">
        <label class="label-study label-delay">延期</label>
        <label class="label-study label-continun">续报</label>
    </div>
</div>