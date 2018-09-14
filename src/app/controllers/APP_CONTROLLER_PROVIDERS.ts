import {ProviderDefinition} from '@rxstack/core';
import {IndexController} from './index.controller';

export const APP_CONTROLLER_PROVIDERS: ProviderDefinition[] = [
  { provide: IndexController, useClass: IndexController }
];