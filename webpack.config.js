const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const loaders = {}
loaders.tsx = ['babel-loader', 'ts-loader']
loaders.ts = loaders.tsx

module.exports = {
  entry: {
    'World':'./TScripts/Demos/World.ts',
    'Index':'./TScripts/Vue/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          { 
            loader:'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: [
          { 
            loader:'vue-loader'
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: [ '.vue','.tsx', '.ts', '.js' ],
   
  },
  output: {
    path: path.resolve(__dirname, 'Scripts'),
    filename: '[name].js'
  },
  plugins: [
    
    new VueLoaderPlugin()
  ]
};