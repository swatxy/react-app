import routes from 'ui/routes';
import { uiModules } from 'ui/modules';

import 'ui/autoload/styles';
import './less/main.less';
import template from './templates/index.html';
import list from './templates/list.html';
import detail from './templates/detail.html';

import './directives/react';

routes.enable();

routes
  .when('/?', {template})
  .when('/roster?', {template})
  .when('/roster/:number?', {template})
  .when('/schedule?', {template});

const app = uiModules.get('app/react_app', ['ngRoute']);

app.config(['$routeProvider', ($routeProvider) => {
  $routeProvider
    .when('/list', {
      template: list,
      controller: 'RouteListCtl'
    })
    .when('/list/:id', {
      template: detail,
      controller: 'RouteDetailCtl'
    });
}]);

app.controller('reactApp', ($scope) => {
});

app.controller('RouteListCtl', ($scope) => {
});

app.controller('RouteDetailCtl', ($scope, $routeParams) => {
  $scope.id = $routeParams.id;
});