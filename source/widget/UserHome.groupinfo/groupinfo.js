/*
author：LiBo
date：
abstract：the page of the groupinfo in mainWebSite uses vue farmwork,two plugins vue-resource and vue-router.
		besides mCustomScrollbar for the beautiful scrollbar. 	
**/
// 定义
// 总体群组概览
var groupOverview = Vue.extend({
        template: '',
        components: {
            'mygroup': mygroup,
            'dissolvedgroup': dissolvedgroup
        }
    })
// 学科学列表页组件
var groupLists = Vue.extend({
        template: `
	    	<div class="item living_item">
	    		<div class="row">
	    			<img class="teacherimg" v-bind:src=todo.teacherInfo[0].imgUrl v-bind:alt=todo.teacherInfo[0].name>
	    			<div class="main" ref="width">
	    				<div class="floatleft">
	    					<img v-for="(i,index) in todo.term" class="season" v-bind:src=returnsrc(i,index)>
		    			</div>
		    			<div class="footer"><p class="titlep" :style="{ width: calwidth(todo.term) + 'px' }" >{{todo.classGroupName}}</p></div>
	    			</div>	    			
	    			<router-link :to="{path:'groupdetail',query: { id: todo.detailUrl }}" class="btn btn-default link">立即查看</router-link>
	    		</div>
			</div>
		`,
        props: ['todo'],
        methods: {
            //根据数量给定春暑秋寒部分的宽度
            calwidth: function(term) {
                var num = term[0] + term[1] + term[2] + term[3];
                switch (num) {
                    case 0:
                        return 342
                    case 1:
                        return 297
                    case 2:
                        return 277
                    case 3:
                        return 257
                    case 4:
                        return 238
                }
            },
            //根据term数据结构确定返回的图片
            returnsrc: function(i, index) {
                var str = 'http://res14.xesimg.com/i/img/';
                switch (index) {
                    case 0:
                        if (i == 1) {
                            return str + 'chun.png';
                        }
                    case 1:
                        if (i == 1) {
                            return str + 'shu.png';
                        }
                    case 2:
                        if (i == 1) {
                            return str + 'qiu.png';
                        }
                    case 3:
                        if (i == 1) {
                            return str + 'han.png';
                        }
                }
            }
        }
    })
// 用户加入的有效群组组件
var mygroup = Vue.extend({
    template: `
	<div class="mygroup">
	    <ul class="nav nav-tabs">
		    <li role="presentation" class="active">
		    	<router-link to="/">我的班级群</router-link>
		    </li>
		    <li class="pull-right">
		    	<router-link to="/dissolvedgroup">已解散群</router-link>
		    </li>
	    </ul>
	    <div class="filter-public-tab">
	       	<div class="filter-nav-list">
	       		<ul ref="getajax">
	       			<li v-for="(i,index) in alldata.subjectlist" v-on:click="getajax(i,index,$event)" v-bind:class=returnclass(i)> <a v-bind:href=returnhref(i) data-toggle="tab">{{i.name}}</a></li>
	       		</ul>
	       	</div>
	    </div>
	    <div class="course-main-wrap tab-content">
	    	<div v-for="m in alldata.subjectlist" v-bind:class=returncontentclass(m) v-bind:id=m.id>
	    		<group-lists v-for="n in m.data" :key=n.classGroupId :todo=n></group-lists>
	    	</div>
	    </div>
    </div>
	`,
    methods: {
        //绑定dom中的class等属性
        returnhref: function(i) {
            return '#' + i.id
        },
        //默认'全部'类型为active
        returnclass: function(i) {
            if (i.id == 0) {
                return 'active'
            }
        },
        //默认'全部'类型为active
        returncontentclass: function(i) {
            //如果是所有默认为active
            if (i.id == 0) {
                return "myCourse clearfix tab-pane fade in active"
            } else {
                return "myCourse clearfix tab-pane fade"
            }
        },
        //每点击一次学科请求一次data
        getajax: function(i, index, event) {
            var clickli = $(event.target);
            //若点击未活动的请求ajax数据并改变data
            if (clickli.parent().hasClass('active') == false) {
                //此处url为模拟数据，真实接口直接访问i.detailUrl
                var url = './subjectlist.json'
                this.$http.get(url).then(response => {
                    // console.log(response)
                    if (response.status === 200) {
                    	//更新其他学科属性
                    	if(this.alldata.subjectlist[index].data.length==0&&response.body.sign==1){
                    		this.alldata.subjectlist[index].data = response.body.data.classGroupList;
                    	}                        
                        console.log(response)
                    }
                }, (response) => {
                    // error callback
                    console.log(response)
                })
            }
        }
    },
    components: {
        'group-lists': groupLists,
    },
    created() {
        //请求学科数据
        this.$http.get('./subjectlist.json').then(response => {
            // console.log(response)
            if (response.status === 200) {
                var result = response.body.data.subjectList;
                //给所有学科类型列表拼接data属性
                for (var i = 0; i < result.length; i++) {
                    result[i].data = [];
                }
                this.alldata.subjectlist = result;
                console.log(result)
                //若存在数据
                if (result.length != 0) {
                    var obj = result[0];
                    //请求用户所有群组列表数据
                    var url = './0/mygroup.json';
                    this.$http.get(url).then(response => {
                        // console.log(response)
                        if (response.status === 200) {
                            //默认加载全部的数据，点击其他学科按钮时再更新其他学科属性		            	
                            this.alldata.subjectlist[0].data = response.body.data.classGroupList;
                            console.log(response)
                        }
                    }, (response) => {
                        // error callback
                        console.log(response)
                    })
                }
            }
        }, (response) => {
            // error callback
            console.log(response)
        })
    },
    data() {
        return {
            alldata: {
                subjectlist: {},
            },
        }
    }
});
// 用户加入的已解散群组件
var dissolvedgroup = Vue.extend({
        router,
        template: `
	    <ul class="nav nav-tabs">
		    <li role="presentation">
		    	<router-link to="/">我的班级群</router-link>
		    </li>
		    <li class="pull-right active">
		    	<router-link to="/dissolvedgroup">已解散群</router-link>
		    </li>
	    </ul>
	    <div class="row">
	    </div>
    `,
    })
// 群空间资料
var qzone = Vue.extend({
        template: `
	    <div class="qzonetask">
		    <div class="title">
		    	<div class="col-sm-4">
		    	日期
		    	</div>
		    	<div class="col-sm-4">
		    	资料名称
		    	</div>
		    	<div class="col-sm-4">
		    	操作
		    	</div>
		    </div>
		    <div v-for="i in qzonelist" class="item">
		    	<div class="col-sm-4">
		    	{{i.publishTime}}
		    	</div>
		    	<div class="col-sm-4">
		    	{{i.dataName}}
		    	</div>
		    	<div class="col-sm-4">
		    		<button class="btn btn-default button" v-on:click="showLoading(i,$event)">立即查看</button>
		    	</div>
		    </div>
		    <div class="modal fade" id="myQzoneModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
				<div class="modal-dialog dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" 
									aria-hidden="true">×
							</button>
							<h4 class="modal-title" id="myModalLabel">
								资料详情
							</h4>
						</div>
						<div class="modal-body">
							<div class="row">
								<p class="firstp">{{activeData.dataName}}</p>
								<p><span class="lastp">发件人：{{activeData.creator}}</span><span class="spantime">时间：{{activeData.publishTime}}</span></p>
							</div>
							<div class="row">
							</div>
						</div>
						<div class="modal-footer" >
						  	<p class="firstp">{{activeData.dataIntroduction}}</p>
							<div class="scrollbar" ref="scrollbar">
								<div class="row">
									<div v-for="i in activeData.attachment" class="col-sm-6">
										<div class="col-sm-12 main">
											<div class="col-sm-3">
												<img src="http://res14.xesimg.com/i/img/pdf.png">
											</div>
											<div class="col-sm-9">
												<p class="firstpp">{{i.title}}</p>
												<p class="lastpp">{{returnsize(i)}}</p>
											</div>
											<div class="col-sm-12 buttonmain">
												<button class="btn btn-default button" @click="download(i)">{{returntext(i)}}</button>
											</div>	
										</div>								
									</div>
								</div>
							</div>							
						</div>
					</div>
				</div>
			</div>
		</div>
    `,
        props: ['qzonelist'],
        methods: {
        	returntext:function(i){
        		if(i.type=='1'){
        			return '下载附件'
        		}else{
        			return '打开链接'
        		}
        	},
        	returnsize:function(i){
        		if(i.type=="1"){
        			return i.size;
        		}else{
        			return '未知';
        		}
        	},
            showModel: function() {
                var scrollbar = this.$refs.scrollbar;
                if (this.activeData.attachment.length == 0) {
                    $(scrollbar).css('height', '0px')
                } else {
                    $(scrollbar).css('height', '130px')
                }
                $('#myQzoneModal').modal('show')
            },
            //加载数据弹出model
            showLoading: function(i) {
                this.activeData = i
                this.showModel()
            },
            //下载文件
            download:function(i){
            	window.open(i.url);
            }
            // showLoading: function(id,event) {
            // 	var clickbutton=$(event.target);
            // 	//loading状态以及防止二次点击
            // 	clickbutton.html('<i class="fa fa-spinner fa-spin"></i>');
            // 	clickbutton.attr({"disabled":"disabled"});
            // 	var iid =window.location.href.split('?')[1].split('=')[1];
            //     var url = 'http://127.0.0.1:8080/data/UserHome.groupinfo/' + iid + '/'+id+'/taskdetail.json';
            // 	this.$http.get(url).then(response => {
            //         // console.log(response)
            //         if (response.status === 200) {
            //             this.activeData = response.body
            //             console.log(response)
            //             clickbutton.removeAttr('disabled');
            //          clickbutton.html('立即查看'); 
            //             this.showModel()
            //         }
            //     }, (response) => {
            //         // error callback
            //         console.log(response)
            //     })
            //     console.log(id);
            // },
        },
        data() {
            return {
                activeData: {}
            }
        },
        mounted() {
            console.log('mounted', $('#myQzoneModal')) //3 说明此时dom加载完成
            //dom加载完成后加载滚动条

                $(".scrollbar").mCustomScrollbar({
                    theme: "dark-thin",
                    autoHideScrollbar: true
            })
        },
    })
    // 群任务资料
var task = Vue.extend({
        template: `
		    <div class="qzonetask">
		    <div class="title">
		    	<div class="col-sm-4">
		    	日期
		    	</div>
		    	<div class="col-sm-4">
		    	资料名称
		    	</div>
		    	<div class="col-sm-4">
		    	操作
		    	</div>
		    </div>
		    <div v-for="i in tasklist" class="item">
		    	<div class="col-sm-4">
		    	{{i.publishTime}}
		    	</div>
		    	<div class="col-sm-4">
		    	{{i.dataName}}
		    	</div>
		    	<div class="col-sm-4">
		    		<button class="btn btn-default button" v-on:click="showLoading(i,$event)">立即查看</button>
		    	</div>
		    </div>
		    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
				<div class="modal-dialog dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" 
									aria-hidden="true">×
							</button>
							<h4 class="modal-title" id="myModalLabel">
								资料详情
							</h4>
						</div>
						<div class="modal-body">
							<div class="row">
								<p class="firstp">{{activeData.dataName}}</p>
								<p><span class="lastp">发件人：{{activeData.creator}}</span><span class="spantime">时间：{{activeData.publishTime}}</span></p>
							</div>
							<div class="row">
							</div>
						</div>
						<div class="modal-footer" >
						  	<p class="firstp">{{activeData.dataIntroduction}}</p>
							<div class="scrollbar" ref="scrollbar">
								<div class="row">
									<div v-for="i in activeData.attachment" class="col-sm-6">
										<div class="col-sm-12 main">
											<div class="col-sm-3">
												<img src="http://res14.xesimg.com/i/img/pdf.png">
											</div>
											<div class="col-sm-9">
												<p class="firstpp">{{i.title}}</p>
												<p class="lastpp">{{returnsize(i)}}</p>
											</div>
											<div class="col-sm-12 buttonmain">
												<button class="btn btn-default button" @click="download(i)">{{returntext(i)}}</button>
											</div>	
										</div>								
									</div>
								</div>
							</div>							
						</div>
					</div>
				</div>
			</div>
		</div>
		`,
        methods: {
        	returntext:function(i){
        		if(i.type=='1'){
        			return '下载附件'
        		}else{
        			return '打开链接'
        		}
        	},
        	returnsize:function(i){
        		if(i.type=="1"){
        			return i.size;
        		}else{
        			return '未知';
        		}
        	},
            showModel: function() {
                //判断是否显示文档下载列表
                var scrollbar = this.$refs.scrollbar;
                if (this.activeData.attachment.length == 0) {
                    $(scrollbar).css('height', '0px')
                } else {
                    $(scrollbar).css('height', '130px')
                }
                $('#myModal').modal('show')
            },
            //加载数据弹出model
            showLoading: function(i) {
                this.activeData = i
                this.showModel()
            },
            //下载文件
            download:function(i){
            	window.open(i.url);
            }
            //异步加载数据弹出model
            // showLoading: function(id,event) {
            // 	var clickbutton=$(event.target);
            // 	//loading状态以及防止二次点击
            // 	clickbutton.html('<i class="fa fa-spinner fa-spin"></i>');
            // 	clickbutton.attr({"disabled":"disabled"});
            // 	//拼接请求路径
            // 	var iid =window.location.href.split('?')[1].split('=')[1];
            //     var url = 'http://127.0.0.1:8080/data/UserHome.groupinfo/' + iid + '/'+id+'/taskdetail.json';
            // 	//请求可下载列表数据
            // 	this.$http.get(url).then(response => {
            //         // console.log(response)
            //         if (response.status === 200) {
            //             this.activeData = response.body
            //             console.log(response);
            //             clickbutton.removeAttr('disabled');
            //             clickbutton.html('立即查看');  
            //             this.showModel()
            //         }
            //     }, (response) => {
            //         // error callback
            //         console.log(response)
            //     })	        	
            //     console.log(id);
            // },
        },
        data() {
            return {
                activeData: {}
            }
        },
        props: ['tasklist'],
        created() {
            console.log(this.tasklist);
        },
        mounted() {
            console.log('mounted', $('#myModal')) //3 说明此时dom加载完成

            $(".scrollbar").mCustomScrollbar({
                theme: "dark-thin",
                autoHideScrollbar: true
            });
        },
    })
    // 群组详情
var groupdetail = Vue.extend({
        template: `
		<div class="groupdetail">
			<div class="info">
				<div class="col-sm-9">
					<div class="grouptitle">{{obj.classGroupName}}</div>
					<div class="teacherinfo"><span class="gray">主讲老师：</span><span>{{getTeacherName(obj.teacherInfo)}}</span></div>
				</div>
				<div class="col-sm-3">
					<div class="tutoringteacher">
						<img :src=obj.tutoringTeacher.imgUrl class="picture">
						<span class="firstspan">辅导老师：</span><span class="lastspan">{{obj.tutoringTeacher.name}}</span>
					</div>
				</div>
			</div>
			<div class="mytab">
				<ul class="nav nav-tabs" ref="li">
		            <li class="active" v-on:click="changeTab()"><a>群空间资料</a></li>
		            <li v-on:click="changeTab()"><a>群任务资料</a></li>
		        </ul>
		        <div class="tab-content">
			        <div  id="qzone">
			        	<qzone :qzonelist=obj.classGroupSpace ></qzone>
			        </div>
			        <div  class="hiden" id="task">
			        	<task :tasklist=obj.classGroupTask ></task>
			        </div>
		        </div>
	        </div>
	    </div>
		`,
        methods: {
            getTeacherName: function(names) {
                var a = names;
                return a[0].name;
            },
            //点击实现tab切换
            changeTab: function() {
                var ul = this.$refs.li;
                var tabs = $(ul).siblings();
                //改变li
                var activeli = $(ul).find('li.active');
                activeli.removeClass('active');
                activeli.siblings().addClass('active');
                //改变div的显示属性
                var hidentab = tabs.find('.hiden');
                hidentab.removeClass('hiden');
                hidentab.siblings().addClass('hiden');;
            },
        },
        created() {
            var alocation = window.location.href;
            //取到传过来的detailUrl
            var detailUrl =alocation.split('?')[1].split('=')[1];
            //默认请求第一页
            var urll =  detailUrl + '/1';
            var url = decodeURIComponent(urll);
                // console.log(a)
                //请求某一群组任务列表数据
            this.$http.get(url).then(response => {
                // console.log(response)
                if (response.status === 200) {
                    this.obj = response.body.data
                    console.log(this.obj)
                }
            }, (response) => {
                // error callback
                console.log(response)
            })
        },
        data() {
            return {
                obj: {}
            }
        },
        components: {
            'task': task,
            'qzone': qzone,
        }
    })
    // 路由
var routes = [{
    path: '/',
    component: mygroup
}, {
    path: '/dissolvedgroup',
    component: dissolvedgroup
}, {
    path: '/groupdetail',
    component: groupdetail
}, ]

// 创建 router 实例，然后传 `routes` 配置
var router = new VueRouter({
        routes // （缩写）相当于 routes: routes
    })
    // 创建根实例
new Vue({
    el: '#groupinfo',
    router,
    template: '<router-view></router-view>',
    components: {
        'group-overview': groupOverview,
        'group-detail': groupdetail
    }
})
