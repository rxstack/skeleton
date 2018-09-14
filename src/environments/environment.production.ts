import {configuration} from '@rxstack/configuration';

export const environment = {
  logger: {
    handlers: [
      {
        type: 'file',
        options: {
          level: 'error',
          filename: configuration.getRootPath() + '/logs/app.log'
        }
      }
    ]
  },
};