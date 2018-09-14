import {Injectable} from 'injection-js';
import {Observe} from '@rxstack/async-event-dispatcher';
import {ServerConfigurationEvent, ServerEvents} from '@rxstack/core';
import {ExpressServer} from '@rxstack/express-server';
import {Application} from 'express';

const cors = require('cors');

@Injectable()
export class ExpressServerConfigurationListener {

  @Observe(ServerEvents.CONFIGURE)
  async onConfigure(event: ServerConfigurationEvent): Promise<void> {
    if (event.server.getName() === ExpressServer.serverName) {
      const app: Application = event.server.getEngine();
      app
        .options('*', cors())
        .use(cors())
      ;
    }
  }
}