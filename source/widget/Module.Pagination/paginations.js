/**
 * 
 * @example
        $('.ui-pages').pages({
            total : 50, // 总记录数
            size: 2, // 每页显示记录数
            index : 26, // 当前页
            url : '#!{page}', // 非ajax情况下分类的链接地址
            // 点击分页时的回调，返回被点击的页数
            click : function(e){
                console.log(e);
            }
        }); 
 */
;(function($){
    var defaults = {
        'total': 100, // 条目总数，异步分页时必填，模拟分页时为数组的长度
        'size': 10, // 每页的条目数
        'index': 1,// 初始化时选定的页数
        'cls' : '', // 分页容器ul上面的出class名
        'range': 2, // 可见的页码范围，即当前页码两边的页码数量。比如当前是第 6 页，设置 pageRange 为 2，则页码条显示为 '1... 4 5 6 7 8'
        'handle': '.pagination-handle' , // 加载分页的容器
        'click' : null, // 点击分页后事件绑定
        'container': '.pagination-container', // 存放分页数据内容的容器
        'url' : null // 分页按钮的链接
    };
    var methods = {
        init : function(){},
        data: function(len){
            if(len <= 0 ){
                return [];
            }
            return new Array(len || 100);
        },
        template: function(str){}
    };

    $.fn.pages = function(options){
        if(options && options.total <= 1){
            return this;
        }
        return this.each(function(){
            var that = $(this);

            if(typeof options == 'number'){
                that.pagination(options);
                return that;
            }
            var settings = $.extend({}, defaults, options);
            settings.handle = that;
            var _opt = {
                dataSource: methods.data(settings.total),
                totalNumber: settings.total,   // 条目总数，异步分页时必填，模拟分页时为数组的长度
                pageNumber: settings.index,  // 指定初始化时加载哪一页的数据
                pageSize: settings.size, // 每页的条目数
                pageRange: settings.range, // 可见的页码范围，即当前页码两边的页码数量。比如当前是第 6 页，设置 pageRange 为 2，则页码条显示为 '1... 4 5 6 7 8'
                ulClassName: 'pagination ' + settings.cls,
                callback: function(data, pagination){
                    try{
                        settings.callback(pagination);
                    }catch(e){}
                }
            };
            if(typeof settings.click == 'function'){
                _opt.afterPageOnClick = _opt.afterNextOnClick = _opt.afterPreviousOnClick = function(){
                    settings.click(settings.handle.pagination('getSelectedPageNum'));
                };
            }
            if(settings.url){
                _opt.pageLink  = settings.url;
            }

//            that.pagination('destroy').pagination(_opt);
              that.pagination(_opt);

            return that;
        });
//        var settings = $.extend({}, defaults, options);
//
//        settings.handle = this;
//        var _opt = {
//            dataSource: methods.data(settings.total),
//            totalNumber: settings.total,   // 条目总数，异步分页时必填，模拟分页时为数组的长度
//            pageNumber: settings.index,  // 指定初始化时加载哪一页的数据
//            pageSize: settings.size, // 每页的条目数
//            pageRange: settings.range, // 可见的页码范围，即当前页码两边的页码数量。比如当前是第 6 页，设置 pageRange 为 2，则页码条显示为 '1... 4 5 6 7 8'
//            ulClassName: 'pagination ' + settings.cls,
//            callback: function(data, pagination){
//                try{
//                    settings.callback(pagination);
//                }catch(e){}
//            }
//        };
//        if(typeof settings.click == 'function'){
//            _opt.afterPageOnClick = _opt.afterNextOnClick = _opt.afterPreviousOnClick = function(){
//                settings.click(settings.handle.pagination('getSelectedPageNum'));
//            };
//        }
//        if(settings.url){
//            _opt.pageLink  = settings.url;
//        }
//
//        this.pagination(_opt);
//
//        return this;
    };

})(jQuery);

/*
 * pagination.js 2.0.7
 *
 * Released under the MIT license.
 */

(function(global, $) {

    if (typeof $ === 'undefined') {
        throwError('Pagination requires jQuery.');
    }

    var pluginName = 'pagination';

    var pluginHookMethod = 'addHook';

    var eventPrefix = '__pagination-';

    // Conflict, use backup
    if ($.fn.pagination) {
        pluginName = 'pagination2';
    }

    $.fn[pluginName] = function(options) {

        if (typeof options === 'undefined') {
            return this;
        }

        var container = $(this);

        var pagination = {

            initialize: function() {
                var self = this;

                // 保存当前实例的属性
                if (!container.data('pagination')) {
                    container.data('pagination', {});
                }

                // 初始化之前
                if (self.callHook('beforeInit') === false) return;

                // 如果分页已经初始化,摧毁它
                if (container.data('pagination').initialized) {
                    $('.paginationjs', container).remove();
                }

                // 初始化是否禁用分页
                self.disabled = !!attributes.disabled;

                // 传递给回调函数
                var model = self.model = {
                    pageRange: attributes.pageRange,
                    pageSize: attributes.pageSize
                };

                // "dataSource"的类型是未知的,解析它找到真正的数据
                self.parseDataSource(attributes.dataSource, function(dataSource) {

                    // 分页是否同步模式
                    self.sync = Helpers.isArray(dataSource);
                    if (self.sync) {
                        model.totalNumber = attributes.totalNumber = dataSource.length;
                    }

                    // 获取页面的总数
                    model.totalPage = self.getTotalPage();

                    // 不到一页
                    if (attributes.hideWhenLessThanOnePage) {
                        if (model.totalPage <= 1) return;
                    }

                    var el = self.render(true);

                    // 额外的类名
                    if (attributes.className) {
                        el.addClass(attributes.className);
                    }

                    model.el = el;

                    // 加载模板
                    container[attributes.position === 'bottom' ? 'append' : 'prepend'](el);

                    // 绑定事件
                    self.observer();

                    // 初始化标志
                    container.data('pagination').initialized = true;

                    // 初始化之后
                    self.callHook('afterInit', el);

                });

            },

            render: function(isBoot) {

                var self = this;
                var model = self.model;
                var el = model.el || $('<div class="paginationjs"></div>');
                var isForced = isBoot !== true;

                // 渲染之前
                self.callHook('beforeRender', isForced);

                var currentPage = model.pageNumber || attributes.pageNumber;
                var pageRange = attributes.pageRange;
                var totalPage = model.totalPage;

                var rangeStart = currentPage - pageRange;
                var rangeEnd = currentPage + pageRange;

                if (rangeEnd > totalPage) {
                    rangeEnd = totalPage;
                    rangeStart = totalPage - pageRange * 2;
                    rangeStart = rangeStart < 1 ? 1 : rangeStart;
                }

                if (rangeStart <= 1) {
                    rangeStart = 1;

                    rangeEnd = Math.min(pageRange * 2 + 1, totalPage);
                }

                el.html(self.createTemplate({
                    currentPage: currentPage,
                    pageRange: pageRange,
                    totalPage: totalPage,
                    rangeStart: rangeStart,
                    rangeEnd: rangeEnd
                }));

                // 渲染之后
                self.callHook('afterRender', isForced);

                return el;
            },

            // 创建模板
            createTemplate: function(args) {

                var self = this;
                var currentPage = args.currentPage;
                var totalPage = args.totalPage;
                var rangeStart = args.rangeStart;
                var rangeEnd = args.rangeEnd;

                var totalNumber = attributes.totalNumber;

                var showPrevious = attributes.showPrevious;
                var showNext = attributes.showNext;
                var showPageNumbers = attributes.showPageNumbers;
                var showNavigator = attributes.showNavigator;
                var showGoInput = attributes.showGoInput;
                var showGoButton = attributes.showGoButton;

                var pageLink = attributes.pageLink;
                var prevText = attributes.prevText;
                var nextText = attributes.nextText;
                var ellipsisText = attributes.ellipsisText;
                var goButtonText = attributes.goButtonText;

                var classPrefix = attributes.classPrefix;
                var activeClassName = attributes.activeClassName;
                var disableClassName = attributes.disableClassName;
                var ulClassName = attributes.ulClassName;

                var formatNavigator = $.isFunction(attributes.formatNavigator) ? attributes.formatNavigator() : attributes.formatNavigator;
                var formatGoInput = $.isFunction(attributes.formatGoInput) ? attributes.formatGoInput() : attributes.formatGoInput;
                var formatGoButton = $.isFunction(attributes.formatGoButton) ? attributes.formatGoButton() : attributes.formatGoButton;

                var autoHidePrevious = $.isFunction(attributes.autoHidePrevious) ? attributes.autoHidePrevious() : attributes.autoHidePrevious;
                var autoHideNext = $.isFunction(attributes.autoHideNext) ? attributes.autoHideNext() : attributes.autoHideNext;

                var header = $.isFunction(attributes.header) ? attributes.header() : attributes.header;
                var footer = $.isFunction(attributes.footer) ? attributes.footer() : attributes.footer;

                var html = '';
                var goInput = '<input type="text" class="J-paginationjs-go-pagenumber">';
                var goButton = '<input type="button" class="J-paginationjs-go-button" value="'+ goButtonText +'">';
                var formattedString;
                var i, pageUrl;

                if (header) {

                    formattedString = self.replaceVariables(header, {
                        currentPage: currentPage,
                        totalPage: totalPage,
                        totalNumber: totalNumber
                    });

                    html += formattedString;
                }

                if (showPrevious || showPageNumbers || showNext) {

                    html += '<div class="paginationjs-pages">';

                    if (ulClassName) {
                        html += '<ul class="'+ ulClassName +'">';
                    }
                    else{
                        html += '<ul>';
                    }

                    // 上一页按钮
                    if (showPrevious) {
                        if (currentPage === 1) {
                            if (!autoHidePrevious) {
                                html += '<li class="'+ classPrefix +'-prev '+ disableClassName +'"><a>'+ prevText +'<\/a><\/li>';
                            }
                        }
                        else{
                            pageUrl = pageLink.replace('{page}', (currentPage - 1));
                            html += '<li class="'+ classPrefix +'-prev J-paginationjs-previous" data-num="'+ (currentPage - 1) +'" title="Previous page"><a href="'+ pageUrl +'">'+ prevText +'<\/a><\/li>';
                        }
                    }

                    // 页码
                    if (showPageNumbers) {
                        if (rangeStart <= 3) {
                            for(i = 1; i < rangeStart; i++) {
                                if (i == currentPage) {
                                    html += '<li class="'+ classPrefix +'-page J-paginationjs-page '+ activeClassName +'" data-num="'+ i +'"><a>'+ i +'<\/a><\/li>';
                                }
                                else{
                                    pageUrl = pageLink.replace('{page}', i);
                                    html += '<li class="'+ classPrefix +'-page J-paginationjs-page" data-num="'+ i +'"><a href="'+ pageUrl +'">'+ i +'<\/a><\/li>';
                                }
                            }
                        }
                        else{
                            if (attributes.showFirstOnEllipsisShow) {
                                pageUrl = pageLink.replace('{page}', 1);
                                html += '<li class="'+ classPrefix +'-page '+ classPrefix +'-first J-paginationjs-page" data-num="1"><a href="'+ pageUrl +'">1<\/a><\/li>';
                            }

                            html += '<li class="'+ classPrefix +'-ellipsis '+ disableClassName +'"><a>'+ ellipsisText +'<\/a><\/li>';
                        }

                        // 主循环
                        for(i = rangeStart; i <= rangeEnd; i++) {
                            if (i == currentPage) {
                                html += '<li class="'+ classPrefix +'-page J-paginationjs-page '+ activeClassName +'" data-num="'+ i +'"><a>'+ i +'<\/a><\/li>';
                            }
                            else{
                                pageUrl = pageLink.replace('{page}', i);
                                html += '<li class="'+ classPrefix +'-page J-paginationjs-page" data-num="'+ i +'"><a href="'+ pageUrl +'">'+ i +'<\/a><\/li>';
                            }
                        }

                        if (rangeEnd >= totalPage - 2) {
                            for(i = rangeEnd + 1; i <= totalPage; i++) {
                                pageUrl = pageLink.replace('{page}', i);
                                html += '<li class="'+ classPrefix +'-page J-paginationjs-page" data-num="'+ i +'"><a href="'+ pageUrl +'">'+ i +'<\/a><\/li>';
                            }
                        }
                        else{
                            html += '<li class="'+ classPrefix +'-ellipsis '+ disableClassName +'"><a>'+ ellipsisText +'<\/a><\/li>';

                            if (attributes.showLastOnEllipsisShow) {
                                pageUrl = pageLink.replace('{page}', totalPage);
                                html += '<li class="'+ classPrefix +'-page '+ classPrefix +'-last J-paginationjs-page" data-num="'+ totalPage +'"><a href="'+ pageUrl +'">'+ totalPage +'<\/a><\/li>';
                            }
                        }
                    }

                    // 下一页按钮
                    if (showNext) {
                        if (currentPage == totalPage) {
                            if (!autoHideNext) {
                                html += '<li class="'+ classPrefix +'-next '+ disableClassName +'"><a>'+ nextText +'<\/a><\/li>';
                            }
                        }
                        else{
                            pageUrl = pageLink.replace('{page}', (currentPage + 1));
                            html += '<li class="'+ classPrefix +'-next J-paginationjs-next" data-num="'+ (currentPage + 1) +'" title="Next page"><a href="'+ pageUrl +'">'+ nextText +'<\/a><\/li>';
                        }
                    }

                    html += '<\/ul><\/div>';

                }

                // 导航条
                if (showNavigator) {

                    if (formatNavigator) {

                        formattedString = self.replaceVariables(formatNavigator, {
                            currentPage: currentPage,
                            totalPage: totalPage,
                            totalNumber: totalNumber
                        });

                        html += '<div class="'+ classPrefix +'-nav J-paginationjs-nav">'+ formattedString +'<\/div>';
                    }
                }

                // 跳转输入框
                if (showGoInput) {

                    if (formatGoInput) {

                        formattedString = self.replaceVariables(formatGoInput, {
                            currentPage: currentPage,
                            totalPage: totalPage,
                            totalNumber: totalNumber,
                            input: goInput
                        });

                        html += '<div class="'+ classPrefix +'-go-input">'+ formattedString +'</div>';
                    }
                }

                // 跳转按钮
                if (showGoButton) {

                    if (formatGoButton) {

                        formattedString = self.replaceVariables(formatGoButton, {
                            currentPage: currentPage,
                            totalPage: totalPage,
                            totalNumber: totalNumber,
                            button: goButton
                        });

                        html += '<div class="'+ classPrefix +'-go-button">'+ formattedString +'</div>';
                    }
                }

                if (footer) {

                    formattedString = self.replaceVariables(footer, {
                        currentPage: currentPage,
                        totalPage: totalPage,
                        totalNumber: totalNumber
                    });

                    html += formattedString;
                }

                return html;
            },

            // 跳转到指定的页面
            go: function(number, callback) {

                var self = this;
                var model = self.model;

                if (self.disabled) return;

                var pageNumber = number;
                var pageSize = attributes.pageSize;
                var totalPage = model.totalPage;

                pageNumber = parseInt(pageNumber);

                // 页码范围
                if (!pageNumber || pageNumber < 1 || pageNumber > totalPage) return;

                // 同步模式
                if (self.sync) {
                    render(self.getDataSegment(pageNumber));
                    return;
                }

                var postData = {};
                var alias = attributes.alias || {};

                postData[alias.pageSize ? alias.pageSize : 'pageSize'] = pageSize;
                postData[alias.pageNumber ? alias.pageNumber : 'pageNumber'] = pageNumber;

                var formatAjaxParams = {
                    type: 'get',
                    cache: false,
                    data: {},
                    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                    dataType: 'json',
                    async: true
                };

                $.extend(true, formatAjaxParams, attributes.ajax);
                $.extend(formatAjaxParams.data || {}, postData);

                formatAjaxParams.url = attributes.dataSource;
                formatAjaxParams.success = function(response) {
                    render(self.filterDataByLocator(response));
                };
                formatAjaxParams.error = function(jqXHR, textStatus, errorThrown) {
                    attributes.formatAjaxError && attributes.formatAjaxError(jqXHR, textStatus, errorThrown);
                    self.enable();
                };

                self.disable();

                $.ajax(formatAjaxParams);

                function render(data) {

                    // 分页之前
                    if (self.callHook('beforePaging', pageNumber) === false) return false;

                    // Pagination direction
                    model.direction = typeof model.pageNumber === 'undefined' ? 0 : (pageNumber > model.pageNumber ? 1 : -1);

                    model.pageNumber = pageNumber;

                    self.render();

                    if (self.disabled && !self.sync) {
                        // enable
                        self.enable();
                    }

                    // 缓存模型数据
                    container.data('pagination').model = model;

                    // 格式结果之前执行的回调函数
                    if ($.isFunction(attributes.formatResult)) {
                        var cloneData = $.extend(true, [], data);
                        if (!Helpers.isArray(data = attributes.formatResult(cloneData))) {
                            data = cloneData;
                        }
                    }

                    container.data('pagination').currentPageData = data;

                    // callback
                    self.doCallback(data, callback);

                    // 分页之后
                    self.callHook('afterPaging', pageNumber);

                    // 已经是第一页
                    if (pageNumber == 1) {
                        self.callHook('afterIsFirstPage');
                    }

                    // 已经是最后一页
                    if (pageNumber == model.totalPage) {
                        self.callHook('afterIsLastPage');
                    }

                }
            },

            doCallback: function(data, customCallback) {
                var self = this;
                var model = self.model;

                if ($.isFunction(customCallback)) {
                    customCallback(data, model);
                }
                else if ($.isFunction(attributes.callback)) {
                    attributes.callback(data, model);
                }
            },

            destroy: function() {

                // 销毁之前
                if (this.callHook('beforeDestroy') === false) return;

                this.model.el.remove();
                container.off();

                // 删除样式元素
                $('#paginationjs-style').remove();

                // 销毁之后
                this.callHook('afterDestroy');
            },

            previous: function(callback) {
                this.go(this.model.pageNumber - 1, callback);
            },

            next: function(callback) {
                this.go(this.model.pageNumber + 1, callback);
            },

            disable: function() {
                var self = this;
                var source = self.sync ? 'sync' : 'async';

                // 禁用之前
                if (self.callHook('beforeDisable', source) === false) return;

                self.disabled = true;
                self.model.disabled = true;

                // 禁用之后
                self.callHook('afterDisable', source);
            },

            enable: function() {
                var self = this;
                var source = self.sync ? 'sync' : 'async';

                // 启用之前
                if (self.callHook('beforeEnable', source) === false) return;

                self.disabled = false;
                self.model.disabled = false;

                // 启用之后
                self.callHook('afterEnable', source);
            },

            refresh: function(callback) {
                this.go(this.model.pageNumber, callback);
            },

            show: function() {
                var self = this;

                if (self.model.el.is(':visible')) return;

                self.model.el.show();
            },

            hide: function() {
                var self = this;

                if (!self.model.el.is(':visible')) return;

                self.model.el.hide();
            },

            // 替换变量的模板
            replaceVariables: function(template, variables) {

                var formattedString;

                for(var key in variables) {
                    var value = variables[key];
                    var regexp = new RegExp('<%=\\s*'+ key +'\\s*%>', 'img');

                    formattedString = (formattedString || template).replace(regexp, value);
                }

                return formattedString;
            },
            // 替换pageLink中的页面
            replacePageLink : function(template, variables){
                var formattedString;

                for(var key in variables) {
                    var value = variables[key];
                    var regexp = new RegExp('{'+ key +'}', 'img');

                    formattedString = (formattedString || template).replace(regexp, value);
                }

                return formattedString;
            },

            // 获取数据段
            getDataSegment: function(number) {
                var pageSize = attributes.pageSize;
                var dataSource = attributes.dataSource;
                var totalNumber = attributes.totalNumber;

                var start = pageSize * (number - 1) + 1;
                var end = Math.min(number * pageSize, totalNumber);

                return dataSource.slice(start - 1, end);
            },

            // 获取总页数
            getTotalPage: function() {
                return Math.ceil(attributes.totalNumber / attributes.pageSize);
            },

            // 获取数据定位
            getLocator: function(locator) {
                var result;

                if (typeof locator === 'string') {
                    result = locator;
                }
                else if ($.isFunction(locator)) {
                    result = locator();
                }
                else{
                    throwError('"locator" is incorrect. (String | Function)');
                }

                return result;
            },

            // 通过 "locator" 过滤数据
            filterDataByLocator: function(dataSource) {

                var locator = this.getLocator(attributes.locator);
                var filteredData;

                // dataSource 是一个对象,使用 “locator” 来定位真正的数据
                if (Helpers.isObject(dataSource)) {
                    try{
                        $.each(locator.split('.'), function(index, item) {
                            filteredData = (filteredData ? filteredData : dataSource)[item];
                        });
                    }
                    catch(e) {}

                    if (!filteredData) {
                        throwError('dataSource.'+ locator +' is undefined.');
                    }
                    else if (!Helpers.isArray(filteredData)) {
                        throwError('dataSource.'+ locator +' must be an Array.');
                    }
                }

                return filteredData || dataSource;
            },

            // 解析 dataSource
            parseDataSource: function(dataSource, callback) {

                var self = this;
                var args = arguments;

                if (Helpers.isObject(dataSource)) {
                    callback(attributes.dataSource = self.filterDataByLocator(dataSource));
                }
                else if (Helpers.isArray(dataSource)) {
                    callback(attributes.dataSource = dataSource);
                }
                else if ($.isFunction(dataSource)) {
                    attributes.dataSource(function(data) {
                        if ($.isFunction(data)) {
                            throwError('Unexpect parameter of the "done" Function.');
                        }

                        args.callee.call(self, data, callback);
                    });
                }
                else if (typeof dataSource === 'string') {
                    if (/^https?|file:/.test(dataSource)) {
                        attributes.ajaxDataType = 'jsonp';
                    }

                    callback(dataSource);
                }
                else{
                    throwError('Unexpect data type of the "dataSource".');
                }
            },

            callHook: function(hook) {
                var paginationData = container.data('pagination');
                var result;

                var args = Array.prototype.slice.apply(arguments);
                args.shift();

                if (attributes[hook] && $.isFunction(attributes[hook])) {
                    if (attributes[hook].apply(global, args) === false) {
                        result = false;
                    }
                }

                if (paginationData.hooks && paginationData.hooks[hook]) {
                    $.each(paginationData.hooks[hook], function(index, item) {
                        if (item.apply(global, args) === false) {
                            result = false;
                        }
                    });
                }

                return result !== false;
            },

            observer: function() {

                var self = this;
                var el = self.model.el;

                // Go to page
                container.on(eventPrefix + 'go', function(event, pageNumber, done) {

                    pageNumber = parseInt($.trim(pageNumber));

                    if (!pageNumber) return;

                    if (!$.isNumeric(pageNumber)) {
                        throwError('"pageNumber" is incorrect. (Number)');
                    }

                    self.go(pageNumber, done);
                });

                // Page click
                el.delegate('.J-paginationjs-page', 'click', function(event) {
                    var current = $(event.currentTarget);
                    var pageNumber = $.trim(current.attr('data-num'));

                    if (!pageNumber || current.hasClass(attributes.disableClassName) || current.hasClass(attributes.activeClassName)) return;

                    // 页面按钮点击之前
                    if (self.callHook('beforePageOnClick', event, pageNumber) === false) return false;

                    self.go(pageNumber);

                    // 页面按钮点击之后
                    self.callHook('afterPageOnClick', event, pageNumber);

                    if (!attributes.pageLink) return false;
                });

                // Previous click
                el.delegate('.J-paginationjs-previous', 'click', function(event) {
                    var current = $(event.currentTarget);
                    var pageNumber = $.trim(current.attr('data-num'));

                    if (!pageNumber || current.hasClass(attributes.disableClassName)) return;

                    // 上一页点击之前
                    if (self.callHook('beforePreviousOnClick', event, pageNumber) === false) return false;

                    self.go(pageNumber);

                    // 上一页点击之后
                    self.callHook('afterPreviousOnClick', event, pageNumber);

                    if (!attributes.pageLink) return false;
                });

                // Next click
                el.delegate('.J-paginationjs-next', 'click', function(event) {
                    var current = $(event.currentTarget);
                    var pageNumber = $.trim(current.attr('data-num'));

                    if (!pageNumber || current.hasClass(attributes.disableClassName)) return;

                    // 下一页点击之前
                    if (self.callHook('beforeNextOnClick', event, pageNumber) === false) return false;

                    self.go(pageNumber);

                    // 下一页点击之后
                    self.callHook('afterNextOnClick', event, pageNumber);

                    if (!attributes.pageLink) return false;
                });

                // Go button click
                el.delegate('.J-paginationjs-go-button', 'click', function() {
                    var pageNumber = $('.J-paginationjs-go-pagenumber', el).val();

                    // 跳转按钮点击之前
                    if (self.callHook('beforeGoButtonOnClick', event, pageNumber) === false) return false;

                    container.trigger(eventPrefix + 'go', pageNumber);

                    // 跳转按钮点击之后
                    self.callHook('afterGoButtonOnClick', event, pageNumber);
                });

                // go input enter
                el.delegate('.J-paginationjs-go-pagenumber', 'keyup', function(event) {
                    if (event.which === 13) {
                        var pageNumber = $(event.currentTarget).val();

                        // 输入之前
                        if (self.callHook('beforeGoInputOnEnter', event, pageNumber) === false) return false;

                        container.trigger(eventPrefix + 'go', pageNumber);

                        // 重新获取焦点
                        $('.J-paginationjs-go-pagenumber', el).focus();

                        // 输入之后
                        self.callHook('afterGoInputOnEnter', event, pageNumber);
                    }
                });

                // 上一页
                container.on(eventPrefix + 'previous', function(event, done) {
                    self.previous(done);
                });

                // 下一页
                container.on(eventPrefix + 'next', function(event, done) {
                    self.next(done);
                });

                // 禁用
                container.on(eventPrefix + 'disable', function() {
                    self.disable();
                });

                // 启用
                container.on(eventPrefix + 'enable', function() {
                    self.enable();
                });

                // 刷新
                container.on(eventPrefix + 'refresh', function(event, done) {
                    self.refresh(done);
                });

                // 显示
                container.on(eventPrefix + 'show', function() {
                    self.show();
                });

                // 隐藏
                container.on(eventPrefix + 'hide', function() {
                    self.hide();
                });

                // 销毁
                container.on(eventPrefix + 'destroy', function() {
                    self.destroy();
                });

                // 是否加载默认页面
                if (attributes.triggerPagingOnInit) {
                    container.trigger(eventPrefix + 'go', Math.min(attributes.pageNumber, self.model.totalPage));
                }
            }
        };


        // If initial
        if (container.data('pagination') && container.data('pagination').initialized === true) {

            // 处理事件
            if ($.isNumeric(options)) {
                // container.pagination(5)
                container.trigger.call(this, eventPrefix + 'go', options, arguments[1]);
                return this;
            }
            else if (typeof options === 'string') {

                var args = Array.prototype.slice.apply(arguments);
                args[0] = eventPrefix + args[0];

                switch(options) {
                    case 'previous':
                    case 'next':
                    case 'go':
                    case 'disable':
                    case 'enable':
                    case 'refresh':
                    case 'show':
                    case 'hide':
                    case 'destroy':
                        container.trigger.apply(this, args);
                        break;

                    // 得到选中页码
                    case 'getSelectedPageNum':
                        if (container.data('pagination').model) {
                            return container.data('pagination').model.pageNumber;
                        }
                        else{
                            return container.data('pagination').attributes.pageNumber;
                        }

                    // 得到总页面
                    case 'getTotalPage':
                        return container.data('pagination').model.totalPage;

                    // 得到选中的页面数据
                    case 'getSelectedPageData':
                        return container.data('pagination').currentPageData;

                    // 分页是否被禁用
                    case 'isDisabled':
                        return container.data('pagination').model.disabled === true;

                    default:
                        throwError('Pagination do not provide action: ' + options);
                }

                return this;
            } else {
                // 卸载旧实例之前初始化一个新的
                uninstallPlugin(container);
            }
        }
        else{
            if (!Helpers.isObject(options)) {
                throwError('Illegal options');
            }
        }


        // 属性
        var attributes = $.extend({}, arguments.callee.defaults, options);

        // 检查参数
        parameterChecker(attributes);

        pagination.initialize();

        return this;
    };

    // 实例的默认值
    $.fn[pluginName].defaults = {

        // Data source
        // Array | String | Function | Object
        //dataSource: '',

        // String | Function
        //locator: 'data',

        // 总条目,必须指定分页是异步的
        totalNumber: 1,

        // 默认页数
        pageNumber: 1,

        // 每页的条目
        pageSize: 10,

        // 页面范围(当前页的两边)
        pageRange: 2,

        // 是否显示 'Previous' 按钮
        showPrevious: true,

        // 是否显示 'Next' 按钮
        showNext: true,

        // 是否显示分页按钮
        showPageNumbers: true,

        showNavigator: false,

        // 是否显示 'Go' 输入框
        showGoInput: false,

        // 是否显示 'Go' 按钮
        showGoButton: false,

        // 页面链接
        pageLink: '',

        // 'Previous' 文本
        prevText: '&laquo;',

        // 'Next' 文本
        nextText: '&raquo;',

        // 省略号文本
        ellipsisText: '...',

        // 'Go' 按钮文本
        goButtonText: 'Go',

        // 额外分页元素的样式名称
        //className: '',

        classPrefix: 'paginationjs',

        // 默认当前页的样式名
        activeClassName: 'active',

        // 默认禁用的样式名
        disableClassName: 'disabled',

        // 分页中ul的样式名
        //ulClassName: '',

        // 是否插入内联样式
        inlineStyle: true,

        formatNavigator: '<%= currentPage %> / <%= totalPage %>',

        formatGoInput: '<%= input %>',

        formatGoButton: '<%= button %>',

        // 分页元素在容器中的位置
        position: 'bottom',

        // 当第一页时自动隐藏上一页按钮
        autoHidePrevious: false,

        // 当最后一页时自动隐藏下一页按钮
        autoHideNext: false,

        //header: '',

        //footer: '',

        // 别名为自定义分页参数
        //alias: {},

        // 是否在初始化时触发分页
        triggerPagingOnInit: true,

        // 当不到一页的时候是否隐藏分页
        hideWhenLessThanOnePage: false,

        showFirstOnEllipsisShow: true,

        showLastOnEllipsisShow: true,

        // 分页回调
        callback: function() {}
    };

    // 注册钩子
    $.fn[pluginHookMethod] = function(hook, callback) {

        if (arguments.length < 2) {
            throwError('Missing argument.');
        }

        if (!$.isFunction(callback)) {
            throwError('callback must be a function.');
        }

        var container = $(this);
        var paginationData = container.data('pagination');

        if (!paginationData) {
            container.data('pagination', {});
            paginationData = container.data('pagination');
        }

        !paginationData.hooks && (paginationData.hooks = {});

        //paginationData.hooks[hook] = callback;
        paginationData.hooks[hook] = paginationData.hooks[hook] || [];
        paginationData.hooks[hook].push(callback);

    };

    // 静态方法
    $[pluginName] = function(selector, options) {

        if (arguments.length < 2) {
            throwError('Requires two parameters.');
        }

        var container;

        // 'selector' is a jQuery object
        if (typeof selector !== 'string' && selector instanceof jQuery) {
            container = selector;
        }
        else{
            container = $(selector);
        }

        if (!container.length) return;

        container.pagination(options);

        return container;

    };

    // ============================================================
    // helpers
    // ============================================================

    var Helpers = {};

    // Throw error
    function throwError(content) {
        throw new Error('Pagination: '+ content);
    }

    // 检查参数
    function parameterChecker(args) {

        if (!args.dataSource) {
            throwError('"dataSource" is required.');
        }

        if (typeof args.dataSource === 'string') {
            if (typeof args.totalNumber === 'undefined') {
                throwError('"totalNumber" is required.');
            }
            else if (!$.isNumeric(args.totalNumber)) {
                throwError('"totalNumber" is incorrect. (Number)');
            }
        }
        else if (Helpers.isObject(args.dataSource)) {
            if (typeof args.locator === 'undefined') {
                throwError('"dataSource" is an Object, please specify "locator".');
            }
            else if (typeof args.locator !== 'string' && !$.isFunction(args.locator)) {
                throwError(''+ args.locator +' is incorrect. (String | Function)');
            }
        }
    }

    // 卸载插件
    function uninstallPlugin(target) {
        var events = ['go', 'previous', 'next', 'disable', 'enable', 'refresh', 'show', 'hide', 'destroy'];

        // off events of old instance
        $.each(events, function(index, value) {
            target.off(eventPrefix + value);
        });

        // reset pagination data
        target.data('pagination', {});

        // remove old
        $('.paginationjs', target).remove();
    }

    // 对象类型检测
    function getObjectType(object, tmp) {
        return ( (tmp = typeof(object)) == "object" ? object == null && "null" || Object.prototype.toString.call(object).slice(8, -1) : tmp ).toLowerCase();
    }
    $.each(['Object', 'Array'], function(index, name) {
        Helpers['is' + name] = function(object) {
            return getObjectType(object) === name.toLowerCase();
        };
    });

    /*
     * export via AMD or CommonJS
     * */
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return $;
        });
    }

})(this, window.jQuery);
