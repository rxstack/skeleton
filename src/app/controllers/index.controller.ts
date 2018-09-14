import {Injectable, Injector} from 'injection-js';
import {Http, InjectorAwareInterface, Logger, Request, Response, WebSocket} from '@rxstack/core';
import {configuration} from '@rxstack/configuration';

const fs = require('fs');

@Injectable()
export class IndexController implements InjectorAwareInterface {

  private injector: Injector;

  setInjector(injector: Injector): void {
    this.injector = injector;
  }

  @Http('GET', '/', 'app_index')
  @WebSocket('app_index')
  async indexAction(request: Request): Promise<Response> {
    const response = new Response();
    this.injector.get(Logger).debug('Debugging indexAction', {'source': this.constructor.name});
    if (request.transport === 'HTTP') {
      response.content = fs.createReadStream(configuration.getRootPath() + '/static/welcome.html');
      response.headers.set('content-type', 'text/html');
    } else {
      response.content = 'Welcome to RxStack Framework';
    }
    return response;
  }
}