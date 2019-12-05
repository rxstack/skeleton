import {Injectable} from 'injection-js';
import {Observe} from '@rxstack/async-event-dispatcher';
import {ApplicationEvents, BootstrapEvent} from '@rxstack/core';
import * as winston from 'winston';

@Injectable()
export class WinstonBootstrapListener {

  @Observe(ApplicationEvents.BOOTSTRAP)
  async onBootstrap(event: BootstrapEvent): Promise<void> {
    if (process.env.NODE_ENV === 'production') {
      // add production transports
    } else {
      winston.add(new winston.transports.Console({
        level: 'debug',
        format: winston.format.combine(
          winston.format.errors({ stack: true }),
          winston.format.metadata(),
        )
      }));
    }
  }
}