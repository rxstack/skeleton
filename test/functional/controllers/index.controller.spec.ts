import 'reflect-metadata';
import {configuration} from '@rxstack/configuration';
configuration.initialize(configuration.getRootPath() + '/src/environments');
import {Injector} from 'injection-js';
import {APP_OPTIONS} from '../../../src/app/APP_OPTIONS';
import {Application, ServerManager} from '@rxstack/core';
import {IncomingMessage} from 'http';

const rp = require('request-promise');
const io = require('socket.io-client');

describe('Functional:Controllers:IndexController', () => {
  // Setup application
  const app = new Application(APP_OPTIONS);
  let injector: Injector;
  let httpHost: string;
  let wsHost: string;
  let conn: any;

  before(async () => {
    await app.start();
    injector = app.getInjector();
    httpHost = injector.get(ServerManager).getByName('express').getHost();
    wsHost = injector.get(ServerManager).getByName('socketio').getHost();
    conn = io(wsHost, {transports: ['websocket']});
  });

  after(async () => {
    await conn.close();
    await app.stop();
  });

  it('should call express app_index', async () => {
    const options = {
      uri: httpHost,
      resolveWithFullResponse: true,
      json: false
    };

    await rp(options)
      .then((response: IncomingMessage) => {
        const headers = response.headers;
        headers['x-powered-by'].should.be.equal('Express');
        response['statusCode'].should.be.equal(200);
      })
      .catch((err: any) => {
        // make sure test fails
        true.should.be.false;
      })
    ;
  });

  it('should call socketio app_index', (done: Function) => {
    conn.emit('app_index', null, function (response: any) {
      response['statusCode'].should.be.equal(200);
      response['content'].should.be.equal('Welcome to RxStack Framework');
      done();
    });
  });
});