const path = require('path');

module.exports = {
  entry: {
    'World':'./TScripts/Demos/World.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'Scripts'),
    filename: '[name].js'
  },
};