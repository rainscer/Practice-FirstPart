var path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },  
    module: {
      rules: [
        // ... other rules
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin()
    ],
  devServer: {
    static: path.join(__dirname, 'src'),
    compress: true,
    port: 8080
  }
};
