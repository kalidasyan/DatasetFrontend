import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDatasetById} from '../actions/index';
import {Link} from 'react-router';

class DatasetShow extends Component {
  componentWillMount() {
    this.props.fetchDatasetById(this.props.params.id);
  }

  render() {
    const definition = this.props.dataset;

    if(!definition) {
      return <div>Loading</div>;
    }

    return <div>
      <Link to='/'>Back to List</Link>
      <button
        className="btn btn-danger pull-xs-right">
          Delete
      </button>
      <h3>{definition.definitionName}</h3>
      <hr/>
      <div>
        <p>Input Location: {definition.inputLocation}</p>
        <p>Output Location: {definition.outputLocation}</p>
        <p><strong>Profiling Method: {definition.profilingMethod.methodName}</strong></p>
        <p>Profiling Columns: {definition.profilingColumns}</p>
        <p>Profiling Frequency: {definition.frequency}</p>
        <p>Definition Description: {definition.definitionDescription}</p>
      </div>

    </div>
  }
}

function mapStateToProps(state) {
  return {dataset: state.dataset.activeDataset};
}

export default connect(mapStateToProps, {fetchDatasetById})(DatasetShow);
