const path = require("path");

module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Intern Hokudai";
                return args;
            })
        config.module
            .rule('raw')
            .test(/\.txt$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
    },
    configureWebpack: {
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "./src")
          },
          extensions: ['.js', '.vue', '.json', '.jpg', '.png']
        }
    },
    runtimeCompiler: true,
    publicPath: '/Intern-Hokudai/'
}
