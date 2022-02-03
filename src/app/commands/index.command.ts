import {AbstractCommand} from '@rxstack/core';
import {Injectable} from 'injection-js';

const chalk = require('chalk');

@Injectable()
export class IndexCommand extends AbstractCommand {

  command = 'index';
  describe = 'Just a sample command';
  /* istanbul ignore next */
  builder = (yargs: any) => {
    yargs.option('n', {
      describe: 'just a sample parameter',
      default: 'Guest',
      type: 'string',
      alias: 'name',
    });
  }

  async handler(argv: any): Promise<void> {
    const name = argv.name || 'Guest';
    console.log(chalk.blue(`Hello ${name} -`), chalk.green('Welcome to RxStack CLI'));
  }
}
