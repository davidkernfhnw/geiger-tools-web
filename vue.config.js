const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  filenameHashing: false,

  //transpileDependencies: true,
  //publicPath: '/alpha-testing/'
  publicPath: '/geiger-tools-web/',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      includeLocales: false,
      enableBridge: true
    }
  }
})

