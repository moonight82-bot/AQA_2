
export default {
  testEnvironment: 'node',
  verbose: true,
  transform: {},
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './html-report',
        filename: 'report.html',
        openReport: true,
        pageTitle: 'API Test Report',
      },
    ],
  ],
};