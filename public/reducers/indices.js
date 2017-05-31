import { LOAD_INDICES, LOAD_MAPPINGS, CHECK_INDICES, CHECK_MAPPINGS, CHANGE_INPUT }  from '../constants';

const initState = {
  databases: [],
  databasesCheck: [],
  tables: [],
  tablesCheck: [],
  searchVal: ''
};

const indices = (state = initState, action) => {
  switch (action.type) {
    case LOAD_INDICES:
      return Object.assign({}, state, {databases: action.databases});
    case LOAD_MAPPINGS:
      return Object.assign({}, state, {tables: action.tables});
    case CHECK_INDICES:
      return Object.assign({}, state, {databasesCheck: action.databasesCheck});
    case CHECK_MAPPINGS:
      return Object.assign({}, state, {tablesCheck: action.tablesCheck});
    case CHANGE_INPUT:
      return Object.assign({}, state, {searchVal: action.searchVal});
    default:
      return state;
  }
};

export default indices;