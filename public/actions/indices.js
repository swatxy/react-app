import chrome from 'ui/chrome';
import fetch from 'isomorphic-fetch';
import { LOAD_INDICES, LOAD_MAPPINGS, CHECK_INDICES, CHECK_MAPPINGS, CHANGE_INPUT, CLICK_BUTTON }  from '../constants';

const basePath = chrome.getBasePath();

export function loadIndices(databases) {
  return {
    type: LOAD_INDICES,
    databases
  };
}

export function fetchIndices() {
  return dispatch => {
    fetch(`${basePath}/api/react_app/indices`)
      .then(response => response.json())
      .then(data => dispatch(loadIndices(data)));
  };
}

export function loadMappings(tables) {
  return {
    type: LOAD_MAPPINGS,
    tables
  };
}

export function fetchMappings() {
  return dispatch => {
    fetch(`${basePath}/api/react_app/mappings`)
      .then(response => response.json())
      .then(data => dispatch(loadMappings(data)));
  };
}

export function checkIndices(databasesCheck) {
  return {
    type: CHECK_INDICES,
    databasesCheck
  };
}

export function checkMappings(tablesCheck) {
  return {
    type: CHECK_MAPPINGS,
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
      .then(dispatch({type: CLICK_BUTTON}));
  };
}