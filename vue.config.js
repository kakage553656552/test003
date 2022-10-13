const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      // CDN 的 Element 依赖全局变量 Vue， 所以 Vue 也需要使用 CDN 引入
      'vue': 'Vue'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor3: {
            test: /[\\/]node_modules[\\/](element-ui)[\\/]/,
            name: 'vendor3',
            chunks: 'all'
          },
          vendor2: {
            test: /[\\/]node_modules[\\/](core-js)[\\/]/,
            name: 'vendor2',
            chunks: 'all'
          },
        },
      },
    },
  } 
})