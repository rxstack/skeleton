# RxStack Skeleton Application

[![Node.js CI](https://github.com/rxstack/skeleton/actions/workflows/node.js.yml/badge.svg)](https://github.com/rxstack/skeleton/actions/workflows/node.js.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/f6e90ec8ea970b424179/maintainability)](https://codeclimate.com/github/rxstack/skeleton/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f6e90ec8ea970b424179/test_coverage)](https://codeclimate.com/github/rxstack/skeleton/test_coverage)

> a fully-functional skeleton application that you can use for your new applications.

For more details please visit the [official documentations](https://github.com/rxstack/rxstack).

## <a name="project-structure"></a> Project folder and file structure

- `src` - all your code lives here
    - `index.ts` - application entry file
    - `cli.ts` - CLI entry file
    - `worker.ts` - worker entry file
    - `app` - application related files
        - `app.ts` - application instance.
        - `APPLICATION_OPTIONS.ts` - all application configurations [read more](https://github.com/rxstack/rxstack/blob/master/packages/core/docs/application.md).
        - `commands` - command line application files [read more](https://github.com/rxstack/rxstack/blob/master/packages/core/docs/console.md).
        - `controllers` - all your controller files [read more](https://github.com/rxstack/rxstack/blob/master/packages/core/docs/kernel.md).
        - `event-listeners` - all your event listener files [read more](https://github.com/rxstack/rxstack/blob/master/packages/async-event-dispatcher).
        - `workers` - worker tasks [read more](https://github.com/rxstack/rxstack/blob/master/packages/worker-threads-pool).
    - `environments` - configuration files [read more](https://github.com/rxstack/rxstack/tree/master/packages/configuration).
- `test` - all tests files
- `static` - all static files
- `mocha.opts` - mocha options
- `tslint.json` - typescript linter configuration
- `tsconfig.json` - typescript configuration  

## <a name="npm-scripts"></a> NPM scripts

- `$ npm run dev` - compiles and starts `nodemon`
- `$ npm run compile` - compiles the source code
- `$ npm run watch` - watching for file changes
- `$ npm run clean` - removes the `dist` directory
- `$ npm run lint` - lints the source code using `tslint.json`
- `$ npm run mocha` - runs tests using `mocha.opts`
- `$ npm run coverage` - runs tests with `nyc`
- `$ npm test` - runs lint, mocha and coverage
- `$ npm run cli` - runs command line applications from `dist` directory
- `$ npm run cli-dev` - runs command line applications with `ts-node`

## License

Licensed under the [MIT license](LICENSE).
