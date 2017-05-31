import chrome from 'ui/chrome';
import fetch from 'isomorphic-fetch';
import { LOAD_DATABASES, LOAD_TABLES, CHECK_DATABASES, CHECK_TABLES, CHANGE_INPUT, CLICK_BUTTON }  from '../constants';

const basePath = chrome.getBasePath();

export function loadDatabases(databases) {
  return {
    type: LOAD_DATABASES,
    databases
  };
}

export function fetchDatabases() {
  return dispatch => {
    fetch(`${basePath}/api/react_app/indices`)
      .then(response => response.json())
      .then(data => dispatch(loadDatabases(data)));
  };
}

export function loadTables(tables) {
  return {
    type: LOAD_TABLES,
    tables
  };
}

export function fetchTables() {
  return dispatch => {
    fetch(`${basePath}/api/react_app/mappings`)
      .then(response => response.json())
      .then(data => dispatch(loadTables(data)));
  };
}

export function checkDatabases(databasesCheck) {
  return {
    type: CHECK_DATABASES,
    databasesCheck
  };
}

export function checkTables(tablesCheck) {
  return {
    type: CHECK_TABLES,
    tablesCheck
  };
}

export function changeInput(event) {
  return {
    type: CHANGE_INPUT,
    searchVal: event.target.value
  };
}

export function clickButton() {
  return (dispatch, getState) => {
    const {indices} = getState();
    let form = new FormData();
    form.append('databasesCheck', indices.databasesCheck);
    form.append('tablesCheck', indices.tablesCheck);
    form.append('searchVal', indices.searchVal);
    fetch(`${basePath}/api/react_app/msearch`, {
      method: 'POST',
      headers: {
        'kbn-xsrf': '',
      },
      body: form
    })
      .then(response => response.json())
      .then(data => {
        let result = [];
        data.responses.map(obj => {
          result.push(...obj.hits.hits);
        });
        dispatch({type: CLICK_BUTTON, result});
      });
  };
}