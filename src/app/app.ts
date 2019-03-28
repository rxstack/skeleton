import 'reflect-metadata';
import {configuration} from '@rxstack/configuration';
configuration.initialize(__dirname + '/../environments');
import {Application} from '@rxstack/core';
import {APP_OPTIONS} from './APP_OPTIONS';

export const app = new Application(APP_OPTIONS);