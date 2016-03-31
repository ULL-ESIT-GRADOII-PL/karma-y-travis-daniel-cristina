// Karma configuration
// Generated on Mon Jan 20 2014 16:21:22 GMT+0000 (WET)

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      'assets/js/main.js',
      'assets/js/medida.js',
      'assets/js/temperatura.js',
      'tests.js',
      'vendor/chai.js',
      'vendor/mocha.css',
      'vendor/mocha.js',
      'vendor/blanket.js',
      'vendor/mocha-blanket.js',
      'assets/js/xregexp-all.js'
    ],

    client: {
          mocha: {
            ui: 'bdd'
          }
    },

    exclude: [
      'gulpfile.js'
    ],

    preprocessors: {
      'test.html': ['html2js']
    },

    plugins : [
      'karma-mocha',
      'karma-chai',
      'karma-firefox-launcher',
      'karma-html2js-preprocessor'
    ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Firefox'],

    captureTimeout: 60000,

    singleRun: false
  });
};
