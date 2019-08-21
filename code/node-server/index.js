const Hapi = require('hapi');
const Axios = require('axios')
const init = async () => {

  const server = Hapi.server({
      port: 3000,
      host: 'localhost'
  });
  server.route({
      method: 'GET',
      path:'/',
      handler: (request, h) => {
          console.log(request.params)
          const { echostr } = request.params
          return 'Hello World!';
      }
  });
  server.route({
    method: 'post',
    path:'/login',
    handler: async (request, h) => {
      const { code } = request.payload
      const Url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxe77d6963852aebca&secret=447b96c081d99e68b192b491412a1900&code=${code}&grant_type=authorization_code`
      const { access_token, openid } = await Axios.get(url)
      console.log(111)
      const UserUrl = `https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN`
      const userInfo = await Axios.get(UserUrl)
      console.log(userInfo, 999)
      return userInfo

    }
  })

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();
