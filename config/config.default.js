'use strict';

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531375887184_8863';

  // add your config here
  config.middleware = [ 'xml2js' ];

  config.wechat_config = {
    token: 'testtokenmajun',
    appId: 'wx90f516ca6172a46b',
    appSecret: 'f72b8a25e1c0ebfe441a6b2e5833b0ad',
    getAccessTokenUrl: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET',
    postCreateMenuUrl: 'https://api.weixin.qq.com/cgi-bin/menu/create?access_token=ACCESS_TOKEN',
    getUserInfoUrl: 'https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN',
    getJsApiTicketUrl: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi',
    getOauthAccessTokenUrl: 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code',
    getOauthUserInfoUrl: 'https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN',
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
  };

  return config;
};
