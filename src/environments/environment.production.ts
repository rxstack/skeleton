import {configuration} from '@rxstack/configuration';

const maxWorkers = require('os').cpus().length - 1;

export const environment: any = {
  worker_threads_pool: {
    path: configuration.getRootPath() + '/dist/worker.js',
    max: maxWorkers,
    maxWaiting: maxWorkers * 10
  }
};