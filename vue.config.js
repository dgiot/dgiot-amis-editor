const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  chainWebpack: (config) => {
    if (process.env.BUILD_TARGET === 'lib') {
      config.externals = {
        vue: 'Vue',
        axios: 'axios',
        amis: 'amis',
        'element-ui': 'ELEMENT',
      }
    }
    config.module
      .rule('js')
      .include.add(resolve('packages'))
      .end()
      .use('bable')
      .loader('bable-loader')
      .tap((options) => {
        return options
      })
  },
}
