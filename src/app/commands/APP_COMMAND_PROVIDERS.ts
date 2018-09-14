import {ProviderDefinition} from '@rxstack/core';
import {COMMAND_REGISTRY} from '@rxstack/core';
import {IndexCommand} from './index.command';

export const APP_COMMAND_PROVIDERS: ProviderDefinition[] = [
  {
    provide: COMMAND_REGISTRY,
    useClass: IndexCommand,
    multi: true
  }
];