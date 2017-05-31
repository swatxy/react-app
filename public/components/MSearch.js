import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class MSearch extends React.Component {
  componentWillMount() {
    const {indicesActions} = this.props;
    indicesActions.fetchDatabases();
    indicesActions.fetchTables();
  }

  render() {
    const {indices} = this.props;
    const {indicesActions} = this.props;
    return (
      <div>
        索引
        <CheckboxGroup name="databases" value={indices.databasesCheck} onChange={indicesActions.checkDatabases}>
          {
            indices.databases.map((database, i) => (
              <label key={i}>
                <Checkbox value={database}/>
                <span>{database}</span>
              </label>
            ))
          }
        </CheckboxGroup>
        类型
        <CheckboxGroup name="tables" value={indices.tablesCheck} onChange={indicesActions.checkTables}>
          {
            indices.tables.map((table, i) => (
              <label key={i}>
                <Checkbox value={table}/>
                <span>{table}</span>
              </label>
            ))
          }
        </CheckboxGroup>
        搜索
        <br/>
        <div className="kuiLocalNav--search">
          <div className="kuiLocalNavRow kuiLocalNavRow--search">
            <div className="kuiLocalSearch">
              <input type="text" className="kuiLocalSearchInput"
                     placeholder="Search... (e.g. status:200 AND extension:PHP)" onChange={indicesActions.changeInput}/>
              <button className="kuiLocalSearchButton" onClick={indicesActions.clickButton}>
                <span className="kuiIcon fa-search"/>
              </button>
            </div>
          </div>
        </div>
        <br/>
        <ReactTable data={indices.data} columns={indices.columns} defaultPageSize={10} SubComponent={(row) => {
          return (
            <div style={{padding: '20px'}}>
              <pre><code>{JSON.stringify(row.original._source, null, 2)}</code></pre>
            </div>
          );
        }}/>
      </div>
    );
  }
}

MSearch.propTypes = {
  indices: PropTypes.object
};

export default MSearch;