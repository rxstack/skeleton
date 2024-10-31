import {describe, expect, it, beforeAll, afterAll} from '@jest/globals';
import {ServerManager} from '@rxstack/core';
import {app} from '../../../src/app/app';
import {Injector} from 'injection-js';
const fetch = require('node-fetch');
const io = require('socket.io-client');

describe('Functional:Controllers:IndexController', () => {
  let injector: Injector;
  let httpHost: string;
  let wsHost: string;
  let conn: any;

  beforeAll(async () => {
    await app.start();
    injector = app.getInjector();
    httpHost = injector.get(ServerManager).getByName('express').getHost();
    wsHost = injector.get(ServerManager).getByName('socketio').getHost();
    conn = io(wsHost, {transports: ['websocket']});
  });

  afterAll(async () => {
    await conn.close();
    await app.stop();
  });

  it('should call express app_index', async () => {
    const response: any = await fetch(httpHost);
    const headers: any = response.headers;
    expect(headers.get('x-powered-by')).toBe('Express');
    expect(response.status).toBe(200);
  });

  it('should call socketio app_index', (done: Function) => {
    conn.emit('app_index', null, function (response: any) {
      expect(response['statusCode']).toBe(200);
      expect(response['content']).toBe('Welcome to RxStack Framework');
      done();
    });
  });
});
