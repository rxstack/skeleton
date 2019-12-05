import {ProviderDefinition} from '@rxstack/core';
import {ExpressServerConfigurationListener} from './express-server-configuration.listener';
import {WinstonBootstrapListener} from './winston.bootstrap.listener';

export const APP_EVENT_LISTENERS_PROVIDERS: ProviderDefinition[] = [
  { provide: ExpressServerConfigurationListener, useClass: ExpressServerConfigurationListener },
  { provide: WinstonBootstrapListener, useClass: WinstonBootstrapListener },
];