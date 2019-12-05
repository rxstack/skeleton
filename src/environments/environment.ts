import {configuration} from '@rxstack/configuration';

export const environment: any = {
  express_server: { },
  socketio_server: { },
  worker_threads_pool: {
    path: configuration.getRootPath() + '/worker.dev.js',
    max: 1,
    maxWaiting: 2
  },
  servers: ['express', 'socketio']
};