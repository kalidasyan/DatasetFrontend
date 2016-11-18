import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchDatasets, resetDataset} from '../actions/index';
import {Link} from 'react-router';

//Dataset could be the DataProfilingDefinition and future models.
class DatasetList extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    this.props.fetchDatasets();
  }

  renderDataset(definition) {
      return (
        <tr scope="row" key={definition.id}>
          <td>{definition.id}</td>
          <td>
            <Link to={"/dataset/" + definition.id}>
              {definition.definitionName}
            </Link>
          </td>
          <td>{definition.inputLocation}</td>
          <td>{definition.outputLocation}</td>
          <td>{definition.profilingMethod.methodName}</td>
          <td>{definition.profilingColumns}</td>
          <td>{definition.profilingFrequency}</td>
        </tr>
      );
  }

  handleCreateClick() {
    this.props.resetDataset();
    this.context.router.push('/dataset/new');
  }

  render() {

    return (
    <div>
      <div className="text-xs-right">
        <button onClick={this.handleCreateClick.bind(this)} className="btn btn-primary">
          Add a Data Profiling Definition
        </button>
      </div>
      <h3>Data Profiling Definitions</h3>
      <table className="table table-striped">
        <thead className="thead-inverse">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Input Location</th>
            <th>Output Location</th>
            <th>Profiling Method</th>
            <th>Profiling Columns</th>
            <th>Profiling Frequency</th>
          </tr>
        </thead>
        <tbody>
          {this.props.datasets.map(this.renderDataset)}
        </tbody>
      </table>
    </div>);
  }
}

function mapStateToProps(state) {
  return {datasets : state.dataset.all}
}

export default connect(mapStateToProps, {fetchDatasets, resetDataset})(DatasetList);
