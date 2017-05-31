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
        <div className="kuiSearchInput">
          <div className="kuiSearchInput__icon kuiIcon fa-search"/>
          <input type="text" className="kuiSearchInput__input" onChange={indicesActions.changeInput}/>
        </div>
        <button className="kuiButton kuiButton--basic" onClick={indicesActions.clickButton}>
          <span className="kuiButton__inner">
            <span>搜索</span>
          </span>
        </button>
        <br/>
        <br/>
        <ReactTable data={indices.data} columns={indices.columns}/>
      </div>
    );
  }
}

MSearch.propTypes = {
  indices: PropTypes.object
};

export default MSearch;