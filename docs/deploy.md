# 文件发布说明

 此说明仅支持PC端

## 一、按照发布路径划分

### 1、发布到本地服务器

在项目目录 `/source/` 下执行下面内容：

1) 发布
    ```
    $ release.bat
    ```
    
    > 此时文件均已发布至本fis3地默认的目录中
    > 
    > C:\Users\MrPai\AppData\Local\.fis3-tmp\www

2) 启动服务
    ```
    $ server.bat
    ```

### 2、发布到项目文件夹下
> + 由于fis只支持单项目，所以我们的文件将按照三个项目来发布
> + 所有文件都放在 `/website/` 目录下
> + 打开服务时尽可能结束掉之前的服务

1) 商城

    + 发布
        ```
        $ deploy_mall.bat
        ```
        > 文件会发布到 /website/`Mall`/ 目录下

    + 打开服务
        ```
        $ server_mall.bat
        ```
        

2) 学习中心

    + 发布
        ```
        $ deploy_home.bat
        ```
        > 文件会发布到 /website/`UserHome`/ 目录下

    + 打开服务
        ```
        $ server_home.bat
        ```
        
3) 账户设置

    + 发布
        ```
        $ deploy_account.bat
        ```
        > 文件会发布到 /website/`UserManage`/ 目录下

    + 打开服务
        ```
        $ server_account.bat
        ```

### 3、发布到SVN对应目录下

> 必须要进入到相关的目录后再进行发布

1) 商城

    ```
    $ source> cd ../website/Mall
    $ website/Mall> deploy.bat
    ```

2) 学习中心

    ```
    $ source> cd ../website/UserHome
    $ website/UserHome> deploy.bat
    ```


3) 账户设置

    ```
    $ source> cd ../website/UserManage
    $ website/UserManage> deploy.bat
    ```

## 二、按照项目划分

先进到source目录下
```
$ cd source
$ source> 
```

### 1、商城

1) 发布到项目目录中
    ```
    $ source> deploy_mall.bat
    ```

2) 查看项目目录中的效果
    ```
    $ source> server_mall.bat
    ```

3) 发布到SVN目录中
    ```
    $ source> cd ../website/Mall
    $ website/Mall> deploy.bat
    ```


### 2、学习中心

1) 发布到项目目录中
    ```
    $ source> deploy_home.bat
    ```

2) 查看项目目录中的效果
    ```
    $ source> server_home.bat
    ```

3) 发布到SVN目录中
    ```
    $ source> cd ../website/UserHome
    $ website/UserHome> deploy.bat
    ```


### 3、账户设置

1) 发布到项目目录中
    ```
    $ source> deploy_account.bat
    ```

2) 查看项目目录中的效果
    ```
    $ source> server_account.bat
    ```

3) 发布到SVN目录中
    ```
    $ source> cd ../website/UserManage
    $ website/UserManage> deploy.bat
    ```

## 三、配置文件

目录：source/conf/deploy-`对应模块`.bat

我是按照我本地目录结构写的，大家用的时候需要修改为自己的SVN目录

## 四、SVN目录

1) 主目录：
    E:\work\svn\xes\xes_v4\

2) 项目目录：
    + 商城：
    主目录下的`\www\app\webroot\`
    + 学习中心：
    主目录下的`\i\app\webroot\`
    + 账户设置：
    主目录下的`\account\app\webroot\`
