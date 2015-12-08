# 本地部署环境安装说明

## 一、部署工具安装

### 1. 基础工具
```
$ npm install -g fis3
```

### 2. 依赖工具

```
$xue-project> fis3 install fis3-postpackager-loader
```
### 3. 依赖插件

```
$xue-project> fis3 install fis-parser-less
```
  
## 二、发布及部署命令

1. 执行release进行文件发布
```
$xue-project>source>release.bat
```
> Mac下是 release.sh

2. 开启本地服务
```
$xue-project>source>server.bat
```
> Mac下是 server.sh

3. 打开server默认文件夹
```
$ fis3 server open
```

4. 发布到项目文件夹内
```
$xue-project>source>deploy.bat
```
> Mac下是 deploy.sh

## 三、文件监听

1. server 只需要启动一次即可；
2. release 中已经设置了文件监听，当文件修改后会自动发布；
3. 每次更新模块文件或者样式以及js之后，需要保存下 template文件夹下的tpl文件，才可实现自动发布；
