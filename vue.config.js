/*
module.exports = {
    /!** 区分打包环境与开发环境
     * process.env.NODE_ENV==='production'  (打包环境)
     * process.env.NODE_ENV==='development' (开发环境)
     * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
     *!/
    // 项目部署的基础路径
    // 我们默认假设你的应用将会部署在域名的根部,
    // 例如 https://www.my-app.com/
    // 如果你的应用部署在一个子路径下，那么你需要在这里
    // 指定子路径。比如将你的应用部署在
    // https://www.foobar.com/my-app/
    // 那么将这个值改为 '/my-app/'
    baseUrl: "/", // 构建好的文件输出到哪里

    outputDir: "dist", // where to put static assets (js/css/img/font/...) // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败
    lintOnSave: true, // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    runtimeCompiler: false, // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖
    transpileDependencies: [
        /!* string or regex *!/
    ], // 是否为生产环境构建生成sourceMap?

    productionSourceMap: false, // 调整内部的webpack配置. // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {}, // CSS 相关选项
    css: {
        // 将组件内部的css提取到一个单独的css文件（只用在生产环境）
        // 也可以是传递给 extract-text-webpack-plugin 的选项对象
        extract: true, // 允许生成 CSS source maps?
        sourceMap: false, // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }
        loaderOptions: {}, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
        modules: false
    }, // use thread-loader for babel & TS in production build // enabled by default if the machine has more than 1 cores

    parallel: require("os").cpus().length > 1, // PWA 插件相关配置 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

    pwa: {}, // configure webpack-dev-server behavior
    devServer: {
        open: process.platform === "darwin",
        disableHostCheck: false,
        host: "0.0.0.0",
        port: 8088,
        https: false,
        hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: null // string | Object
        // before: app => {}
    }, // 第三方插件配置

    pluginOptions: {
        // ...
    }
};*/
const path = require("path");
module.exports = {
  //基本路径
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  //输出文件目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  //eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  /*
   * webpack配置，see  https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
   * */
  chainWebpack: config => {},
  configureWebpack: config => {},
  //生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  //css相关配置
  css: {
    //是否使用css分离插件 ExtractTextPlugin
    extract: true,
    //开启css source maps？
    sourceMap: false,
    //css预设器配置项
    loaderOptions: {
      sass: {
        prependData: '@import "./src/styles/main.scss";'
      }
    },
    //启用 css modules for all css /pre-processor files
    modules: false
  },
  parallel: require("os").cpus().length > 1,
  pwa: {},
  devServer: {
    open: false, //编译完成是否打开网页
    host: "0.0.0.0", //指定使用地址，默认localhost，0.0.0.0代表可以被外界访问
    port: 8080, //访问端口欧
    https: false, //编译失败时刷新页面
    hot: true, //开启热加载
    hotOnly: false,
    proxy: null, //设置代理
    overlay: {
      //全屏模式下是否显示脚本错误
      warnings: true,
      errors: true
    },
    before: app => {}
  },
  /*
   * 第三方插件配置
   * */
  pluginOptions: {}
};
