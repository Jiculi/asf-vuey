const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/a3.js',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/a3.html',
    }),
    new VueLoaderPlugin(),
  ]
};