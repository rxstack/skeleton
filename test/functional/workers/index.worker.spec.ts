import {app} from '../../../src/app/app';
import {Injector} from 'injection-js';
import {WorkerThreadsPool} from '@rxstack/worker-threads-pool';

describe('Functional:Workers:IndexWorker', () => {
  let injector: Injector;
  let pool: WorkerThreadsPool;

  before(async () => {
    injector = await app.run();
    pool = injector.get(WorkerThreadsPool);
  });

  after(async () => {
    pool.terminate();
  });

  it('should start index worker', (done) => {
    pool.acquire('index').then((worker) => {
      worker.on('message', (data: any) => {
        if (data === 'Hello from rxstack worker.') {
          done();
        }
      });
    });
  });
});