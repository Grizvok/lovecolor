const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withSass(
  withCss({
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/about': { page: '/about'},
        '/portfolio': { page: '/portfolio'},
        '/services': { page: '/services'},
      };
    },
  })
);
