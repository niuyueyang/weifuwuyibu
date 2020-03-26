const webpack = require('webpack')
const APP_NAME = require('./package.json').name
const PORT = require('./package.json').devPort

const PROXY = {
  '/app-typescript/': {
    target: 'http://localhost:10241/'
  },
  '/app-javascript/': {
    target: 'http://localhost:10242/'
  }
}

const NODE_ENV = process.env.NODE_ENV || 'development'

log('APP_NAME: ', APP_NAME)
log('NODE_ENV: ', NODE_ENV)

module.exports = {
  publicPath: './',

  productionSourceMap: false,

  configureWebpack: {
    externals: {
      vue: 'Vue'
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.VUE_APP_NAME': JSON.stringify(APP_NAME)
      })
    ]
  },

  devServer: {
    port: PORT,
    proxy: PROXY
  }
}

function log(label, content, options) {
  console.log('\x1b[1m%s\x1b[31m%s\x1b[0m', label, content)
}
