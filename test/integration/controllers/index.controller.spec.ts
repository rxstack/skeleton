import 'reflect-metadata';
import {configuration} from '@rxstack/configuration';
configuration.initialize(configuration.getRootPath() + '/src/environments');
import {Injector} from 'injection-js';
import {APP_OPTIONS} from '../../../src/app/APP_OPTIONS';
import {Application, Kernel, Request, Response} from '@rxstack/core';

describe('Integration:Controllers:IndexController', () => {

  // Setup application
  const app = new Application(APP_OPTIONS);
  let injector: Injector;
  let kernel: Kernel;


  before(async () => {
    await app.start();
    injector = app.getInjector();
    kernel = injector.get(Kernel);
  });

  after(async () => {
    await app.stop();
  });

  it('should call http definition app_index', async () => {
    const def = kernel.httpDefinitions.find((item) => item.name === 'app_index');
    const request = new Request('HTTP');
    const response: Response = await def.handler(request);
    response.statusCode.should.be.equal(200);
  });

  it('should call websocket definition app_index', async () => {
    const def = kernel.webSocketDefinitions.find((item) => item.name === 'app_index');
    const request = new Request('SOCKET');
    const response: Response = await def.handler(request);
    response.statusCode.should.be.equal(200);
  });
});