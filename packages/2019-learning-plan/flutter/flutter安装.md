# flutter 安装

经过许久的关注，及最近 google 算是真正地推行`flutter`时，加上*掘金小册*也有相应的教程，我知道自己得跟着这一波潮流学习了，不然迟早会面临着小程序的危（大家都会了就你不会),而我也想有一个好的学习对象，之前是想学`uni-app`或者`react-native`，但终究不如这个。好了，废话不多说，开始旅行。

## flutter 了解

- [flutter 英文网](https://flutter.dev)
- [flutter 中文网](https://flutterchina.club)
- [flutter 实战](https://book.flutterchina.club)
- [flutter 掘金小册](https://juejin.im/book/5c5423ef6fb9a049cd54a213)

## 安装 针对`windows`

- Flutter SDK
- Flutter IDE

### 环境变量

下载的 Flutter 默认是国外镜像，类似 node 的 npm，需要切换到国内镜像
在电脑的 _环境变量_ -> _用户变量_ 添加

```
FLUTTER_STORAGE_BASE_URL: https://storage.flutter-io.cn
PUB_HOSTED_URL: https://pub.flutter-io.cn
```

### Flutter SDK 安装

- 需要下载 [Android Studio](https://developer.android.com/studio),可以用来打包`apk`，同时自带`Android SDK`
- 下载 [Flutter SDK](https://flutter.dev/docs/development/tools/sdk/releases?tab=windows) 尽量选择稳定版`Stable channel`下的，同时配置 _环境变量_， 运行 `flutter doctor` 便会知道结果

### 建立 flutter app

在建立`flutter app`时，还需要下载三个东西

- `Android Studio` 中下载两个插件
  - `Flutter` 插件
  - `Dart` 插件
- `Android 模拟器` 在`tools` -> `AVD Manager` -> `CREATE VIRTUAL ...` 选择需要需要类型

#### 运行 App

- 选择模拟器 devices
- 点击 运行/ debugger
- 模拟器便会出现 flutter 的界面

## 重点说下安装遇到的问题

上述安装略显单薄一些，只是想简化一下思路，不然安装的过程有些蒙圈

安装 `issuse` 汇总

- 安装 `Android Studio` 报错

  ```
    unable to access android sdk add-on list
  ```

  > 解决办法

  `Android Studio` 安装目录下 `bin` -> `idea.properties` 下添加

  ```
    disable.android.first.run=true
  ```

- 运行 `Android Studio`

  ```
    Failed to load JVM DLL ...... if you already have a ...
  ```

  > 解决办法

  弄清楚自己电脑的版本 32/64, 运行对应的 `.exe` 文件，eg，我电脑 64 位，运行 32 位的 Android Studio 报上述错误，运行 64 位的 解决

- 执行 flutter app

  ```
    Running 'flutter package get ' in flutter_app Unhandled exception: 'PUB_HOSTED_URL'
  ```

  > 解决办法

  上诉错误信息其实有提示（这里没有补全）
  需要在之前的添加环境变量时,加上`https://`

- 执行 flutter app

  ```
    No Connected Devices Found
  ```

  > 解决办法

  选择需要的模拟器，这是既没有选择真机，也没有选择模拟器，导致无法运行

- 执行 flutter app

  ```
    Initializing gradle ...
    Unzipping ..
    Exception in thread 'main' java.util.zip.ZipExceptinon: error in opening zip file ...
  ```

  > 解决办法

  本人也很是无语，为何下载下来的会出现包有问题
  需要重新下载`gradle`包，一定要自己审查自己当前提示的具体是哪一个包，一定要下对应的，将本地替换掉
  文件目录 `C盘` -> `用户` -> 本机用户(当前电脑的名称文件) -> `.gradle` -> `wrapper` -> `dists` 下 具体的信息再进行替换即可

- 执行 flutter app

  ```
    Error connecting to the service protocol: HttpException: Connection closed before full header was received, uri = http://127.0.0.1:51079/gM04ir90...
  ```

  解决办法 [flutter issues](https://github.com/flutter/flutter/issues/32696)

  将下载的模拟器重新换一个 `Q` 替换为 `pie`，这个可能需要多尝试几个即可
