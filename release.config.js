require('dotenv').config({ path: `.env` });

module.exports = {
  repositoryUrl: 'https://github.com/insuusvenerati/treats-portfolio',
  tagFormat: '${version}',
  plugins: [
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.MD',
      },
    ],
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};