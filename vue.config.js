const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            'nav-bar-background-color': '#1cb676',
            'nav-bar-title-text-color': '#fff',
            'nav-bar-icon-color': '#fff',
            'index-anchor-text-color': '#666',
            'index-anchor-font-size':'14px'
          }
        }
      }
    }
  }
})
