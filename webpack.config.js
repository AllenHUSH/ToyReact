module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: 'toyReact.js'
  },
  mode: 'development',
  optimization: {
    minimize: false,
  },
  devServer: {
    open: true,
    compress: false,
    contentBase: './',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-react-jsx',
                { pragma: 'ToyReact.createElement' },
              ],
            ],
          },
        },
      },
    ],
  },
};
