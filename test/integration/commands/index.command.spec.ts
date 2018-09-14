import 'reflect-metadata';
import {configuration} from '@rxstack/configuration';
configuration.initialize(configuration.getRootPath() + '/src/environments');
import {Application, CommandManager} from '@rxstack/core';
import {APP_OPTIONS} from '../../../src/app/APP_OPTIONS';

const sinon = require('sinon');

describe('Functional:Commands:IndexCommand', () => {
  // Setup application
  const app = new Application(APP_OPTIONS);
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