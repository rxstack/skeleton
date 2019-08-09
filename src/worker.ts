import 'reflect-metadata';
import {configuration} from '@rxstack/configuration';
configuration.initialize(__dirname + '/environments');
import {Worker} from '@rxstack/worker-threads-pool';
import {APP_OPTIONS} from './app/APP_OPTIONS';

new Worker(APP_OPTIONS).execute().catch((err) => process.nextTick(() => {
  throw err;
}));