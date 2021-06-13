const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const packageJson = require('./package.json');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [
        new SentryWebpackPlugin({
          // sentry-cli configuration
          authToken: process.env.SENTRY_AUTH_TOKEN,
          org: 'sean-96',
          project: 'treats-portfolio',

          // webpack specific configuration
          include: './public',
          release: packageJson.version,
        }),
      ],
    });
  }
};
