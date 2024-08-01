const withFonts = require('next-fonts');

module.exports = withFonts({
  enableSvg: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: require.resolve('file-loader'),
            publicPath: `/_next/static/files`,
            outputPath: 'static/files',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
});
