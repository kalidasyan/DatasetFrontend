import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDataProfilingDefinition} from '../actions/index';

//Dataset could be the DataProfilingDefinition and future models.
class DatasetList extends Component {
  componentWillMount(){
    this.props.fetchDataProfilingDefinition();
  }

  render() {
    return <div>
      Dataset List
    </div>
  }
}

export default connect(null, {fetchDataProfilingDefinition})(DatasetList);
