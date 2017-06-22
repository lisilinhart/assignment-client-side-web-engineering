module.exports = options => {
    const gulp    = options.gulp;
    const paths   = options.paths;
    const plugins = options.plugins;
    const Server  = require('karma').Server;

    return {
        all: done => {
            new Server({
                configFile: __dirname + '/../karma.js',
                singleRun: true
            }, done).start();
        }
    };
};
