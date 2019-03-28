# RxStack Skeleton Application

[![Maintainability](https://api.codeclimate.com/v1/badges/f6e90ec8ea970b424179/maintainability)](https://codeclimate.com/github/rxstack/skeleton/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f6e90ec8ea970b424179/test_coverage)](https://codeclimate.com/github/rxstack/skeleton/test_coverage)
[![Build Status](https://travis-ci.org/rxstack/skeleton.svg?branch=master)](https://travis-ci.org/rxstack/skeleton)

> a fully-functional skeleton application that you can use for your new applications.

For more details please visit the [official documentations](http://rxstack.io).

## <a name="project-structure"></a> Project folder and file structure

- `src` - all your code lives here
    - `index.ts` - application entry file
    - `app` - application related files
        - `APPLICATION_OPTIONS.ts` - all application configurations [read more](https://github.com/rxstack/rxstack/blob/master/packages/core/docs/application.md).
        - `commands` - command line application files [read more](https://github.com/rxstack/rxstack/blob/master/packages/core/docs/console.md).
        - `controllers` - all your controller files [read more](https://github.com/rxstack/rxstack/blob/master/packages/core/docs/kernel.md).
        - `event-listeners` - all your event listener files [read more](https://github.com/rxstack/rxstack/blob/master/packages/async-event-dispatcher).
    - `environments` - configuration files [read more](https://github.com/rxstack/rxstack/tree/master/packages/configuration).
- `test` - all tests files
- `static` - all static files
- `tslint.json` - typescript linter configuration
- `tsconfig.json` - typescript configuration  

## <a name="npm-scripts"></a> NPM scripts

- `$ npm run dev` - starts `nodemon`
- `$ npm run compile` - compiles the source code
- `$ npm run watch` - watching for file changes
- `$ npm run clean` - removes the `dist` directory
- `$ npm run lint` - lints the source code using `tslint.json`
- `$ npm run mocha` - runs tests using `mocha.opts`
- `$ npm run coverage` - runs tests with `nyc`
- `$ npm test` - runs lint, mocha and coverage
- `$ npm run cli` - runs command line applications
- `$ npm run prod` - starts the application in production environment

## Docker

This complete stack run with [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/).

### <a name="prerequisites"></a> Prerequisites

It should show something similar when running the following commands:

```
$ docker -v
Docker version 18.09.0, build 4d60db4
```

```
$ docker -v
docker-compose version 1.11.2, build dfed245
```

### Installation

- Create a `.env` from the `.env.dist` file. Adapt it according to your application

- Build development or production container

```bash
    $ docker-compose -f docker/dev.yml build
    $ docker-compose -f docker/prod.yml build
```

- Install npm dependencies and start the application in development mode

```bash
    $ docker-compose -f docker/dev.yml run app npm install
    $ docker-compose -f docker/dev.yml run --service-ports app npm run dev
```

- Open [localhost](http://localhost:3000/) in the browser and you should see the welcome page 

- Start production container

```bash
    $ docker-compose -f docker/prod.yml up -d
```

Enjoy!

## License

Licensed under the [MIT license](LICENSE).