import { uiModules } from 'ui/modules';

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import todoApp from '../reducers';
import App from '../components/App';

const logger = createLogger({
  duration: true
});

const store = createStore(
  todoApp,
  applyMiddleware(thunk, logger)
);

const app = uiModules.get('app/react_app', []);
app.directive('react', () => {
  function link(scope, element, attrs) {
    render(
      <Provider store={store}>
        <App/>
      </Provider>,
      element[0]
    );
    scope.$on('$destroy', () => {
      unmountComponentAtNode(element[0]);
    });
  }

  return {
    restrict: 'E',
    link
  };
});