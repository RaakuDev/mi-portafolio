module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'src/**/*.spec.js'
    ],

    preprocessors: {
      'src/**/*.spec.js': ['webpack']
    },

    webpack: {
      mode: 'development',

      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      }
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' }
      ]
    },

    browsers: ['ChromeHeadless'],

    singleRun: true,

    autoWatch: false
  });
};