module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],

    //   html: {
    //     index: {
    //       entry: 'src/main.js',
    //       template: 'html/index.html',
    //       filename: 'index.html',
    //     },
    // },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://165.22.250.168:8080',
                ws: true,
                changeOrigin: true
            }
        }
    },

    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false
        }
    }
}