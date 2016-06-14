/*
 * XESUI
 * Copyright 2013 xueersi.com All rights reserved.
 *
 * @description 声明 xue 包：增加别名“X”
 *
 * @author Marco (marco@xesui.com)
 * @modify 2014-07-28 20:02:08
 * @version $Id$
 *
 * @links http://xesui.com
 */

 var X, xue;
 xue = xue || function(expr, fn) {
    return xue.dom ? xue.dom(expr, fn) : {};
};
X = xue;
window.xue = xue;

xue.version = '10551';

xue.id = 'xesui';
xue.guid = '$XESUI$';
xue.team = {
    Marco: 'Marco@xesui.com',
    Alex: 'Alex@xesui.com',
    oba: 'oba@xesui.com'
};

xue.expr = '';
xue.host = window.location.host;
var _host = xue.host.split('.');
if (_host.length > 2) {
    xue.subdomain = _host[0];
    xue.domain = _host[1];
}
/* ========================== 公共方法 =========================== */

xue.random = function(min, max, len) {

};


xue.use = xue.use || function(moduleName, callback, isQuequ, timeout) {

    /**
     * 声明内部变量，用于存放传入的参数
     *
     * n  [moduleName] : 模块名称
     * f  [callback]   : 回调函数
     * q  [isQueue]    : 是否加入队列
     * t  [timeout]    : 延迟执行回调的时间
     * tp [typeof]     : 存放参数类型
     *
     * @type {[type]}
     */
     var n = null,
     f = false,
     q = false,
     t = false,
     tp = null;

    /**
     * 循环参数对象
     *
     * 根据参数的类型存入相应的变量中
     * 如果类型不匹配则返回变量的原始值，防止变量被重复赋值
     */
     $.each(arguments, function(k, v) {
        tp = typeof v;
        n = (tp === 'string') ? v : n;
        f = (tp === 'function') ? v : f;
        q = (tp === 'boolean') ? v : q;
        t = (tp === 'number') ? v : t;
    });

    // 如果没有传入模块名称，则直接返回xue对象，并提示错误；
    if (n === null || n === '') {
        alert('方法调用错误，没有模块名称');
        return xue;
    }

    /**
     * 回调函数
     * @return {object}   xue[n]  返回模块对象
     */
     var _callback = function() {
        if (f) {
            return f(xue[n]);
        }
    };

    /**
     * 模块状态判断
     *
     * 如果已经存在，则直接调用回调函数
     * 如果不存在，则通过异步加载模块文件，
     * 文件加载成功之后根据传入的timeout情况来确定是否延时触发回调函数
     */
     if (xue[n]) {
        _callback();
    } else {
        // 调用异步加载方法，默认线上JS模块文件放到 sript/下面，文件名：xue.[模块名].min.js
        xue.loader('http://js04.xesimg.com/xue.' + n + '.min.js', function() {
            if (t) {
                setTimeout(function() {
                    _callback();
                }, t);
            } else {
                _callback();
            }
        });

    }
    return this;
};

/* ========================== UI 组件 =========================== */



/* ========================== module =========================== */


xue.dialog = xue.dialog || function(opt) {
    var o = {};
    /**
     * 初始化
     *
     * 如果opt是{}对象，则进行配置
     * 如果是字符串，即ID，则检查队列中是否存在，如果存在则设置win.id和win.box为指定id
     *
     * 否则直接合并默认配置
     *
     * @type {[type]} 返回xue.dailog对象
     */
     if (opt && typeof opt === 'object' && opt.length === undefined) {

        $.extend(o, xue.dialog._default, opt);
        xue.dialog._init(o);
        return xue.dialog;

    } else if (opt && typeof opt === 'string') {
        var id = 'xuebox_' + opt;
        var item = xue.dialog.queue[id];
        if (item) {
            xue.dialog.id = id;
            xue.dialog.box = item.DOM_BOX;
        }
        return xue.dialog;
    } else {
        $.extend(o, xue.dialog._default);
        xue.dialog._init(o);
    }

    return xue.dialog;
};

(function() {

    var win = xue.dialog;

    win.id = 'xuebox';

    win.tpl = {
        /**
         * 弹窗外围容器
         * @type {String}
         */
         wrap: '<div id="$id$" class="dialog">$dialog_box$ $dialog_close$ $dialog_arrow$</div>',
        /**
         * 关闭按钮
         * @type {String}
         */
         close: '<a href="javascript:void(0);" class="dialog_close">关闭</a>',
        /**
         * 指示箭头模板
         * $arrow_type$ : 按钮位置
         * - tl : 上左
         * - tr : 上右
         * - bl : 下左
         * - br : 下右
         * @type {String}
         */
         arrow: '<div class="dialog_arrow arrow_$arrow_type$"></div>',
        /**
         * 按钮模版
         * $btn_id$   :
         * $btn_type$ :
         * $btn_cls$  :
         * $btn_text$ :
         * @type {String}
         */
         button: '<button type="button" data-type="$btn_type$" id="$id$_btn_$btn_id$" class="btn $btn_cls$ $btn_type$" href="javascript:void(0);">$btn_text$</button>',
        /**
         * 弹窗容器table
         * $id$ :
         * $is_title$ :
         * $is_buttons$ :
         * $title$ :
         * $content$ :
         * $buttons$ :
         * $width$ :
         * $height$ :
         * @type {[type]}
         */
         box: '<table class="dialog_box">\n' + '    <thead><tr class="t"><td class="tl"></td><td class="tc"></td><td class="tr"></td></tr></thead>\n' + '   <tbody class="dialog_head $is_title$">\n' + '       <tr class="ct">\n' + '          <td class="cl"></td>\n' + '         <td class="dialog_handle">\n' + '               <p class="dialog_title" id="$id$_title">$title$</p>\n' + '          </td>\n' + '            <td class="cr"></td>\n' + '     </tr>\n' + '    </tbody>\n' + ' <tbody class="dialog_body">\n' + '      <tr class="cc">\n' + '          <td class="cl"></td>\n' + '         <td id="$id$_content" class="dialog_content_wrap"><div class="dialog_content">$content$</div></td>\n' + '           <td class="cr"></td>\n' + '     </tr>\n' + '    </tbody>\n' + ' <tbody class="dialog_foot $is_buttons$">\n' + '     <tr class="cb">\n' + '          <td class="cl"></td>\n' + '         <td class="dialog_buttons" id="$id$_buttons">$buttons$</td>\n' + '          <td class="cr"></td>\n' + '     </tr>\n' + '    </tbody>\n' + ' <tfoot><tr class="b"><td class="bl"></td><td class="bc"></td><td class="br"></td></tr></tfoot>\n' + '</table>\n',
        /**
         * 背景遮罩
         */
         mask: '<div class="dialog_mask"></div>'
     };

    /**
     * 默认配置
     * @type {Object}
     */
     win._default = {
        content: '<div class="aui_loading"><span>loading..</span></div>',
        title: '\u6d88\u606f', // 标题. 默认'消息'
        handle: null,
        button: null, // 自定义按钮
        ok: null, // 确定按钮回调函数
        no: null, // 取消按钮回调函数
        submit: null, // 同 ok
        cancel: null, // 同 no
        init: null, // 对话框初始化后执行的函数
        close: null, // 对话框关闭前执行的函数
        okVal: '\u786E\u5B9A', // 确定按钮文本. 默认'确定'
        cancelVal: '\u53D6\u6D88', // 取消按钮文本. 默认'取消'
        width: 'auto', // 内容宽度
        height: 'auto', // 内容高度
        minWidth: 96, // 最小宽度限制
        minHeight: 32, // 最小高度限制
        padding: null, // 内容与边界填充距离,默认：'25px 20px'
        skin: '', // 皮肤名(预留接口,尚未实现)
        icon: null, // 消息图标名称
        time: null, // 自动关闭时间
        esc: true, // 是否支持Esc键关闭
        focus: true, // 是否支持对话框按钮自动聚焦
        show: true, // 初始化后是否显示对话框
        follow: null, // 跟随某元素(即让对话框在元素附近弹出)
        // path      : _path,               // Dialog路径
        lock: false, // 是否锁屏
        background: '#000', // 遮罩颜色
        opacity: 0.7, // 遮罩透明度
        duration: 300, // 遮罩透明度渐变动画速度
        fixed: false, // 是否静止定位
        left: null, // X轴坐标
        top: null, // Y轴坐标
        zIndex: 1000, // 对话框叠加高度值(重要：此值不能超过浏览器最大限制)
        resize: true, // 是否允许用户调节尺寸
        drag: true, // 是否允许用户拖动位置，
        border: true, // 是否显示边框
        cls: '' // dialog外围增加样式：dialog_alert / dialog_win等
    };

    // 设置队列
win.queue = { /* 'id' : {} */ };


win._init = function(opt) {

    this.id = opt.id ? 'xuebox_' + opt.id : 'xuebox';

    this.queue[this.id] = opt;
    /* --------------- 获取HTML结构 ------------- */

    var _dom = this.tpl.wrap;

    _dom = _dom.replace('$id$', this.id);

    _dom = _dom.replace('$dialog_close$', this._getClose());

    _dom = _dom.replace('$dialog_box$', this._getDOM());

    _dom = _dom.replace(/\$dialog_arrow\$/, this._getArrow());

    /* --------------- 页面中插入 ------------- */
    if ($('#xuebox_' + opt.id).length > 0) {
        $('#xuebox_' + opt.id).remove();
    }
        // var _top_temp = Number(-2000);
        $(_dom).appendTo('body');
        // $(_dom).css('top', Number(-2000)).appendTo('body');
        this.box = $('#' + this.id);
        // this.box.css('top', -2000);
        /* --------------- 存储配置 ------------- */
        // 设置DOM节点到队列中

        var dom = {
            DOM_BOX: this.box,
            DOM_CLOSE: this.box.find('.dialog_close'),
            DOM_CANCEL: this.box.find('.btn_cancel'),
            DOM_OK: this.box.find('.btn_ok'),
            DOM_BUTTONS: this.box.find('.dialog_buttons .btn'),
            DOM_TITLE: this.box.find('.dialog_title'),
            DOM_CONTENT: this.box.find('.dialog_content_wrap')
        };

        this._setOption('DOM_BOX', dom.DOM_BOX);
        this._setOption('DOM_CLOSE', dom.DOM_CLOSE);
        this._setOption('DOM_CANCEL', dom.DOM_CANCEL);
        this._setOption('DOM_OK', dom.DOM_OK);
        this._setOption('DOM_CONTENT', dom.DOM_CONTENT);
        this._setOption('DOM_TITLE', dom.DOM_TITLE);
        this._setOption('DOM_BUTTONS', dom.DOM_BUTTONS);
        this._setOption(dom);

        /* --------------- 事件绑定 ------------- */

        var that = this;

        // 关闭事件
        this._addClick(dom.DOM_CLOSE, opt.close);

        // 取消事件
        this._addClick(dom.DOM_CANCEL, opt.no || opt.cancel);

        // 确定事件
        this._addClick(dom.DOM_OK, opt.ok || opt.submit);

        // buttons的事件绑定
        // {id, tp, text, cls, fn}
        if (opt.button && opt.button.length > 0) {
            $.each(opt.button, function(k, v) {
                var _btn = $('#' + that.id + '_btn_' + v.id);
                that._addClick(_btn, v.fn);
            });
        }

        // 给Dialog绑定点击事件，点击后重置Dialog的id和dom值
        dom.DOM_BOX.off('mousedown').on('mousedown', function() {
            that.id = $(this).attr('id');
            that.box = $(this);
        });
        /* --------------- 设置定位和尺寸 ------------- */

        this.resize();
        // this(this.id).position();

        /* --------------- 设定背景遮罩 ------------- */
        if (opt.lock) {
            var bg = opt.lockbg ? true : false;
            this.lock(bg);
        }

        /* --------------- 判断是否显示边框 ------------- */
        if (opt.border) {
            dom.DOM_BOX.removeClass('dialog_noborder');
        } else {
            dom.DOM_BOX.addClass('dialog_noborder');
        }
        // 如果不存在遮罩，则给所有的弹窗增加1px边框样式
        // if($('.dialog_mask').length == 0){
        // $('.dialog').addClass('dialog_noMask');
        // }

        /* --------------- 设置圆角 ------------- */
        // 头部存在的时候增加样式
        if (dom.DOM_BOX.find('.dialog_head:hidden').length > 0) {
            dom.DOM_CONTENT.addClass('dialog_radius_top');
        } else {
            dom.DOM_CONTENT.removeClass('dialog_radius_top');
        }
        // 底部存在的时候增加样式
        if (dom.DOM_BOX.find('.dialog_foot:hidden').length > 0) {
            dom.DOM_CONTENT.addClass('dialog_radius_bottom');
        } else {
            dom.DOM_CONTENT.removeClass('dialog_radius_bottom');
        }

        /* --------------- 设置外围样式 ------------- */

        if (opt.cls) {
            dom.DOM_BOX.addClass(opt.cls);
        }

        /* --------------- 设置延时关闭 ------------- */
        if (opt.time) {
            this.timeout(opt.time, dom.DOM_BOX);
        }
        /* --------------- 设置跟随 ------------- */
        if (opt.follow) {
            this.follow(opt.follow);
        }

        /* --------------- 设置右上角的关闭按钮 ------------- */
        /**
         * 当内容区域出现滚动条，且没有标题区域的时候，关闭按钮会被滚动条遮住
         *
         * 判断
         */
        // if(!opt.title){
        //  var c = dom.DOM_CONTENT.find('.dialog_content'),
        //      d = c[0];
        //  // 判断容器滚动高度是否大于容器高度，或者容器的 offsetHeight > 容器高度的时候进行调整
        //  if(d.scrollHeight > d.clientHeight || d.offsetHeight > d.clientHeight){
        //      dom.DOM_CLOSE.css('right', 25);
        //  }
        // }

        /* --------------- 设置箭头 ------------- */

        this.arrow(opt.handle);
        /* --------------- 设置IE6兼容 ------------- */

        if (xue.isIE6) {
            dom.DOM_BOX.addClass('dialog_noshadow');
            // 增加iframe遮罩
            if ($('body').find('select').length > 0) {
                win.iframe();
            }
        } else {
            dom.DOM_BOX.removeClass('dialog_noshadow');
        }

    };

    win.iframe = function(tp) {
        var opt = this.queue[this.id];
        if (!opt) {
            return;
        }
        var w = $('body').width(),
        h = $('body').height();
        var iframe_tpl = '<iframe id="dialog_iframe" style="position:fixed;width:100%;height:100%;top:0;left:0;_position:absolute;_width:' + w + ';_height:' + h + ';_filter:alpha(opacity=0);opacity=0;border-style:none;z-index:998;"></iframe>';
        // if(!this.iframe){
            $('body').append(iframe_tpl);
        // }
        // this.iframe = $('#dialog_iframe');
    };
    // 获取关闭标签HTML结构
    win._getClose = function() {
        var opt = this.queue[this.id];
        if (!opt) {
            return;
        }
        var _close = opt.close ? this.tpl.close : '';

        return _close;
    };

    // 获取箭头标签的HTML结构
    win._getArrow = function() {
        var opt = this.queue[this.id];
        if (!opt) {
            return;
        }

        var tp = opt.arrow;
        if (tp) {
            var html = win.tpl.arrow;
            tp = tp ? (tp === true ? 'bc' : tp) : 'bc';
            html = html.replace('$arrow_type$', tp);
            return html;
        } else {
            return '';
        }
    };
    // 获取按钮组标签的HTML结构
    win._getButton = function() {
        var opt = this.queue[this.id];
        if (!opt) {
            return;
        }

        /**
         * 获取button数据
         *
         * [{id:'', text:'', tp:'', cls:'', fn}]
         * @type {[type]}
         */
         var btn = opt.button;
         var tpl = this.tpl.button;

         var btns = '';
         var re = {
            id: /\$id\$/g,
            btn: /\$btn_id\$/,
            type: /\$btn_type\$/g,
            cls: /\$btn_cls\$/,
            text: /\$btn_text\$/

        };
        if (btn && typeof btn === 'object' && btn.length > 0) {
            $.each(btn, function(k, v) {
                var _btn = tpl;
                _btn = _btn.replace(re.id, win.id);
                _btn = _btn.replace(re.btn, v.id);
                _btn = _btn.replace(re.type, 'btn_' + v.tp);
                _btn = _btn.replace(re.cls, v.cls);
                _btn = _btn.replace(re.text, v.text);
                btns += _btn;
            });
        }
        if (opt.submit || opt.ok) {
            var _submit = tpl;
            _submit = _submit.replace(re.type, 'btn_ok');
            _submit = _submit.replace(re.id, win.id);
            _submit = _submit.replace(re.btn, 'ok');
            _submit = _submit.replace(re.cls, 'btn_red');
            _submit = _submit.replace(re.text, opt.submitVal || opt.okVal);
            btns += _submit;
        }
        if (opt.cancel || opt.no) {
            var _cancel = tpl;
            _cancel = _cancel.replace(re.type, 'btn_cancel');
            _cancel = _cancel.replace(re.id, win.id);
            _cancel = _cancel.replace(re.btn, 'cancel');
            _cancel = _cancel.replace(re.cls, 'btn_gray');
            _cancel = _cancel.replace(re.text, opt.cancelVal || opt.noVal);
            btns += _cancel;
        }
        return btns;
    };

    // 获取整个中间区域的HTML结构
    win._getDOM = function() {

        var opt = this.queue[this.id];
        if (!opt) {
            return;
        }

        var box = this.tpl.box;
        /*
         * $id$ :
         * $is_title$ :
         * $is_buttons$ :
         * $title$ :
         * $content$ :
         * $buttons$ :
         * $width$ :
         * $height$ :
         */
         var id = this.id || xue.getTime();
         box = box.replace(/\$id\$/g, id);

        /**
         * title
         */
         if (opt.title) {
            box = box.replace(/\$is_title\$/, '');
            box = box.replace(/\$title\$/, opt.title);
        } else {
            box = box.replace(/\$is_title\$/, 'hidden');
            box = box.replace(/\$title\$/, this._default.title);
        }

        /**
         * 按钮组
         */
         var _btn = this._getButton(),
         isbtn = _btn ? '' : 'hidden';
         box = box.replace('$buttons$', _btn);
         box = box.replace('$is_buttons$', isbtn);

        /**
         * 内容区域
         */
         box = box.replace('$content$', opt.content);

         return box;
     };

    // 向队列中添加属性
    win._setOption = function(key, val, id) {
        var _id = id || win.id;
        var list = win.queue[_id];
        list[key] = val;

        return win.queue;
    };


    /**
     * 事件绑定
     * @param  {selector}   expr 要绑定的元素
     * @param  {Function} fn   要绑定的事件
     * @return {[type]}        [description]
     */
     win._addClick = function(expr, fn) {
        var box = $(expr).parents('.dialog'),
        id = (box.length > 0) ? box.attr('di') : this.id;

        var _fn = (fn && typeof fn === 'function') ? fn : function() {
            win.close();
        };
        var that = this;
        $(expr).off('click').on('click', function() {
            that.box = $(this).parents('.dialog');
            that.id = that.box.attr('id');

            _fn(this, id);
        });

    };


    /**
     * 返回尺寸
     * @type {Object}
     *
     * 返回值： w = width, h = height, l = left, t = top, s = scrollTop, c = center, m = middle
     */
     win._size = {
        wins: function() {
            var _win = $(window);
            // 窗体尺寸
            var w = {
                w: _win.width(), // 宽度
                h: _win.height(), // 高度
                s: _win.scrollTop() // 滚动高度
            };
            // 窗体垂直中线
            w.c = (w.w / 2);
            // 窗体可显示区域水平中线
            w.m = w.s + (w.h / 2);
            return w;
        },
        box: function() {
            var opt = win.queue[win.id];
            if (!opt) {
                return win;
            }
            var box = opt.DOM_BOX;
            // 弹窗的尺寸
            var d = /*this.getSize() ||*/ {
                w: box.outerWidth(true),
                h: box.outerHeight(true)
            };
            return d;
        },
        handle: function() {
            var opt = win.queue[win.id];
            if (!opt) {
                return win;
            }
            var handle = $(opt.handle);
            if (handle.length === 0) {
                return win;
            }
            var h = {
                w: handle.width(),
                h: handle.height(),
                l: handle.offset().left,
                t: handle.offset().top
            };
            // handle垂直中心
            h.c = h.l + (h.w / 2);

            return h;
        }
    };


    // 事件绑定
    // win._addEvent = function(ev, expr, fn){};

    // 关闭事件
    win.close = function(fn) {
        var opt = this.queue[this.id];
        if (!opt) {
            return;
        }
        // 当关闭的容器ID并不是当前激活窗口时，禁止弹层
        if((typeof(fn) == 'string') && (this.id !== 'xuebox_'+fn)){
            return;
        }

        opt.DOM_BOX.remove();
        if (xue.isIE6) {
            $('#dialog_iframe').remove();
            // this.iframe = null;
        }
        delete this.queue[this.id];

        //关闭的时候检查剩余弹窗中有没有锁定的，如果有则不删除遮罩
        var islock = false;
        $.each(this.queue, function() {
            if (this.lock) {
                islock = true;
            }
        });

        if (!islock) {
            this.unlock();
        }
    };

    // 设置弹窗的位置
    win.position = function(left, top) {

        var box = [],
        opt = this.queue[this.id];

        if ((left && typeof left === 'number') || (top && typeof top === 'number')) {
            if (!opt) {
                return;
            }
            opt.left = left || opt.left;
            opt.top = top || opt.top;
            box.push(opt);
        } else {
            // 重置所有弹窗的定位
            // $.each(this.queue, function(){
            //  box.push(this);
            // });

            // 只设置当前弹窗的定位
            box.push(opt);
        }

        $.each(box, function() {
            var opt = this;
            var box = opt.DOM_BOX;
            var pos = {
                left: left || opt.left || ($(window).width() / 2) - (box.width() / 2),
                top: top || opt.top || ($(window).height() / 2) - (box.height() / 2)
            };
            box.css({
                left: pos.left,
                top: pos.top
            });
        });

        return this;
    };

    // 设置弹窗的大小
    win.resize = function(width, height) {
        var opt = this.queue[this.id];
        if (!opt) {
            return;
        }

        if ((width || opt.width) && (height || opt.height)) {
            var box = opt.DOM_BOX;
            var con = box.find('.dialog_content');
            con.css({
                width: width || opt.width,
                height: height || opt.height
            });
            if (opt.padding) {
                con.css('padding', opt.padding);
            }
            // 如果没有设置宽度的，则需要延时处理：等dialog加载完成后再设置定位，否则直接设置
            if (!opt.width || opt.width == 'auto') {
                setTimeout(function() {
                    win.position();
                }, 100);
            } else {
                win.position();
            }
        }
        if (xue.isIE6) {
            var _box = opt.DOM_BOX;
            _box.css({
                width: _box.width()
            });
            _box.find('.dialog_arrow').css('width', _box.width());
        }

        return this;
    };

    // 设置弹窗的层级，默认为1000
    win.zIndex = function() {};

    /**
     * 设置当前焦点,zindex : 2000
     *
     * 其他的Dialog的zindex值设为默认 1000
     *
     * 当点击某个的时候，可以激活当前焦点
     *
     * @return {[type]} [description]
     */
     win.focus = function() {};

    /**
     * 获取弹窗内容区域
     * @param  {string} tp 获取类型：html / text / dom
     * @return {[type]}    根据类型返回：html(HTML内容) / text(文本) / dom(jQuery对象)
     */
     win.getContent = function(tp) {
        var opt = this.queue[this.id];
        if (!opt) {
            return;
        }

        var DOM = opt.DOM_CONTENT.find('.dialog_content'),
        con = '';

        if (tp === 'html') {
            con = DOM.html();
        } else if (tp === 'text') {
            con = DOM.text();
        } else {
            con = DOM;
        }

        return con;
    };

    /**
     * 设置遮罩
     * @param  {boolen} lockbg 是否显示背景图片（斜线）
     * @return {[type]}        [description]
     */
     win.lock = function(lockbg) {
        var mask = $('body').find('.dialog_mask');
        if (mask.length > 0) {
            mask.show();
        } else {
            $('body').append(this.tpl.mask);
        }
        var newMask = $('.dialog_mask');
        if (lockbg) {
            newMask.addClass('mask_bg');
        } else {
            $('.dialog_mask').removeClass('mask_bg');
        }

        if (xue.isIE6) {
            var h = Math.max($('body').outerHeight(), $(window).outerHeight());
            newMask.height(h);
        }
        if (newMask.height() < $(window).height()) {
            newMask.height($(window).height());
        }
        // $('.dialog').addClass('dialog_noborder');
    };

    /**
     * 取消遮罩
     *
     * 判断当前点击的元素是否有lock，如果没有则不关闭遮罩
     *
     * 如果有，还要看关闭后其他弹层中是否有lock，如果有，则还不能关闭遮罩
     *
     * @return {[type]} [description]
     */
     win.unlock = function(id) {
        $('.dialog_mask').remove();
    };


    win.content = function(msg) {
        var opt = this.queue[this.id];
        if (!opt) {
            return this;
        }

        var box = opt.DOM_BOX.find('.dialog_content');

        box.html(msg);
        this.resize();
        return this;
    };
    win.title = function(title) {
        var opt = this.queue[this.id];
        if (!opt) {
            return this;
        }

        var box = opt.DOM_BOX.find('.dialog_title');

        box.html(title);

        return this;
    };


    win.timeout = function(timer, box) {
        var t = timer || 2000;
        var that = this;
        var opt = this.queue[this.id];
        if (!opt) {
            return this;
        }
        var _box = box || opt.DOM_BOX;
        setTimeout(function() {
            _box.fadeOut(100, function() {
                that.close();
            });
            // if(opt.lock){
            // }
            // delete that.queue[that.id];
        }, t);
    };

    win.getSize = function() {
        var opt = this.queue[this.id];
        if (!opt) {
            return this;
        }

        var box = opt.DOM_BOX;
        var width = box.outerWidth(),
        height = box.outerHeight();
        return {
            width: width,
            height: height
        };
    };

    win._getHandleSize = function(expr) {
        var handle = $(expr);
        if (handle.length === 0) {
            return false;
        }
        var offset = handle.offset();
        var size = {
            height: handle.outerHeight(true),
            width: handle.outerWidth(true),
            left: offset.left,
            top: offset.top
        };
        return size;
    };

    win.follow = function(expr) {
        var handle = $(expr);
        if (handle.length === 0) {
            return this;
        }

        var opt = this.queue[this.id];
        if (!opt) {
            return this;
        }

        var box = opt.DOM_BOX;

        if (box.hasClass('dialog_follow')) {
            box.addClass('dialog_follow');
        }

        var dom = this._getHandleSize(handle);
        var size = {
            width: box.outerWidth(true),
            height: box.outerHeight(true)
        };
        win.position(dom.left - (size.width / 2) + (dom.width / 2), dom.top - (size.height / 2) - dom.height - 11);
        // win.position(dom.left - (size.width / 2) + 10, dom.top - (size.height /2) - dom.height - 10);
        return this;
    };


    /**
     * 箭头定位
     * @param  {[type]} fixe [description]
     * @return {[type]}      [description]
     *
     *
     *
     *    ...... 未完成 .......
     */
     win.arrow = function(handle) {
        var _dom = $(handle);
        if (_dom.length === 0) {
            return;
        }

        var opt = this.queue[this.id];
        if (!opt) {
            return this;
        }
        var box = opt.DOM_BOX;


        // 窗体尺寸
        var w = this._size.wins();

        var s = this._size.handle();

        // 弹窗的尺寸
        var d = this._size.box();

        // 设置箭头类别
        var c = (s.c < w.c) ? 'l' : 'r', // 垂直区域
            m = ((s.t - d.h) < w.s) ? 't' : 'b'; // 水平区域
            var tp = m + c;
            var arrow = box.find('.dialog_arrow');

            arrow.removeClass().addClass('dialog_arrow').addClass('arrow_' + tp);

            var aLeft = Math.floor((c == 'l') ? d.w * 0.2 : d.w * 0.8);
        // console.log(s);
        arrow.css({
            'background-position': aLeft + 'px 0'
        });



        // this.position();

    };


})();







/* ================== 插件 =================== */




xue.win = xue.dialog;

(function() {
    var w = xue.win;
    var config = {
        id: 'win',
        lock: true,
        close: true,
        title: '标题',
        content: '<div></div>',
        submit: true,
        cancel: true
    };

    $.each(config, function(k, v) {
        w._default[k] = v;
    });

})();








/* ================================================= 全局事件 ==================================================== */


// window尺寸发生变化时
$(window).resize(function() {
    if ($('.dialog').length > 0) {
        xue.win.position();
    }
});
// 页面滚动时
// $(window).scroll(function(){

// });

$(function() {


    


// 开始
var userinfo_temp = false,
userinfo_dom = null,
userinfo_show = null,
userinfo_interval = false;

    // 绑定所有V用户的鼠标滑过事件：弹出用户信息
    $('body').off('mouseover', '.ui-userinfo').on('mouseover', '.ui-userinfo', function(ev) {
        var d = $(this).data();
        var that = $(this);
        if (!d.params) {
            return;
        }
        var over_url = location.href;
        var over_time = Date.now();
        // var ra = ev; ra.relatedTarget;
        // userinfo_show = null;
        userinfo_show = true;
        userinfo_dom = that;
        setTimeout(function() {
            if (userinfo_show) {
                // that = userinfo_dom;
                userinfoShow(userinfo_dom);
                userinfo_show = null;
                userinfo_dom = null;
            }
        }, 800);
        // return;
        var userinfoShow = function(udom) {
            var temp = udom.find('.pop_userinfo_temp');
            if (temp.length > 0) {
                var msg = temp.html();
                xue.use('userinfo', function() {
                    xue.userinfo.show(udom, msg);
                });
            } else {
                if (!udom.hasClass('info_open')) {
                    var _url = '/UserPages/ajaxUserPage';
                    //var _a = $('.ui-userinfo').data('url');
                    var url = _url;
                    // var url = window.location.hostname == 'v04.xesui.com' ? '../json/pop_userinfo.php' : '/UserPages/ajaxUserPage';
                    var par = udom.data().params;
                    // var url = '/data/courses/teacher-bomb.html';
                    $.ajax(url,{
                        type: 'get',
                        dataType: 'html',
                        data: par,
                        xhrFields: {
                            withCredentials: true
                        },
                        success: function(result) {
                            // alert(result)
                            // var msg = xue.ajaxCheck.HTML(result);
                            if (result != '0'){
                                // if(result.sign == 1){
                                    xue.use('userinfo', function() {
                                        if (xue.userinfo) {

                                            xue.userinfo.show(udom, result);
                                            $('.ui_follow').follow();

                                        }
                                    });
                                }
                            },
                            error: function(){
                                alert('数据请求失败')
                            }
                        });
}
}

udom.addClass('info_open');

userinfo_temp = true;
};



that.off('mouseout').on('mouseout', function(a, b, c, d) {
    userinfo_temp = false;
    userinfo_show = false;
    userinfo_dom = null;
    
    var re = $(a.relatedTarget);
    var _c = $('.dialog_userinfo').find(re);

    if (_c.length > 0) {
        userinfo_temp = true;
    }
    setTimeout(function() {
        if (!userinfo_temp) {
                    // 关闭窗口的时候传入要关闭窗口的ID，防止关闭正在激活的窗口（非用户信息窗口）
                    xue.win('userinfo').close('userinfo');
                    that.removeClass('info_open');
                    
                }
                that = null;
            }, 500);
        var out_time = Date.now();
        var o_time = out_time - over_time;
         utrack('xueersi','key=user_tab&value=times:' + o_time + ';userid:' + that.data('params') + ';url:'+ over_url);

});

});

$('body').off('mouseover', '.dialog_userinfo').on('mouseover', '.dialog_userinfo', function(a) {
    userinfo_temp = true;
});

$('body').off('mouseout', '.dialog_userinfo').on('mouseout', '.dialog_userinfo', function(a) {
    var re = a.relatedTarget;
    var c = $(this).find(re);
    if (c.length === 0) {
        userinfo_temp = false;
        setTimeout(function() {
            if (!userinfo_temp) {
                xue.win('userinfo').close();
                $('.ui-userinfo').removeClass('info_open');
            }
        }, 500);
    }
});


// 结束




});


