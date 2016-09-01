$(function() {

    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串

    if ($('#pieData').val()) {
        var json = JSON.parse($('#pieData').val())
    } else {
        return;
    }
    tabOut();
    var json = JSON.parse($('#pieData').val())
    var bodyWidth = $('body').width();
    var data = json.pieData;
    var tScale = window.devicePixelRatio * 20;
    var initialState = json.process;
    var flag = true ;
    /* 全屏滚动效果配置项 */

    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
        css3: true,
        continuousVertical: false,
        controlArrow: false,
        loopBottom: true,
        touchSensitivity: 5,
        navigation: bodyWidth < 768 ? false : true,
        navigationColor: '#fff',
        scrollOverflow: true,
        afterLoad: function(anchorLink, index) {
            $('.section ').eq(index - 1).find('.title').css({
                animation: 'bounceInDown 1s',
                opacity: 1
            })
            if ($('body').width() >= 768) {
                $('.arrow-animation').hide()
            }
            switch (index) {
                case 2:
                    $('.process').show()
                    init()
                    break;
                case 3:
                    tabIn()
                    break;
            }
        },
        onLeave: function(index) {
            $('.section ').eq(index - 1).find('.title').css({
                animation: '',
                opacity: 0
            })
            switch (index) {
                case 3:
                    tabOut();
                    break;
            }
        }
    });

    if (bodyWidth <= 768 ) {
        if(userAgent.indexOf('Mac OS X') > 0){
            tScale = window.devicePixelRatio *8;
        }
        else{
            tScale = window.devicePixelRatio *5;

        }
    }
    $('.section').css({
        opacity: 1
    })
    $('.section-1 .title').css({
        animation: 'bounceInDown 1s',
        opacity: 1
    })
    var l = $('.section-3 .item').length;
    var canvas = document.getElementById('pie');
    var cxt = canvas.getContext("2d");
    canvas.height = canvas.width = bodyWidth * 0.8 > 400 ? 400 : bodyWidth * 0.8;

    if ($('body').height() <= 480) {

        canvas.height = canvas.width = bodyWidth * 0.6;
    }
    var w = canvas.width,
        h = canvas.height;
    var deg = Math.PI / 180;
    cxt.font = 'normal normal bold 8px 宋体';
    if (bodyWidth >= 500) {
        cxt.font = 'normal normal bold 16px 宋体';
    }
    

    /* canvas背景绘制 */

    cxt.beginPath()
    cxt.fillStyle = 'rgba(255,255,255,0.1)';
    cxt.arc(w / 2, h / 2, w / 2 - 5, 0, 360 * deg);
    cxt.fill();
    cxt.closePath();


    $('.wrap ').css({
        height: $('.wrap').width() >= 400 ? 420 : $('.wrap').width() + 2,
        width: $('.wrap').width() >= 400 ? 420 : $('.wrap').width() + 2,
    })
    if (bodyWidth > 768) {
        $('.wrap').css({
            marginLeft: $('.wrap').width() >= 400 ? -210 : -1 - $('.wrap ').width() / 2
        })
        $('.wrap + div').addClass('subjectWrap').css({
        })
        $('.section-2').css({maxWidth:1980})
        $('.section-3 .title').css({marginBottom:100})
    }

    $('.section-6 img,.section-7 img').css({
        height: $('body').height() * 0.23
    })

    /* 适配Mac本 */

    if (userAgent.indexOf('Mac OS X') > 0 && bodyWidth>768) {
        $('body ').addClass('mac')
        $('.stateWrap').css({position:'relative',top:-120})
        $('.wrap').css({
            width: 318,
            height: 318,
            marginLeft: -160,
            bottom: 80
        })
        $('canvas').css({width:300,height:300})
    }
    /* 图片点击放大效果 */

    $('.section-6 img ').on('click', function() {
        $('.cover').html(' ')
        $(this).clone().css({
            height: $('body').height() * 0.8,
            marginTop: -$('body').height() * 0.4
        }).appendTo($('.cover'))
        $('.cover').fadeIn().on('click', function() {
            $('.cover').fadeOut().html(' ')
            $(this).off('click')
        })
    })
    $('.section-7 img').on('click', function() {
        $('.cover').html(' ')
        $(this).clone().css({
            height: $('body').height() * 0.8,
            marginTop: -$('body').height() * 0.4
        }).appendTo($('.cover'))
        $('.cover').fadeIn().on('click', function() {
            $('.cover').fadeOut().html(' ')
            $(this).off('click')
        })
    })
    $('#pieData').remove()

    $('.section-3 .item').on('click', function() {
        $('.section-3 .tabs').append($(this));
        tabClick();
    })

    tabOut();


    /* 状态初始化函数 */

    function start(process) {
        $('.wrap > p:nth-child(2)').html(json.totalComplete[process] + '%')
        if (process == 1) {
            drawPie(1);
            $('.section-2 .process').eq(json.process - 1).css({
                right: '40vw',
                top: 'calc(5vw - 26px)'
            })
        } else if (process == 2) {
            drawPie();
            $('.section-2 .process').eq(0).css({
                right: '70vw',
                top: -26
            }).find('.ball').addClass('active')
            $('.section-2 .process').eq(1).css({
                right: '40vw',
                top: 'calc(5vw - 26px)'
            })
            $('.section-2 .process').eq(2).css({
                right: '-20vw',
                top: 'calc(30vw - 18px)'
            })
        } else if (process == 3) {
            drawPie();
            $('.section-2 .process').eq(0).css({
                right: '100vw',
                top: 'calc(5vw - 26px)'
            })
            $('.section-2 .process').eq(1).css({
                right: '70vw',
                top: -26
            }).find('.ball').addClass('active')
            $('.section-2 .process').eq(2).css({
                right: '40vw',
                top: 'calc(5vw - 26px)'
            })

        } else if (process == 4) {
            drawPie();
            $('.section-2 .process').eq(0).css({
                right: '160vw',
                top: 'calc(30vw - 18px)'
            })
            $('.section-2 .process').eq(1).css({
                right: '100vw',
                top: 'calc(5vw - 26px)'
            })
            $('.section-2 .process').eq(2).css({
                right: '70vw',
                top: -26
            }).find('.ball').addClass('active')
        }

        $('.arrow-animation').each(function(index) {
            $(this).on('click', function() {
                $.fn.fullpage.moveTo(index + 2);
            })
        })
    }

    function startPC(process) {
        $('.wrap > p:nth-child(2)').html(json.totalComplete[process] + '%')
        if (process == 1) {
            drawPie(1);
            $('.section-2 .process').hide().eq(json.process - 1).show().css({
                right: 297,
                top: 22
            })

        } else if (process == 2) {
            drawPie();
            $('.section-2 .process').eq(0).show().css({
                right: 539,
                top: -26
            }).find('.ball').addClass('active')
            $('.section-2 .process').eq(1).show().css({
                right: 297,
                top: 22
            })
            $('.section-2 .process').eq(2).css({
                right: '-20vw',
                top: 'calc(25vw - 38px)'
            })
        } else if (process == 3) {
            drawPie();
            $('.section-2 .process').eq(0).show().css({
                right: 781,
                top: 22
            })
            $('.section-2 .process').eq(1).show().css({
                right: 539,
                top: -26
            }).find('.ball').addClass('active')
            $('.section-2 .process').eq(2).show().css({
                right: 297,
                top: 22
            })
        } else if (process == 4) {
            drawPie();
            $('.section-2 .process').eq(0).css({
                right: '100vw',
                top: 'calc(40vw - 38px)'
            })
            $('.section-2 .process').eq(1).show().css({
                right: 781,
                top: 22
            })
            $('.section-2 .process').eq(2).show().css({
                right: 539,
                top: -26
            }).find('.ball').addClass('active')
        }

        $('.arrow-animation').each(function(index) {
            $(this).on('click', function() {
                $.fn.fullpage.moveTo(index + 2);
            })
        })
    }

    /* 进程切换函数 */

    $('.ball').each(function(index) {
        $(this).on('click', function() {
            if (initialState == 2 && index == 1) {
                alert('随堂测未提交或老师未批改，请在批改完成之后查看')
                return
            }
            if (initialState == 3 && index == 2) {
                alert('订正未完成，请在订正完成之后查看')
                return
            }
            var turnDeg = 360 * (index + 1) - 90;
            $('canvas').css({
                transform: 'rotate(' + turnDeg + 'deg)',
                transition: 'all .5s linear'
            })
            json.process == 1 ? '' : json.process = index + 2
            switch (json.process) {
                case 1:
                    if (json.isOnLive == 1) {
                        $('.state .time').html('直播未结束');
                    } else {
                        $('.state .time').html('直播未开始');
                    }

                    break;
                case 2:
                    if (json.statusTime.liveJoinTime == 0) {
                        $('.state .time').html('缺课');
                    } else {
                        $('.state .time').html(json.statusTime.liveJoinTime);
                    }
                    break;
                case 3:
                    $('.state .time').html(json.statusTime.homeworksTime);
                    break;
                case 4:
                    $('.state .time').html('已订正');
                    break;
            }
            cxt.clearRect(0, 0, canvas.width, canvas.height)
            cxt.beginPath()

            cxt.fillStyle = 'rgba(255,255,255,0.1)';
            cxt.arc(w / 2, h / 2, w / 2 - 5, 0, 360 * deg);
            cxt.fill();
            cxt.closePath();
            $('.ball').removeClass('active')
            $('.process').css({
                margin: 0
            })
            bodyWidth >= 980 ? startPC(json.process) : start(json.process)
            $('.state .time').fadeOut()
            setTimeout(function() {
                $('.state .time').fadeIn()
            })
        })
    })

    /* 饼图初始变化函数 */
    function init() {
        $('.section-2 .process .ball').eq(0).click()
        if (initialState >= 3) {
            setTimeout(function() {
                $('.section-2 .process .ball').eq(1).click()
            }, 3000)
            if (initialState == 4) {
                setTimeout(function() {
                    $('.section-2 .process .ball').eq(2).click()
                }, 6000)
            }
        }
    }



    /* 第三屏页卡切换函数 */
    function tabClick() {
        $('.section-3 .item').each(function(index) {
            $('.cover').html(' ')
            $(this).css({
                top: 40 * (4 - l + index),
                zIndex: index,
            })
            var _html = $(this).html() + '<button class="close">X</button>'
            $('.cover').html(_html).addClass('tab').show()
        })
        $('.section-3 .item').find('span:last-child').show();
        $('.section-3 .item').eq(l - 1).find('span:last-child').hide();

    };

    $('body').on('click', '.cover .close', function() {
        $('.cover').hide().removeClass('tab')
    })

    /* 第三屏页卡动画效果 */
    function tabOut() {
        $('.section-3 .item').each(function(index) {
            $(this).css({
                top: 40 * (4 - l + index) + 4 * $(this).height(),
                zIndex: index,
            })
        })
    }

    function tabIn() {
        $('.section-3 .item').each(function(index) {
            $(this).css({
                top: 40 * (4 - l + index),
                zIndex: index,
                left: bodyWidth>=1024?100:'10%'
            })
        })
    }
    var wrapWidth = $('.section-2 .wrap').width()
    /* 扇形绘制函数 */
    function draw(cxt, x, y, radius, sDeg, eDeg, iDeg, text, color) {
        // 初始保存
        cxt.save();
        // 位移到目标点
        cxt.translate(x, y);
        cxt.beginPath();
        // 画出圆弧
        cxt.arc(0, 0, radius, sDeg, eDeg);
        // 再次保存以备旋转
        cxt.save();
        // 旋转至起始角度
        cxt.rotate(eDeg);
        // 移动到终点，准备连接终点与圆心
        cxt.moveTo(radius, 0);
        // 连接到圆心
        cxt.lineTo(0, 0);
        // 还原
        cxt.restore();
        // 旋转至起点角度
        cxt.rotate(sDeg);
        // 从圆心连接到起点
        cxt.lineTo(radius, 0);
        cxt.closePath();
        // 还原到最初保存的状态
        cxt.fillStyle = color;
        cxt.fill();
        cxt.fillStyle = '#27294f';
        cxt.font = 1 * tScale + "px 微软雅黑";
        cxt.restore();
    }

    function drawBg(cxt, x, y, radius, sDeg, eDeg, iDeg, text, color) {
        // 初始保存
        cxt.save();
        // 位移到目标点
        cxt.translate(x, y);
        cxt.beginPath();
        // 画出圆弧
        cxt.arc(0, 0, radius, sDeg, eDeg);
        // 再次保存以备旋转
        cxt.save();
        // 旋转至起始角度
        cxt.rotate(eDeg);
        // 移动到终点，准备连接终点与圆心
        cxt.moveTo(radius, 0);
        // 连接到圆心
        cxt.lineTo(0, 0);
        // 还原
        cxt.restore();
        // 旋转至起点角度
        cxt.rotate(sDeg);
        // 从圆心连接到起点
        cxt.lineTo(radius, 0);
        cxt.closePath();
        // 还原到最初保存的状态
        cxt.fillStyle = color;
        cxt.fill();
        cxt.restore();

    }



    /* canvas 饼图绘制 */
    function drawPie() {
        color = ["#ffc709", "#f7941e", "#c4d600", "#77c043", "#3bafda", "#4f2560", "#732282", "#a62451", "#f05327", "#c74126", "#dabc55", "#65da55", "#b4bf3a", "#288aaf", "#3b7bda", "#724186", "#9d69b2", "#b32136", "#e3233e", "#55c3da"]
        number = ['一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十',]
        var startDeg = 0;
        var all = 1;
        var blankR = 50;
        if ($('body').height() <= 480) {
            blankR = 30;
        }
        for (var i = 0; i < data.length; i++) {
            var iDeg = data[i].total * 360;
            var e = 0;
            cxt.fillStyle = '#fff';
            var r = (data[i].complete[json.process] * (w / 2 - blankR)) + blankR;

            if(flag == true){
                var halfDeg = (startDeg * deg+ (startDeg + iDeg) * deg)/2
                var p = $('<p></p>')
                var wrap = $('.section-2 .wrap')
                p.html('课程'+number[i])
                p.css({
                    position: 'absolute',
                    left: wrapWidth / 2 + Math.sin(halfDeg) * 100 - 20,
                    top: wrapWidth / 2 - Math.cos(halfDeg) * 100 - 15,
                })
                $('.subjectColor').eq(i).css({color:color[i]})
                p.appendTo(wrap)
            }

            if (data.length > 1) {
                drawBg(cxt, w / 2, h / 2, w / 2 - 5, startDeg * deg, (startDeg + 1) * deg, iDeg, data[i].name, 'rgba(255,255,255,0.2)');
                draw(cxt, w / 2, h / 2, r > (w / 2 - 5) ? (w / 2 - 5) : r, (startDeg + 1) * deg, (startDeg + iDeg) * deg, iDeg, data[i].name, color[i]);
            } else {
                draw(cxt, w / 2, h / 2, r > (w / 2 - 5) ? (w / 2 - 5) : r, (startDeg) * deg, (startDeg + iDeg) * deg, iDeg, data[i].name, color[i]);
            }

            startDeg += iDeg;
        }
        cxt.closePath()
        flag = false ; 
    }

    /* 饼图中文字裁剪函数 */
    function textCut(str) {
        var maxNum;
        var arr1 = [],
            arr2 = [];
        bodyWidth < 500 ? maxNum = 5 : maxNum = 7;
        var arr = str.split('');
        if (bodyWidth <= 360) {
            arr1 = arr.slice(0, 5 > arr.length ? arr.length : 5)
            return str = arr1.join('')
        }

        if (arr.length > maxNum) {
            arr1 = arr.slice(0, 2);
            arr1.push('...');
            arr2 = arr.slice(arr.length - 2);
            arr = arr1.concat(arr2)
        }
        str = arr.join('')
        return str;
    }

})