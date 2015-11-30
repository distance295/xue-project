# 模块

## 一、文件路径
```
/source/widget/
```
## 二、文件夹命名

`模块.功能`，例如，公共头部：`Public.Header`

首字母大写，点后面的首字母尽量大写

## 三、文件夹内容
1. 模板文件，后缀为`.tpl`
    + 如果只涉及一个模板文件的，直接用 `index.tpl`
    + 如果多个的，主文件用index，其他可以按照功能命名
    
2. 样式文件，后缀为`.less`

3. 交互文件，后缀为`.js` or `.coffee`

4. 数据文件，后缀为`.json`

## 四、tpl模板内容
1. 头部声明依赖
    ```
    <!--
        @require demo.js
        @require "demo.css"
    -->
    ```

2. 模块ID
    + 如果是页面中唯一存在的模块，则外层必须加上ID，
    + ID以 `module-` 开头，例如：`module-simple`
    + 如果页面中存在多个，则外层用class，同时增加属性 `data-module-id`，例如：`data-module-id="simple"`
    
## 五、Less 文件内容
1. 模块中不用写公用变量，已在 `/source/static/less/default.less` 中声明
2. 最好不要写全局类，如：
    ```
    .hide {}
    ul {}
    ```
    
3. 如非必要，请不要修改bootstrap默认类，如：
    ```
    .panel {}
    .tab {}
    ```
    
4. 尽量把自己模块的内容，都放到模块ID的类下面，如：
    ```
    #module-simple {
        .simple-wrap {}
        .item {
            a {}
        }
    }
    ```
    
    错误的：
    ```
    #module-simple {
        .simple-wrap {}
    }
    .item {
        a {}
    }
    ```
    
5. 能够用到bootstrap的，尽量就不要自己再写了。再好好熟悉下bootstrap 的 API，里面提供丰富的 UI组件。
    + 全局CSS样式：http://v3.bootcss.com/css/
    + 组件：http://v3.bootcss.com/components/
    + JavaScript 插件：http://v3.bootcss.com/javascript/

## 六、JS内容
1. 外部资源的引用
    > 如果需要引用外部资源，请用`__uri()` 将其括起来

    > 例如：` var img = __uri('images/logo.gif');`
    
2. 声明模块名
    ```
    var simple = simple || {};
    ```

3. 给模块增加配置属性
    ```
    simple.opt = simple.opt || {
        id : 'ModuleSimple',
        dom : '#module-simple',
        cls : 'active',
        isShow : false,
        con : '。。。。。。这里是内容'
    };
    ```

4. 模块中可变内容均以配置或参数形式存在
    
    > 如果模块中涉及到一些可变的内容，则可以按照下面两种方式处理：
    
    + 配置
        ```
        simple.setCls = function(){
            $(this.opt.dom).addClass(this.opt.cls); // 这里取的是 simple.opt.cls 内容
        };
        ```
        
    + 参数
        ```
        simple.setContent = function(content){
            $(this.opt.dom).html(content); // 在这里直接取参数中的content内容
        };
        ```

5. 避免所有即执行脚本
    
    > 由于我们的模块要合并到一起，所以不要在模块中写立即执行的脚本，需要把这些立即执行的内容封装到对应的方法中；
    
    + 给模块增加即执行方法：
        ```
        simple.onload = function(){
            this.onClick();
            this.onShow();
            // ... 这里写需要即执行的事件内容
        };
        ```
        
    + 给模块增加事件绑定方法：
        ```
        simple.onClick = function(){
            $(this.opt.dom).on('click', function(){
                // ... 这里写事件的内容
            });
        };
        simple.onShow = function(){};
        ```
    
6. 增加init方法

    + 初始化配置
        ```
        simple.init = function(conf){
            // 更新配置信息
            $.extend(this.opt, conf);
        };
        ```
        
    + 初始化事件绑定
        ```
        simple.init = function(conf){
            // 事件绑定
            $(this.opt.dom).on('click', this.onClick);
        };
        ```

7. 所有用到的变量、参数，以及要绑定事件的dom元素，都需要增加合法性的判断
    + 要绑定元素不存在时的处理：
        ```
        if($(this.opt.dom).length == 0){
            return false;
        }
        ```
        
    + 内容存在时再执行：
        ```
        if(content){
            $(this.opt.dom).html(content);
        }
        ```
        
    + 增加公共异常处理方法：
        ```
        /**
         * 异常处理方法
         * @param {String}      err         错误内容
         * @param {DOM Object}  dom         相关的DOM元素，可以是出错的元素，可以是显示错误信息的元素等
         * @param {Function}    callback    出现错误时的回调函数
         */
        simple.error = function(err, dom, callback){
            // ... 这里是异常处理的代码实现
        };
        ```


## 七、FIS3 的内置语法

1. 声明依赖
    ```
    <!--
        @require simple.js
        @require "simple.css"
    -->
    ```

    > 参照：http://fis.baidu.com/fis3/docs/user-dev/require.html

2. 定位资源
    ```
    var img = __uri('images/simple.gif');
    ```

    > 参照：http://fis.baidu.com/fis3/docs/user-dev/uri.html

3. 内容嵌入

    > 引用路径后面加：?__inline
    ```
    <link rel="import" href="simple.html?__inline">
    ```

    > 参照：http://fis.baidu.com/fis3/docs/user-dev/inline.html