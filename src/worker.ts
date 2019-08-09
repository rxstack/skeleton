import 'reflect-metadata';
import {Worker} from '@rxstack/worker-threads-pool';
import {APP_OPTIONS} from './app/APP_OPTIONS';

new Worker(APP_OPTIONS).execute().catch((err) => process.nextTick(() => {
  throw err;
}));