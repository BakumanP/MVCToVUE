const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    'World':'./TScripts/Demos/World.ts',
    'Index':'./TScripts/Vue/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
   
  },
  output: {
    path: path.resolve(__dirname, 'Scripts'),
    filename: '[name].js'
  },
};