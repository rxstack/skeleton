import {Injectable} from 'injection-js';
import {parentPort} from 'worker_threads';
import {AbstractWorkerThread} from '@rxstack/worker-threads-pool';

@Injectable()
export class IndexWorkerThread extends AbstractWorkerThread {

  async run(): Promise<void> {
    parentPort.postMessage('Hello from rxstack worker.');
  }

  getName(): string {
    return 'index';
  }
}