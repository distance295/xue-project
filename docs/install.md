# 本地部署环境安装说明

## 一、部署工具安装

### 1. 基础工具
```
$ npm install -g fis3
```

### 2. 依赖工具

```
$ fis3 install fis3-postpackager-loader
```
### 3. 依赖插件

```
$ fis3 install fis-parser-less
```
  
## 发布及部署命令

1. 执行deploy进行文件发布
```
$xue-project>source>deploy.bat
```
> Mac下是 deploy.sh

2. 开启本地服务
```
$xue-project>source>server.bat
```
> Mac下是 server.sh
