import {CommandManager} from '@rxstack/core';
import {app} from '../../../src/app/app';

const sinon = require('sinon');

describe('Functional:Commands:IndexCommand', () => {
  let consoleSpy: any;

  before(async () => {
    await app.start();
    consoleSpy = sinon.spy(console, 'log');
  });

  after(async () => {
    consoleSpy.restore();
    app.stop();
  });

  it('should execute index command', async () => {
    const command = app.getInjector().get(CommandManager).getCommand('index');
    await command.handler({});
    consoleSpy.called.should.be.true;
  });
});