import angular from 'angular';

import { routerConfig } from './routes';
import { HomeController } from './controllers/home';
import { AddController } from './controllers/add';
import { SingleController } from './controllers/single';

import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .controller('SingleController', SingleController);
//  .constant('SERVER', SERVER);
