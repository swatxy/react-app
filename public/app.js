import chrome from 'ui/chrome';
import routes from 'ui/routes';
import { uiModules } from 'ui/modules';

import 'ui/autoload/styles';
import './directives/react';
import './less/main.less';
import template from './templates/index.html';

// console.log(chrome.getInjected('forThisPlugin', 'default'));
// console.log(chrome.getInjected('forAnyPlugin', 'default'));

routes.enable();

routes
  .when('/?', {template})
  .when('/search?', {template})
  .when('/manager?', {template});