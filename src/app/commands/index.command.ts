import {AbstractCommand} from '@rxstack/core';
import {Injectable} from 'injection-js';
import {configuration} from '@rxstack/configuration';

const chalk = require('chalk');

@Injectable()
export class IndexCommand extends AbstractCommand {

  command = 'index';
  describe = 'Just a sample command';

  async handler(argv: any): Promise<void> {
    console.log(argv);
    console.log(chalk.green('Hello from RxStack CLI'));
  }
}