<!--
 	@require ui-course-info.js
    @require ui-course-info.less
-->
<ul class="ui-nav-link">
	<li class="current">直播大纲(10)</li>
	<li>点播大纲(10)</li>
	<li>课程介绍</li>
	<li class="last">课程评价</li>
</ul>
<div class="course-info-box">
	<div class="course-detail" style="display:block;" id="lookTime">
		<table class="table table_outline">
			<tbody>
				<tr>
					<th class="t-left">讲名称</th>
					<th>上课日期</th>
					<th>上课时间</th>
					<th>学习状态</th>
				</tr>
				<tr>
					<td class="t-left">
						<span class="live_teach">[直播辅导]</span>
						计算机爱空间上的课教案和时间肯
					</td>
					<td>7月1好</td>
					<td>17:00-19:00</td>
					<td>
						<a href="#">立即试听</a>
					</td>
				</tr>
				<tr>
					<td class="t-left">
						<span class="live_teach">[直播辅导]</span>
						计算机爱空间上的课教案和时间肯
					</td>
					<td>7月1好</td>
					<td>17:00-19:00</td>
					<td>
						<a href="#">观看回放</a>
					</td>
				</tr>
				<tr>
					<td class="t-left">
						<span class="live_teach">[直播辅导]</span>
						计算机爱空间上的课教案和时间肯
					</td>
					<td>7月1好</td>
					<td>17:00-19:00</td>
					<td>
						<span>未开始</span>
					</td>
				</tr>
				<tr>
					<td class="t-left">
						<span class="live_teach">[直播辅导]</span>
						计算机爱空间上的课教案和时间肯
					</td>
					<td>7月1好</td>
					<td>17:00-19:00</td>
					<td>
						<a href="#">立即试听</a>
					</td>
				</tr>
			</tbody>
		</table>
		<table class="table table_outline">
			<tbody>
				<tr>
					<th>状态</th>
					<th>讲次</th>
					<th>名称</th>
				</tr>
				<tr>
					<td>
						<span class="goline">已上线</span>
					</td>
					<td>第一讲：</td>
					<td class="t-left">圆初步（一）</td>
				</tr>
				<tr>
					<td>
						<span class="goline">已上线</span>

					</td>
					<td>第二讲：</td>
					<td class="t-left">圆拓展（一）</td>
				</tr>
				<tr>
					<td>
						<span class="goline">已上线</span>

					</td>
					<td>第三讲：</td>
					<td class="t-left">圆初步（二）</td>
				</tr>
			</tbody>
		</table>
	</div>
	<!-- 直播大纲 -->
	<div class="course-detail">
		<table class="table table_outline">
			<tbody>
				<tr>
					<th class="t-left">讲名称</th>
					<th>上课日期</th>
					<th>学习状态</th>
				</tr>
				<tr>
					<td class="t-left">
						<span class="live_teach">[直播辅导]</span>
						计算机爱空间上的课教案和时间肯
					</td>
					<td>2015-10-11至2015-11-11</td>
					<td>
						<a href="#" style="color:red;">进行中</a>
					</td>
				</tr>
				<tr>
					<td class="t-left">
						<span class="live_teach">[直播辅导]</span>
						计算机爱空间上的课教案和时间肯
					</td>
					<td>2015-10-11至2015-11-11</td>
					<td>
						<span>未开始</span>
					</td>
				</tr>
				<tr>
					<td class="t-left">
						<span class="live_teach">[直播辅导]</span>
						计算机爱空间上的课教案和时间肯
					</td>
					<td>2015-10-11至2015-11-11</td>
					<td>
						<span class="notStart">已结束</span>
					</td>
				</tr>
				<tr>
					<td class="t-left">
						<span class="live_teach">[直播辅导]</span>
						计算机爱空间上的课教案和时间肯
					</td>

					<td>2015-10-11至2015-11-11</td>
					<td>
						<span>未开始</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<!-- 点播大纲 -->
	<div class="course-detail">
		<dl>
			<dt>课程有效期</dt>
			<dd>
				本课程有效期自购买之日开始计算，请于 <font color="red">2015-08-31</font>
				学完，合理安排学习时间。
			</dd>
		</dl>
		<dl>
			<dt>课程更新时间</dt>
			<dd>
				本课程更新于 <font color="red">2013-04-23</font>
				。
			</dd>
		</dl>
	</div>
	<!-- 课程介绍 -->
	<div class="course-detail">
	<!-- 未登录状态下显示立即登录 -->
		<div class="detail-login">
			购买课程后才可以发表评价哦！
			<a href="http://login.xueersi.com/login/aHR0cDovL3d3dy54dWVlcnNpLmNvbS9rYy82NjE5P2lzQ29tbWVudCNjb21tZW50">立即登录</a>
		</div>
		<!-- 未登录状态下显示立即登录 end-->
		<!-- 评论发表框 -->
            <form action="javascript:void(0);" class="comment_form" id="course_comm_form">
               <div class="comment_title">评输入您对课课的评价</div>
                <div class="comment_textarea">
                    <textarea name="" id="comm_content" cols="30" rows="10"></textarea>
                </div>
                <div class="comment_func">
                    <div class="comment_tips" id="course_comm_tips">请填写内容，长度在1~140之间</div>
                    <input id="course_comm_courseID" name="comm_courseid" type="hidden" value="6619">
                    <div class="comment_button">
                        <button style="width:50px;" class="btn btn-info btn_submit" type="submit" name="comm-submit">评价</button>
                    </div>
                </div>
            </form>
		<!-- 评论发表框 end-->
		<!-- 评价列表 -->
		<div class="comment-detail-wrap">
			<div class="comment-detail-list">
				<div class="user-pic">
					<p class="pic">
						<img width="40" height="40" src="http://file.xueersi.com/award/boy/small_00002.jpg"></p>
					<p title="小芋头s" class="name">小芋头s</p>
					<p title="湖南省" class="site">湖南省</p>
				</div>
				<div class="user-text-box">
					<p class="text">中国人所qqqqqqqq</p>
					<p class="time">2015-11-05 11:07:46</p>
				</div>
			</div>
		</div>
	</div>
	<!-- 课程评价 end-->
</div>