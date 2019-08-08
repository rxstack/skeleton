// use only in dev or test environment!!!

const path = require('path');

require('ts-node').register();
require(path.resolve(__dirname, './src/worker.ts'));

// hack to handle errors in workers
process.on('unhandledRejection', (err) => {
  throw err;
});

process.on('uncaughtException', (err) => {
  throw err;
});
