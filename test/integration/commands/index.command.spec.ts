import {describe, expect, it, beforeAll, afterAll} from '@jest/globals';
import {CommandManager} from '@rxstack/core';
import {app} from '../../../src/app/app';
import {Injector} from 'injection-js';

const sinon = require('sinon');

describe('Functional:Commands:IndexCommand', () => {
  let consoleSpy: any;
  let injector: Injector;

  beforeAll(async () => {
    injector = await app.run();
    consoleSpy = sinon.spy(console, 'log');
  });

  afterAll(async () => {
    consoleSpy.restore();
  });

  it('should execute index command', async () => {
    const command = injector.get(CommandManager).getCommand('index');
    await command.handler({});
    expect(consoleSpy.called).toBeTruthy();
  });
});
