'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // js页面引入jssdk请求，发送四个验证字段给前端
  router.get('/', controller.home.index);

  // 项目启动微信启动前与服务端交互验证
  router.get('/wechat', controller.home.fromWechat);
  // 处理用户提交的请求
  router.post('/wechat', controller.home.toWechat);

  // 获取用户信息，需要重定向后端URL
  router.get('/oauth', controller.home.oauth);
  // 获取用户信息的请求，链接，需要重定向到‘/oauth’
  router.get('/getUserInfo', controller.home.getUserInfo);
  // 访问jquery-weui网页（新闻网页）
  router.get('/index', controller.home.main);
  // 访问jquery-weui网页新闻详情页面
  router.get('/index_detail', controller.home.index_detail);
};
