<!--
    @require homework.less
    @require ../Module.popover/xue.popover.js
    @require homework.ImageSet.min.js
    @require homework.ImageTrans.min.js
    @require homework.js
-->
<div class="homework-wrapper-container">

	<!--交作业头部开始-->
	<div class="homework-header">
		<!--作业驳回的提示开始-->
		<!-- <p><i></i><span>作业已被驳回！ 原因：图片不清晰，请尽快重新提交！</span></p> -->
		<!--作业驳回的提示开始-->
		<h2>
			<span class="homework-name pull-left">第三次作业 三角函数</span>
			<span class="homework-status homework-status-yellow pull-left">已驳回</span>
			<i class="pull-left"></i>
			<!--提醒批改作业开始-->
			<button class="homework-remind-btn  pull-right" data-toggle="modal" data-target="#homework-dialog-remind">提醒</button>
			<span class="pull-right">提醒老师尽快为我批改</span>
			<!--提醒批改作业结束-->
		</h2>
	</div>	
	<!--交作业头部结束-->

	<!--交作业正文开始-->
	<div class="homework-image-box" id="homework-Image-box-1" data-zoom="true">
		<div class="homework-image-area">
			<div class="homework-Thumbnails-box pull-left">
				<div class="homework-page-btn"><i class="homework-prev_btn homework-prev-active"></i></div>
				<div class="homework-Thumbnails-img-list" id="Thumbnails">
					<ul>
						<li>
							<span class="homework-MaskLayer"></span>
							<span class="homework-MaskLayer-num">1</span>
							<img src="img/small3.png" />
							<i></i>
						</li>
						<li>
							<span class="homework-MaskLayer"></span>
							<span class="homework-MaskLayer-num">2</span>
							<img src="http://7sbrvo.com2.z0.glb.qiniucdn.com/homework/img/2015/11/05/14467099031310.png" /><i></i>
						</li>
						<li>
							<span class="homework-MaskLayer"></span>
							<span class="homework-MaskLayer-num">3</span>
							<img src="img/small3.png" /><i></i>
						</li>
						<li>
							<span class="homework-MaskLayer"></span>
							<span class="homework-MaskLayer-num">4</span>
							<img src="img/small2.png" /><i></i>
						</li>
						<li>
							<span class="homework-MaskLayer"></span>
							<span class="homework-MaskLayer-num">5</span>
							<img src="img/small3.png" /><i></i>
						</li>
						<li>
							<span class="homework-MaskLayer"></span>
							<span class="homework-MaskLayer-num">6</span>
							<img src="img/small2.png" /><i></i>
						</li>
						<li><img src="img/small1.png" class="homework-Feedback-small-img"/><i></i></li>
					</ul>
			    </div>
				<div class="homework-page-btn"><i class="homework-next-btn homework-next-active"></i></div>
			</div>
			<div class="homework-bigImg-box">
				<div class="homework-rightMeun pull-right">
					<ul>
						<!-- <li><i class="homework-audio"></i></li> -->
						<li><i class="homework-leftRotate-btn"></i></li>
						<li><i class="homework-rightRotate-btn"></i></li>
						<li><i class="homework-zoom-btn"></i></li>
						<li><i class="homework-zoomout-btn"></i></li>
					</ul>
				</div>
				<div id="homework-ImageTransform-box-1" class="homework-ImageTransform">
					<ul style="display:none">
						<li><img src="img/small3.png" /></li>
						<li><img src="http://7sbrvo.com2.z0.glb.qiniucdn.com/homework/img/2015/11/05/14467099031310.png" /></li>
						<li><img src="img/small3.png" /></li>
						<li><img src="img/small2.png" /></li>
						<li><img src="img/small3.png" /></li>
						<li><img src="img/small2.png" /></li>
						<!-- <li><img src="img/small1.png" /></li> -->
					</ul>
					<!--作业反馈开始-->
					<div class="homework-Feedback hiding">
						<div class="homework-Feedback-cont">
							<div class="homework-Feedback-header pull-left">
								<div class="homework-dialog">
									<p class="homework-tipsInfo">完成作业奖励<em>150</em>学力。</p>
									<p class="homework-tipsInfo">辅导老师额外奖励你<em>150</em>个金币！</p>
								</div>
								<div class="homework-scoreArea">
									<span class="homework-score homework-score-box"  score = "89"></span>
									<span class="homework-scoreLine"></span>
								</div>
							</div>
							<div class="homework-Reviews">
								<h3 class="homework-teacher">老师评语</h3>
								<div class="homework-audio-box" data-url ="我的好兄弟.mp3">
									 <i class="homework-icoAudio"></i>
									 <em>20 "</em>
								</div>
							</div>
							<p class="homework-Feedback-describe">
									32分，满分是50，还是有点偏低。错了一道逻辑推理的题目，和一道零点分段法的题目，这部分要好好再看看课程哦，要学会对题目归纳总结。但是其他题目做得都不错，看得出来暑假还是用心预习了的，字也写得很漂亮，很棒！但是老师还是要小小提醒你一下，看看老师帮你写了多少个解啊，咱们做题的时候一定要规范作答，上了初中，这一点非常重要哦~加油，下一次老师期待你提交上来完美的试卷！
							</p>
							<div class="homework-Feedback-video pull-left">
								<h3>老师推荐你观看以下视频</h3>
								<div class="homework-videoInfo pull-left">
									<ul>
										<li><i></i><a href="">三角函数的概念</a></li>
										<li><i></i><a href="">三角函数的解题技巧</a></li>
									</ul>
								</div>
							</div>		
						</div>
					</div>
					<!--作业反馈结束-->
				</div>
			</div>
		</div>
		<!--查看评论区域开始-->
		<div class="homework-comment-box">
			<div class="homework-star pull-left">
				<span class="pull-left">评价作业批改</span>
				<div class="homework-star-area pull-left">
					<ul class="pull-left">
						<li class="on"></li>
						<li class="on"></li>
						<li class="on"></li>
						<li class="on"></li>
						<li class="on"></li>
					</ul>
					<span class="homework-star-score-num">3</span>
				</div>
			</div>
			<p class="homework-comment">感谢老师的细心批改！感谢老师的细心批改！</p>
			<p class="homework-date">2015-08-09</p>
		</div>
		<!--查看评论区域结束-->
		<!--可以评论区域开始-->
		<div class="homework-comment-box">
			<div class="homework-star pull-left">
				<span class="pull-left">评价作业批改</span>
				<div class="homework-star-area homework-star-area-box pull-left" role="homeworkstarArea">
					<ul class="left">
						<li class="on"></li>
						<li class="on"></li>
						<li class=""></li>
						<li class=""></li>
						<li class=""></li>
					</ul>
					<span class="homework-star-score-num">3</span>
				</div>
			</div>
			<textarea class="homework-comment" placeholder="请对老师的作业批改做出评价，谢谢！"></textarea>
			<div class="homework-submit-box">
				<button class="homework-submit-btn pull-right">提交</button>
			</div>
		</div>
		<!--可以评论区域结束-->
	</div>
	<!--交作业正文结束-->

	<!--交作业正文开始-->
	<div class="homework-image-box" id="homework-Image-box-2" data-zoom="false">
		<div class="homework-image-area">
			<div class="homework-Thumbnails-box pull-left">
				<div class="homework-page-btn"><i class="homework-prev_btn homework-prev-active"></i></div>
				<div class="homework-Thumbnails-img-list">
					<ul>
						<li>
							<span class="homework-MaskLayer"></span>
							<span class="homework-MaskLayer-num">2</span>
							<img src="http://7sbrvo.com2.z0.glb.qiniucdn.com/homework/img/2015/11/05/14467099031310.png" /><i></i>
						</li>
						<li>
							<span class="homework-MaskLayer"></span>
							<span class="homework-MaskLayer-num">1</span>
							<img src="img/small3.png" />
							<i></i>
						</li>
						<li>
							<span class="homework-MaskLayer"></span>
							<span class="homework-MaskLayer-num">3</span>
							<img src="img/small3.png" /><i></i>
						</li>
						<li>
							<span class="homework-MaskLayer"></span>
							<span class="homework-MaskLayer-num">4</span>
							<img src="img/small2.png" /><i></i>
						</li>
						<li>
							<span class="homework-MaskLayer"></span>
							<span class="homework-MaskLayer-num">5</span>
							<img src="img/small3.png" /><i></i>
						</li>
						<li>
							<span class="homework-MaskLayer"></span>
							<span class="homework-MaskLayer-num">6</span>
							<img src="img/small2.png" /><i></i>
						</li>
						<li><img src="img/small1.png" class="homework-Feedback-small-img"/><i></i></li>
					</ul>
			    </div>
				<div class="homework-page-btn"><i class="homework-next-btn homework-next-active"></i></div>
			</div>
			<div class="homework-bigImg-box">
				<div class="homework-rightMeun pull-right">
					<ul>
						<li><i class="homework-audio"></i></li>
						<li><i class="homework-leftRotate-btn"></i></li>
						<li><i class="homework-rightRotate-btn"></i></li>
						<li><i class="homework-zoom-btn"></i></li>
						<li><i class="homework-zoomout-btn"></i></li>
					</ul>
				</div>
				<div id="homework-ImageTransform-box-2" class="homework-ImageTransform">
					<ul style="display:none">
						<li><img src="http://7sbrvo.com2.z0.glb.qiniucdn.com/homework/img/2015/11/05/14467099031310.png" /></li>
						<li><img src="img/small3.png" /></li>
						<li><img src="img/small3.png" /></li>
						<li><img src="img/small2.png" /></li>
						<li><img src="img/small3.png" /></li>
						<li><img src="img/small2.png" /></li>
						<!-- <li><img src="img/small1.png" /></li> -->
					</ul>
					<!--作业反馈开始-->
					<div class="homework-Feedback hiding">
						<div class="homework-Feedback-cont">
							<div class="homework-Feedback-header pull-left">
								<div class="homework-dialog">
									<p class="homework-tipsInfo">完成作业奖励<em>15</em>金币和<em>150</em>学力。</p>
									<p class="homework-tipsInfo">辅导老师额外奖励你<em>150</em>个金币！</p>
								</div>
								<div class="homework-scoreArea">
									<span class="homework-score homework-score-box" score = "189"></span>
									<span class="homework-scoreLine"></span>
								</div>
							</div>
							<div class="homework-Reviews">
								<h3 class="homework-teacher">老师评语</h3>
								<div class="homework-audio-box" data-url ="我的好兄弟.mp3">
									 <i class="homework-icoAudio"></i>
									 <em>5 "</em>
								</div>
							</div>
							<p class="homework-Feedback-describe">
									32分，满分是50，还是有点偏低。错了一道逻辑推理的题目，和一道零点分段法的题目，这部分要好好再看看课程哦，要学会对题目归纳总结。但是其他题目做得都不错，看得出来暑假还是用心预习了的，字也写得很漂亮，很棒！但是老师还是要小小提醒你一下，看看老师帮你写了多少个解啊，咱们做题的时候一定要规范作答，上了初中，这一点非常重要哦~加油，下一次老师期待你提交上来完美的试卷！
							</p>
							<div class="homework-Feedback-video pull-left">
								<h3>老师推荐你观看以下视频</h3>
								<div class="homework-videoInfo pull-left">
									<ul>
										<li><i></i><a href="">三角函数的概念</a></li>
										<li><i></i><a href="">三角函数的解题技巧</a></li>
									</ul>
								</div>
							</div>		
						</div>
					</div>
					<!--作业反馈结束-->
				</div>
			</div>
		</div>
		<!--查看评论区域开始-->
		<div class="homework-comment-box">
			<div class="homework-star pull-left">
				<span class="pull-left">评价作业批改</span>
				<div class="homework-star-area pull-left">
					<ul class="pull-left">
						<li class="on"></li>
						<li class="on"></li>
						<li class="on"></li>
						<li class="on"></li>
						<li class="on"></li>
					</ul>
					<span class="homework-star-score-num">3</span>
				</div>
			</div>
			<p class="homework-comment">感谢老师的细心批改！感谢老师的细心批改！</p>
			<p class="homework-date">2015-08-09</p>
		</div>
		<!--查看评论区域结束-->
		<!--可以评论区域开始-->
		<div class="homework-comment-box">
			<div class="homework-star pull-left">
				<span class="pull-left">评价作业批改</span>
				<div class="homework-star-area homework-star-area-box pull-left" role="homeworkstarArea">
					<ul class="left">
						<li class="on"></li>
						<li class="on"></li>
						<li class=""></li>
						<li class=""></li>
						<li class=""></li>
					</ul>
					<span class="homework-star-score-num">3</span>
				</div>
			</div>
			<textarea class="homework-comment" placeholder="请对老师的作业批改做出评价，谢谢！"></textarea>
			<div class="homework-submit-box">
				<button class="homework-submit-btn pull-right">提交</button>
			</div>
		</div>
		<!--可以评论区域结束-->
	</div>
	<!--交作业正文结束-->
	<!--语音audio按钮开始-->
	<audio class="homework-audio-btn hiding"  id="homework-audio-btn-box" autoplay="true" controls="true" src="img/emote.png"> </audio>
    <!--语音audio按钮结束-->
</div>	
<!-- 图片旋转js -->

<script type="text/javascript">
	$(function(){

		    //缩略图等比例缩放
            homeWork.imageRate('.homework-image-box');
            //语音存在的情况下
            homeWork.audio('.homework-image-box');
            //点击提醒按钮
            homeWork.remind();
            //判断是否存在缩放图片
            $('.homework-image-box').each(function(index){
            	var _isZoom = false;
	            var _homeZoom = $(this).data('zoom');
	            if( _homeZoom ){
	                 _homeZoom = true;
	            }else{
	            	_homeZoom = false;
	            }
	            var _index = index + 1;
	            //轮播图 
				$('#homework-Image-box-'+_index).imagePage({
					bigPic:".homework-ImageTransform",//大图框架
					smallPic:".homework-Thumbnails-img-list",//小图框架
					prev_btn:".homework-prev_btn",//小图左箭头
					next_btn:".homework-next-btn",//小图右箭头
					delayTime:400,//切换一张图片时间
					order:0,//当前显示的图片（从0开始）
					ImageTransform:'homework-ImageTransform-box-'+_index,//旋转大图框架
					zoom:".homework-zoom-btn",//放大按钮
					zoomout:".homework-zoomout-btn",//缩小按钮
					leftRotate:".homework-leftRotate-btn",//向左旋转按钮
					rightRotate:".homework-rightRotate-btn",//向右旋转按钮
					min_picnum:4,//小图默认显示个数
					isZoom:_homeZoom//是否存在旋转缩放 false不存在，true存在
				});

            })

			//分数处理函数
	        homeWork.score('.homework-score-box');

	        //星星评分
	        homeWork.starScore({
	        	 starBox:".homework-star-area-box",//星星评分的框架
		 	     className:"on",//星星选中状态类
		 	     scoreNum:".homework-star-score-num"//显示评分分数的类
	       })
	})
	
</script>
