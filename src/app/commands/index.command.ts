import {AbstractCommand} from '@rxstack/core';
import {Injectable} from 'injection-js';

const chalk = require('chalk');

@Injectable()
export class IndexCommand extends AbstractCommand {

  command = 'index';
  describe = 'Just a sample command';

  async handler(argv: any): Promise<void> {
    console.log(chalk.green('Hello from RxStack CLI'));
  }
}