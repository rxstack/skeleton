import {CommandManager} from '@rxstack/core';
import {app} from '../../../src/app/app';
import {Injector} from 'injection-js';

const sinon = require('sinon');

describe('Functional:Commands:IndexCommand', () => {
  let consoleSpy: any;
  let injector: Injector;

  before(async () => {
    injector = await app.run();
    consoleSpy = sinon.spy(console, 'log');
  });

  after(async () => {
    consoleSpy.restore();
  });

  it('should execute index command', async () => {
    const command = injector.get(CommandManager).getCommand('index');
    await command.handler({});
    consoleSpy.called.should.be.true;
  });
});