var webpack = require('webpack');

module.exports = {
    entry : './scr/index.js',
    output: {
        path : __dirname + '/public',
        file : 'bundle.js'
    }
}
