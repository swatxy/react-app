import { LOAD_DATABASES, LOAD_TABLES, CHECK_DATABASES, CHECK_TABLES, CHANGE_INPUT, CLICK_BUTTON }  from '../constants';

const initState = {
  databases: [],
  databasesCheck: [],
  tables: [],
  tablesCheck: [],
  searchVal: '',
  data: [],
  columns: [{
    Header: '_index',
    accessor: '_index',
    maxWidth: 100
  }, {
    id: 'source',
    Header: '_source',
    accessor: _source => JSON.stringify(_source)
  }]
};

const indices = (state = initState, action) => {
  switch (action.type) {
    case LOAD_DATABASES:
      return Object.assign({}, state, {databases: action.databases});
    case LOAD_TABLES:
      return Object.assign({}, state, {tables: action.tables});
    case CHECK_DATABASES:
      return Object.assign({}, state, {databasesCheck: action.databasesCheck});
    case CHECK_TABLES:
      return Object.assign({}, state, {tablesCheck: action.tablesCheck});
    case CHANGE_INPUT:
      return Object.assign({}, state, {searchVal: action.searchVal});
    case CLICK_BUTTON:
      return Object.assign({}, state, {data: action.result});
    default:
      return state;
  }
};

export default indices;