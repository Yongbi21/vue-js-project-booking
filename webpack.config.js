const path = require('path');

module.exports = {
  // ...other webpack configuration options...

  module: {
    rules: [
      // ...other rules...

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              outputPath: '../src/assets/img', // Change this path as per your project structure
              name: '[name].[ext]',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheCompression: false,
            cacheDirectory: path.resolve(__dirname, 'node_modules', '.cache', 'babel-loader'),
            cacheIdentifier: '7ca10a5c',
          },
        },
      },
    ],
  },
};
