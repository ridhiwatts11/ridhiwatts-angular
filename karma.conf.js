module.exports = function(config){
    config.set({
        frameworks: ['jasmine'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'script.js',
            'test/script.spec.js'
        ],
        browsers: ['Chrome'],
        singleRun: false,
        port: 9877
    })
}
  