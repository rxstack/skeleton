import {ProviderDefinition} from '@rxstack/core';
import {WORKER_THREADS_POOL_REGISTRY} from '@rxstack/worker-threads-pool';
import {IndexWorkerThread} from './index.worker-thread';

export const APP_WORKER_PROVIDERS: ProviderDefinition[] = [
  {
    provide: WORKER_THREADS_POOL_REGISTRY,
    useClass: IndexWorkerThread,
    multi: true
  }
];