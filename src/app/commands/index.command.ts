import {AbstractCommand} from '@rxstack/core';
import {Injectable} from 'injection-js';
import {configuration} from '@rxstack/configuration';

const chalk = require('chalk');

@Injectable()
export class IndexCommand extends AbstractCommand {

  command = 'index';
  describe = 'Just a sample command';
  builder = (yargs: any) => {
    yargs.option('n', {
      describe: 'just a a sample parameter',
      default: 'Guest',
      type: 'string',
      alias: 'name',
    });
  }

  async handler(argv: any): Promise<void> {
    console.log(chalk.blue(`Hello ${argv.name} -`), chalk.green('Welcome RxStack CLI'));
  }
}