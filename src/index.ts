import 'reflect-metadata';
import {configuration} from '@rxstack/configuration';
configuration.initialize(__dirname + '/environments');
import {Application} from '@rxstack/core';
import {APP_OPTIONS} from './app/APP_OPTIONS';

new Application(APP_OPTIONS).start().catch(console.error);