import { uiModules } from 'ui/modules';
import uiRoutes from 'ui/routes';

import 'ui/autoload/styles';
import './less/main.less';
import template from './templates/index.html';

import './directives/react';

uiRoutes.enable();
uiRoutes.when('/', {template});

const app = uiModules.get('app/react_app', []);
app.controller('reactApp', () => {});