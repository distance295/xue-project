$(function() {
    if ($('.studyReport').length == 1) {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var bodyWidth = $('body').width();
        var flag = true;
        var animateFlag = false;

        var lastTime = 0;
        var prefixes = 'webkit moz ms o'.split(' '); //各浏览器前缀

        var requestAnimationFrame = window.requestAnimationFrame;
        var cancelAnimationFrame = window.cancelAnimationFrame;

        var prefix;
        //通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
        for (var i = 0; i < prefixes.length; i++) {
            if (requestAnimationFrame && cancelAnimationFrame) {
                break;
            }
            prefix = prefixes[i];
            requestAnimationFrame = requestAnimationFrame || window[prefix + 'RequestAnimationFrame'];
            cancelAnimationFrame = cancelAnimationFrame || window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame'];
        }

        //如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
        if (!requestAnimationFrame || !cancelAnimationFrame) {
            requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                //为了使setTimteout的尽可能的接近每秒60帧的效果
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

            cancelAnimationFrame = function(id) {
                window.clearTimeout(id);
            };
        }

        //得到兼容各浏览器的API
        window.requestAnimationFrame = requestAnimationFrame;
        window.cancelAnimationFrame = cancelAnimationFrame;

        // $('.section-4 .timeline .item').height((window.innerHeight - 128)/10)

        function myAnimate_Mob() {
            id = requestAnimationFrame(myAnimate_Mob);
            line.css({
                height: '+=2'
            })
            switch (line.height()) {
                case 40:
                    $('.overview .item:eq(0) .pull-left img').animate({
                        opacity: 1
                    }, speed)
                    $('.overview .item:eq(0) .pull-left .ball').animate({
                        opacity: 1
                    }, speed)
                    $('.overview .item:eq(0) .pull-right p span').eq(0).animate({
                        opacity: 1,
                    }, speed)

                    break;
                case 70:
                    $('.overview .item:eq(0) .line_1').animate({
                        width: 30
                    }, speed)
                    $('.overview .item:eq(0) .pull-right p span').eq(1).animate({
                        opacity: 1,
                    }, speed)

                    break;
                case (interval == 80 ? 94 : 98):
                    $('.overview .item:eq(0) .line_2').animate({
                        width: '58vw'
                    }, speed)

                    break;
                case (40 + interval):
                    $('.overview .item:eq(1) .pull-left img').animate({
                        opacity: 1
                    }, speed)
                    $('.overview .item:eq(1) .pull-left .ball').animate({
                        opacity: 1
                    }, speed)
                    $('.overview .item:eq(1) .pull-right p span').eq(0).animate({
                        opacity: 1,
                    }, speed)
                    break;
                case (70 + interval):
                    $('.overview .item:eq(1) .line_1').animate({
                        width: 30
                    }, speed)
                    $('.overview .item:eq(1) .pull-right p span').eq(1).animate({
                        opacity: 1,
                    }, speed)
                    break;

                case (interval + (interval == 80 ? 94 : 98)):
                    $('.overview .item:eq(1) .line_2').animate({
                        width: '58vw'
                    }, speed)
                    break;
                case (40 + interval * 2):
                    $('.overview .item:eq(2) .pull-left img').animate({
                        opacity: 1
                    }, speed)
                    $('.overview .item:eq(2) .pull-left .ball').animate({
                        opacity: 1
                    }, speed)
                    $('.overview .item:eq(2) .pull-right p span').eq(0).animate({
                        opacity: 1,
                    }, speed)
                    break;
                case (70 + interval * 2):
                    $('.overview .item:eq(2) .line_1').animate({
                        width: 30
                    }, speed)
                    $('.overview .item:eq(2) .pull-right p span').eq(1).animate({
                        opacity: 1,
                    }, speed)
                    cancelAnimationFrame(id);
                    break;
            }
        }

        function stopAnimation(stop) {
            animateFlag = false;
            if (stop) {
                cancelAnimationFrame(id);
            }

            $('.overview .item .pull-right p span').css({
                opacity: 0
            })
            $('.overview .item .pull-left .line_1,.overview .item .pull-left .line_2').css({
                width: 0
            })
            $('.headBall .line').css({
                height: 0
            })
            $($('.overview .item .pull-left img,.overview .item .pull-left .ball')).css({
                opacity: 0
            })

        }
        /* 全屏滚动效果配置项 */

        $('#fullpage').fullpage({
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12', 'page13', 'page14', 'page15'],
            css3: true,
            continuousVertical: false,
            controlArrow: false,
            loopBottom: false,
            touchSensitivity: 1,
            navigation: bodyWidth < 980 ? false : true,
            navigationColor: '#fff',
            scrollOverflow: true,
            afterLoad: function(anchorLink, index) {

                switch (index) {
                    case 1:
                        stopAnimation(false)
                        break;
                    case 2:
                        myAnimate_Mob();
                        break;
                    case 3:
                        stopAnimation(false)
                        break;
                }
            },
            onLeave: function(index) {
                switch (index) {
                    case 2:
                        stopAnimation(true)
                        break;
                }
            }
        });
        // setTimeout(function() {
        //     console.debug($('.slimScrollBar'));
        //     $('.slimScrollBar').css({
        //         background:'red'
        //     });
        // }, 200)


        var line = $('.headBall .line');
        var lineH = line.height();
        var speed = 500;
        var interval = 90;
        if ($('.fp-tableCell').height() <= 568) {
            interval = 80;
        }
        $('.section-6 img,.section-7 img').css({
            height: $('body').height() * 0.23
        })

        /* 适配Mac本 */

        if (userAgent.indexOf('Mac OS X') > 0 && bodyWidth > 768) {
            $('body ').addClass('mac')
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



        $('body').on('click', '.cover .close', function() {
            $('.cover').hide().removeClass('tab')
        })

    }
})