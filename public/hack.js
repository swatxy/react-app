import $ from 'jquery';
import { uiModules } from 'ui/modules';

$(document.body).on('keypress', (event) => {
  if (event.which === 58) {
    alert('boo!');
  }
});

uiModules.get('kibana', []).run((config) => {
  window.KibanaConfig = config;
});