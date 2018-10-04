const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config');

module.exports = withSass(
  withCss({
    exportPathMap: function() {
      return {
        '/': { page: '/' },
      };
    },
  })
);
