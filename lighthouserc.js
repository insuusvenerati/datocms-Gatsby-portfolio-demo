module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      url: ['http://localhost/', 'http://localhost/about', 'http://localhost/visdev'],
      isSinglePageApplication: true,
    },
    // assert: {
    //   preset: 'lighthouse:recommended',
    // },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lhci.stiforr.tech/',
      token: process.env.LHCI_TOKEN,
      basicAuth: {
        username: process.env.LHCI_USER,
        password: process.env.LHCI_PASS,
      },
    },
  },
};
