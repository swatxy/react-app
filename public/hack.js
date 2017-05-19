import { uiModules } from 'ui/modules';
import $ from 'jquery';

$(document.body).on('keypress', (event) => {
  if (event.which === 58) {
    alert('boo!');
  }
});

uiModules.get('kibana', []).run((config) => {
  window.KibanaConfig = config;
});