require('dotenv').config({
  path: '.env',
});
const packageJson = require('./package.json');

const plugins = [
  'gatsby-plugin-react-helmet',
  `gatsby-plugin-robots-txt`,
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-typescript`,
  {
    resolve: `gatsby-theme-contact`,
    options: {
      contactPath: '/contact',
      successPath: '/thanks',
    },
  },
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      implementation: require('sass'),
    },
  },
  // {
  //   resolve: '@mkitio/gatsby-theme-password-protect',
  //   options: {
  //     password: process.env.GATSBY_PAGE_PASSWORD,
  //     pagePaths: ['/visdev'],
  //   },
  // },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'Laura Norwood',
      short_name: 'Laura Norwood',
      start_url: '/',
      background_color: '#F0E6E0',
      theme_color: '#9DAD9F',
      display: 'standalone',
      icon: 'src/images/icon_catbot.png',
      crossOrigin: `anonymous`,
    },
  },
  `gatsby-transformer-remark`,
  {
    resolve: 'gatsby-source-datocms',
    options: {
      apiToken: process.env.DATO_API_TOKEN,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: `UA-110954146-2`,
    },
  },
  {
    resolve: `gatsby-plugin-offline`,
    options: {
      precachePages: [`/sketchbook/`, `/about/`, '/'],
    },
  },
  {
    resolve: '@sentry/gatsby',
    options: {
      dsn: 'https://50863e41f2c94ac38144e896197d498f@o122225.ingest.sentry.io/4167682',
      release: packageJson.version,
    },
  },
  // `gatsby-plugin-codegen`,
];

module.exports = {
  siteMetadata: {
    siteUrl: `https://ljnorwood.com`,
    title: 'Laura Norwood',
  },
  plugins,
};
