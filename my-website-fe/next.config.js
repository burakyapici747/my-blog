/** @type {import('next').NextConfig} */
const nextConfig = {}

const withFonts = require('next-fonts');

module.exports = withFonts({
enableSvg: true,
    webpack(config, options) {
      return config;
    }
});

module.exports = nextConfig