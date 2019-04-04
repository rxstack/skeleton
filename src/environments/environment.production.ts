import {configuration} from '@rxstack/configuration';

export const environment: any = {
  logger: {
    handlers: [
      {
        type: 'file',
        options: {
          level: 'error',
          filename: configuration.getRootPath() + '/logs/app.error'
        }
      }
    ]
  },
};