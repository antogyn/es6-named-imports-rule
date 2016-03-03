module.exports = {
  context: __dirname,
  entry: {
    app: process.env.STAR ? './app_star/app.js' : './app/app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: process.env.STAR ? 'app_star.js' : 'app.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          babelrc: false,
          presets: ['es2015-native-modules']
        }
      }
    ]
  }
};
