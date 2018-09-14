import {ApplicationOptions} from '@rxstack/core';
import {ExpressModule} from '@rxstack/express-server';
import {environment} from '../environments/environment';
import {APP_CONTROLLER_PROVIDERS} from './controllers/APP_CONTROLLER_PROVIDERS';
import {APP_EVENT_LISTENERS_PROVIDERS} from './event-listeners/APP_EVENT_LISTENERS_PROVIDERS';
import {APP_COMMAND_PROVIDERS} from './commands/APP_COMMAND_PROVIDERS';
import {SocketioModule} from '@rxstack/socketio-server';
import {APP_COMMON_PROVIDERS} from './APP_COMMON_PROVIDERS';

export const APP_OPTIONS: ApplicationOptions = {
  imports: [
    ExpressModule.configure(environment.express_server),
    SocketioModule.configure(environment.socketio_server)
  ],
  providers: [
    ...APP_COMMON_PROVIDERS,
    ...APP_COMMAND_PROVIDERS,
    ...APP_CONTROLLER_PROVIDERS,
    ...APP_EVENT_LISTENERS_PROVIDERS
  ],
  servers: environment.servers,
  logger: environment.logger,
  console: !!process.env.RXSTACK_CLI
};