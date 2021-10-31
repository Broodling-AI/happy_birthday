const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  // devServer: {
  //   host: '192.168.1.167',
  //   port: 8080,
  //   https: false,
  //   hotOnly: false,
  // },
  // 配置项目部署信息
  publicPath: process.env.NODE_ENV === 'production'
    ? '/happy_birthday/'   // 这里是远程仓库名
    : '/'
    ,
  // 配置别名
  lintOnSave: true,
    chainWebpack: (config)=>{
      config.resolve.alias
        .set('@', resolve('src'))
        .set('@assets',resolve('src/assets'))
        .set('@components',resolve('src/components'))
        .set('@views',resolve('src/views'))
    },
  // 配置px自动转换rem
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 108,
            propList: ['*']
          })
        ]
      }
    }
  }
}