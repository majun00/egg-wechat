# wechat_public_number_demo



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

### 项目运行指南

```
1、导入工程、安装依赖
2、启动natapp（内外网映射工具），项目映射到本地80端口
3、将natapp的地址替换项目中需要使用的链接的地址例如：菜单地址：app.js文件中三个点击url，controller/home.js中的getUserInfo文件中的重定向url。
4、更新微信测试公众号的配置链接
   4.1 测试公众号链接入口，http://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login
   4.2 在页面查看 appid appsecret 配置到config/config.default.js中
   4.3 配置：接口配置信息修改 url为wechat接入的接口，项目地址+‘/wechat’，token为wechat（可以自定义）需要与本地工程一致。先开启工程，然后再点击修改按钮，会提示配置成功。
   4.4 配置：JS接口安全域名修改，natapp地址，不需要http://
   4.5 配置：体验接口权限表中的网页授权获取用户基本信息，点击修改，地址为natapp地址，不需要http://
5、扫描微信公众号，即可查看微信公众号效果。
```

微信公众号配置截图：
![配置页1](https://upload-images.jianshu.io/upload_images/2227968-f0aed7bf4bde33e5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![配置页2](https://upload-images.jianshu.io/upload_images/2227968-32a0b120450c1073.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
