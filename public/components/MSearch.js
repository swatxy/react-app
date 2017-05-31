import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';

class MSearch extends React.Component {
  componentWillMount() {
    const {indicesActions} = this.props;
    indicesActions.fetchIndices();
    indicesActions.fetchMappings();
  }

  render() {
    const {indices} = this.props;
    const {indicesActions} = this.props;
    return (
      <div>
        索引
        <CheckboxGroup name="databases" value={indices.databasesCheck} onChange={indicesActions.checkIndices}>
          {
            indices.databases.map((index, i) => (
              <label key={i}>
                <Checkbox className="kuiCheckBox" value={index}/>
                <span className="kuiCheckBoxLabel__text">{index}</span>
              </label>
            ))
          }
        </CheckboxGroup>
        类型
        <CheckboxGroup name="tables" value={indices.tablesCheck} onChange={indicesActions.checkMappings}>
          {
            indices.tables.map((mapping, i) => (
              <label key={i}>
                <Checkbox className="kuiCheckBox" value={mapping}/>
                <span className="kuiCheckBoxLabel__text">{mapping}</span>
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
        <div className="container">
          <table id="example" ref="example" className="table table-striped table-bordered table-hover table-condensed"
                 width="100%"/>
        </div>
      </div>
    );
  }
}

MSearch.propTypes = {
  indices: PropTypes.object
};

export default MSearch;