import {describe, expect, it, beforeAll, afterAll} from '@jest/globals';
import 'reflect-metadata';
import {Injector} from 'injection-js';
import {Kernel, Request, Response} from '@rxstack/core';
import {app} from '../../../src/app/app';

describe('Integration:Controllers:IndexController', () => {
  let injector: Injector;
  let kernel: Kernel;

  beforeAll(async () => {
    injector = await app.run();
    kernel = injector.get(Kernel);
  });

  it('should call http definition app_index', async () => {
    const def = kernel.httpDefinitions.find((item) => item.name === 'app_index');
    const request = new Request('HTTP');
    const response: Response = await def.handler(request);
    expect(response.statusCode).toBe(200);
  });

  it('should call websocket definition app_index', async () => {
    const def = kernel.webSocketDefinitions.find((item) => item.name === 'app_index');
    const request = new Request('SOCKET');
    const response: Response = await def.handler(request);
    expect(response.statusCode).toBe(200);
  });
});
