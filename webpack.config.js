var WebpackStrip = require('webpack-strip');
var webpack = require('webpack');
module.exports = {

    entry: "./src/App.js",

    output: {
        filename: "public/frontend/bundle.js"
    },
plugins: [
new webpack.DefinePlugin({
       'process.env': {
         'NODE_ENV': JSON.stringify('production')
       }
     })
 ],
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components|public)/,
              loader: 'babel',
              query:
                  {
                    presets:['es2015', 'react']
                  }
            },
            { 
              test: /\.jsx?$/, 
              exclude: /(node_modules|bower_components)/, 
              loader: WebpackStrip.loader('console.log', 'console.error', 
                'console.assert', 'console.clear', 'console.count', 'console.debug', 'console.dir', 'console.dirxml',
                'console.exception', 'console.group', 'console.groupCollapsed', 'console.groupEnd', 'console.info',
                'console.markTimeline', 'console.profile', 'console.profileEnd', 'console.table', 'console.time', 
                'console.timeEnd','console.timeStamp', 'console.trace', 'console.warn' ) 
            }
            
        ]
    }
};