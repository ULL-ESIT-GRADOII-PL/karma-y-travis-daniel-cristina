// Karma configuration

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
      'karma-html2js-preprocessor',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher'
    ],

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Firefox', 'Chrome_travis_ci', 'PhantomJS'],

    captureTimeout: 60000,

    singleRun: false
  });
};
