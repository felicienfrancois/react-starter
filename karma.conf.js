var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'test/**/*.*'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*.ts': ['webpack'],
      'test/**/*.tsx': ['webpack']
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
    webpackMiddleware: {
        quiet: true,
        noInfo: true
    }
  });
}
