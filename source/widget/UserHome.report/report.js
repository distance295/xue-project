$(function() {

    // var browser=navigator.appName 
    // var b_version=navigator.appVersion 
    // var version=b_version.split(";"); 
    // var trim_Version=version[1].replace(/[ ]/g,"");
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        $('.section-2 .time').removeClass('triangle').addClass('triangle_IE')
        $('.section .tabs').css({
            top: -14
        })
    }

    if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
        $('.section-2 .time').removeClass('triangle').addClass('triangle_FF')
    }

    if ($('#pieData').val()) {
        var json = JSON.parse($('#pieData').val())
    } else {
        return;
    }
    tabOut();
    var json = JSON.parse($('#pieData').val())
    var bodyWidth = $('body').width();
    var data = json.pieData;
    var tScale = window.devicePixelRatio * 10;
    var initialState = json.process;


    /* 全屏滚动效果配置项 */

    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
        css3: true,
        continuousVertical: false,
        controlArrow: false,
        loopBottom: true,
        touchSensitivity: 1,
        navigation: bodyWidth < 768 ? false : true,
        navigationColor: '#fff',
        afterLoad: function(anchorLink, index) {
            $('.section ').eq(index - 1).find('.title').css({
                animation: 'bounceInDown 1s',
                opacity: 1
            })
            if ($('body').width() >= 768) {
                $('.arrow-animation').eq(index - 2).hide()
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
            $('ul li').removeClass('active').eq(index - 1).addClass('active')
        },
        onLeave: function(index) {
            if ($('body').width() >= 768) {
                $('.arrow-animation').eq(index - 2).show()
            }
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

    $('ul li').each(function(index) {
        $(this).on('click', function() {
            $.fn.fullpage.moveTo(index + 1);
        })
    })
    if (bodyWidth <= 768) {
        $('.section-2 .time').removeClass('triangle').addClass('triangle_IE')
        tScale = window.devicePixelRatio * 5;
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

    // if (navigator.userAgent.indexOf('Mac OS X') > 0) {
    //     canvas.height = canvas.width = bodyWidth * 0.8 > 300 ? 300 : bodyWidth * 0.8;
    //     $('section-8 img:eq(0)').css({width:300,height:300})
    // } 

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
    if ($('body').height() <= 568) {
        $('.arrow-animation').hide()
    }
    /* canvas背景绘制 */
    cxt.beginPath()
    cxt.fillStyle = '#dcdcdc';
    cxt.arc(w / 2, h / 2, w / 2 - 5, 0, 360 * deg);
    cxt.fill();
    cxt.closePath();

    $('.wrap ').css({
        height: $('.wrap').width() >= 400 ? 420 : $('.wrap').width() + 2,
        width: $('.wrap').width() >= 400 ? 420 : $('.wrap').width() + 2,
        marginLeft: $('.wrap').width() >= 400 ? -210 : -1 - $('.wrap ').width() / 2
    })

    $('.section-6 img,.section-7 img').css({
        height: $('body').height() * 0.23
    })

    /* 图片点击放大效果 */
    $('.section-6 img ').on('click', function() {
        $(this).clone().css({
            height: $('body').height() * 0.8,
            marginTop: -$('body').height() * 0.4
        }).appendTo($('.section-6 .cover')).closest('.cover').fadeIn().on('click', function() {
            $('.section-6 .cover img').remove()
            $(this).closest(".cover").fadeOut()
        })
    })
    $('.section-7 img').on('click', function() {
        $(this).clone().css({
            height: $('body').height() * 0.8,
            marginTop: -$('body').height() * 0.4
        }).appendTo($('.section-7 .cover')).closest('.cover').fadeIn().on('click', function() {
            $('.section-7 .cover img').remove()
            $(this).closest(".cover").fadeOut()
        })
    })
    $('#pieData').remove()

    $('.section-3 .item').on('click', function() {
        $('.section-3 .tabs').append($(this));
        tabClick();
    })

    tabOut();
    init(1)


    /* 状态初始化函数 */
    function start(process) {
        $('.wrap p').html(json.totalComplete[process] + '%')
        if (initialState == 1) {
            $('.section-2 .process .time').eq(0).html('6月7日 9:30开始')
            $('.section-2 .process .time').eq(1).html('未提交')
            $('.section-2 .process .time').eq(2).html('未订正')
        } else if (initialState == 2) {
            $('.section-2 .process .time').eq(1).html('未提交')
            $('.section-2 .process .time').eq(2).html('未订正')
        } else if (initialState == 3) {
            $('.section-2 .process .time').eq(2).html('未订正')
        }

        if (process == 1) {
            drawPie(1);
            $('.section-2 .process').hide().eq(json.process - 1).show().css({
                right: "20%"
            }).find('.time').html('6月7日 9:30开始')
        } else if (process == 2) {
            drawPie();
            $('.section-2 .process').eq(0).css({
                right: "50%",
                marginRight: -$('.section-2 .process').eq(0).width() / 2
            }).find('.ball').addClass('active')
            $('.section-2 .process').eq(1).css({
                right: '20%'
            })
            $('.section-2 .process').eq(2).css({
                right: '5%'
            })
            if (bodyWidth < 768) {
                $('.section-2 .process').eq(1).css({
                    right: '1%'
                })
            }
        } else if (process == 3) {
            drawPie();
            // if (bodyWidth < 768) {
            //     $('.section-2 .process').eq(0).hide()
            // }
            $('.section-2 .process').eq(0).css({
                right: "68%"
            })
            $('.section-2 .process').eq(1).css({
                right: "50%",
                marginRight: -$('.section-2 .process').eq(1).width() / 2
            }).find('.ball').addClass('active')
            $('.section-2 .process').eq(2).css({
                right: '5%'
            })
            if (bodyWidth < 768) {
                $('.section-2 .process').eq(2).css({
                    right: '0%'
                })
            }

        } else if (process == 4) {
            drawPie();
            $('.section-2 .process').eq(0).css({
                right: '80%'
            })
            $('.section-2 .process').eq(1).css({
                right: '60%',
            })
            $('.section-2 .process').eq(2).css({
                right: "50%",
                marginRight: -$('.section-2 .process').eq(2).width() / 2
            }).find('.ball').addClass('active')
            if (bodyWidth < 768) {
                $('.section-2 .process').eq(1).css({
                    right: '67%',
                })
            }
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
            if ($(this).closest('.process').find('.time').html() == '未提交') {
                alert('随堂测未提交，请在各学习阶段完成之后查看')
                return
            }
            if ($(this).closest('.process').find('.time').html() == '未订正') {
                alert('订正未完成，请在各学习阶段完成之后查看')
                return
            }
            if (bodyWidth < 768) {
                if (index == 0) {
                    $('.process:eq(2)').hide()
                } else if (index == 1) {
                    setTimeout(function() {
                        $('.process:eq(0)').show()
                        $('.process:eq(2)').show()
                    }, 1000)
                } else if (index == 2) {
                    $('.process:eq(0)').hide()
                }
            }
            var turnDeg = 720 * (index + 1) - 90;
            $('canvas').css({
                transform: 'rotate(' + turnDeg + 'deg)',
                transition: 'all 1s'
            })
            json.process = index + 2;
            cxt.clearRect(0, 0, canvas.width, canvas.height)
            cxt.beginPath()

            cxt.fillStyle = '#dcdcdc';
            cxt.arc(w / 2, h / 2, w / 2 - 5, 0, 360 * deg);
            cxt.fill();
            cxt.closePath();
            $('.ball').removeClass('active')
            $('.process').css({
                margin: 0
            })
            start(json.process)
        })
    })

    /* 饼图初始变化函数 */
    function init() {
        $('.section-2 .process .ball').eq(0).click()
        if (initialState >= 3) {
            setTimeout(function() {
                $('.section-2 .process .ball').eq(1).click()
            }, 2000)
            if (initialState == 4) {
                setTimeout(function() {
                    $('.section-2 .process .ball').eq(2).click()
                }, 4000)
            }
        }
    }



    /* 第三屏页卡切换函数 */
    function tabClick() {
        $('.section-3 .item').each(function(index) {
            if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
                $(this).css({
                    transform: 'translate(0,' + (40 * (4 - l + index)) + 'px)' + '  rotateX(-30deg)',
                    zIndex: index
                })
            } else {
                $(this).css({
                    top: 40 * (4 - l + index),
                    zIndex: index
                })
            }
        })
        $('.section-3 .item').find('span:last-child').show();
        $('.section-3 .item').eq(l - 1).find('span:last-child').hide();
    };


    /* 第三屏页卡动画效果 */
    function tabOut() {
        $('.section-3 .item').each(function(index) {
            if (index % 2 == 0) {
                if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
                    $(this).css({
                        transform: 'translate(' + (-bodyWidth) + 'px,' + (40 * (4 - l + index)) + 'px)' + '  rotateX(-30deg)'
                    })
                } else {
                    $(this).css({
                        top: 40 * (4 - l + index),
                        zIndex: index,
                        transform: 'translate(' + (-bodyWidth) + 'px,' + '0px)' + '  rotateX(-30deg)'
                    })
                }
            } else {

                if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
                    $(this).css({
                        transform: 'translate(' + bodyWidth + 'px,' + (40 * (4 - l + index)) + 'px)' + '  rotateX(-30deg)'
                    })
                } else {
                    $(this).css({
                        top: 40 * (4 - l + index),
                        zIndex: index,
                        transform: 'translate(' + bodyWidth + 'px,' + '0px)' + '  rotateX(-30deg)'
                    })
                }
            }
        })
    }

    function tabIn() {
        $('.section-3 .item').each(function(index) {
            if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
                $(this).css({
                    transform: 'translate(0px,' + (40 * (4 - l + index)) + 'px)' + 'rotateX(-30deg)'
                })
            } else {
                $(this).css({
                    top: 40 * (4 - l + index),
                    zIndex: index,
                    transform: 'translate(0px,' + '0px)' + 'rotateX(-30deg)'
                })
            }
        })
    }

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
        cxt.rotate((eDeg - sDeg) / 2 + 360 * deg);
        if (bodyWidth < 360) {
            cxt.fillText(textCut(text), $('body').height() > 480 ? 60 : 40, 5)
        } else {
            bodyWidth >= 500 ? cxt.fillText(textCut(text), 80, 5) : cxt.fillText(textCut(text), 70, 5)
        }
        cxt.restore();
        // cxt.fillText(text,Math.cos((sDeg+(eDeg-sDeg)/2))*(w/3)+w/2-10,Math.sin((sDeg+(eDeg-sDeg)/2))*(h/3)+h/2+5)
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
    function drawPie(flag) {
        color = ["#ffc709", "#f7941e", "#c4d600", "#77c043", "#3bafda", "#4f2560", "#732282", "#a62451", "#f05327", "#c74126", "#dabc55", "#65da55", "#b4bf3a", "#288aaf", "#3b7bda", "#724186", "#9d69b2", "#b32136", "#e3233e", "#55c3da"]
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
            if (data.length > 1) {
                drawBg(cxt, w / 2, h / 2, w / 2 - 5, startDeg * deg, (startDeg + 1) * deg, iDeg, data[i].name, '#fff');
                draw(cxt, w / 2, h / 2, r > (w / 2 - 5) ? (w / 2 - 5) : r, (startDeg + 1) * deg, (startDeg + iDeg) * deg, iDeg, data[i].name, color[i]);
            } else {
                draw(cxt, w / 2, h / 2, r > (w / 2 - 5) ? (w / 2 - 5) : r, (startDeg) * deg, (startDeg + iDeg) * deg, iDeg, data[i].name, color[i]);
            }

            startDeg += iDeg;
        }
        cxt.closePath()
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