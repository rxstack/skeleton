# RxStack Skeleton Application

[![Maintainability](https://api.codeclimate.com/v1/badges/f6e90ec8ea970b424179/maintainability)](https://codeclimate.com/github/rxstack/skeleton/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f6e90ec8ea970b424179/test_coverage)](https://codeclimate.com/github/rxstack/skeleton/test_coverage)
[![Build Status](https://travis-ci.org/rxstack/skeleton.svg?branch=master)](https://travis-ci.org/rxstack/skeleton)

> a fully-functional skeleton application that you can use for your new applications.

It comes pre-configured with the following rxstack modules/components:

-  [@rxstack/async-event-dispatcher](https://github.com/rxstack/rxstack/blob/master/packages/async-event-dispatcher)
-  [@rxstack/configuration](https://github.com/rxstack/rxstack/tree/master/packages/configuration)
-  [@rxstack/exceptions](https://github.com/rxstack/rxstack/tree/master/packages/exceptions)
-  [@rxstack/core](https://github.com/rxstack/rxstack/blob/master/packages/core)
-  [@rxstack/express-server](https://github.com/rxstack/rxstack/tree/master/packages/express-server)
-  [@rxstack/socketio-server](https://github.com/rxstack/rxstack/tree/master/packages/socketio-server)

For more details please visit the [official documentations](http://rxstack.io).

## Docker

This complete stack run with docker and [docker-compose](https://docs.docker.com/compose/).

### Installation

- Create a `.env` from the `.env.dist` file. Adapt it according to your application

```bash
    $ cd path_to_app/docker_app
```

- Build/run containers

```bash
    $ docker-compose -f dev.yml up -d // development
    $ docker-compose -f prod.yml up -d // production
```

- Install npm dependencies and run the application

```bash
    $ docker-compose -f dev.yml exec application bash // get inside app container
    $ npm install
    $ npm test
    $ npm run dev
```

Enjoy!

## License

Licensed under the [MIT license](LICENSE).