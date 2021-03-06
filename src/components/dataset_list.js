import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getAllDatasets, resetDataset} from '../actions/index';
import {Link} from 'react-router';

//Dataset could be the DataProfilingDefinition and future models.
class DatasetList extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    this.props.getAllDatasets();
  }

  renderDataset(dataset) {
    var urlEncodedLocation = encodeURIComponent(dataset.location);
      return (
        <tr scope="row" key={dataset.id}>
          <td>{dataset.id}</td>
          <td>
            <Link to={"/dataset/" + dataset.id}>
              {dataset.name}
            </Link>
          </td>
          <td>{dataset.type}</td>
          <td>{dataset.location}</td>
          <td>{dataset.platform}</td>
          <td>{dataset.refreshFrequency}</td>
          <td>Healthy</td>
          <td>{dataset.owners}</td>
          <td>
            <Link to={`/statisticsDisplay/${dataset.platform}/${urlEncodedLocation}`}>
              View Graph
            </Link>
          </td>
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
          Add a Dataset
        </button>
      </div>
      <h3>Dataset Definitions</h3>
      <table className="table table-striped">
        <thead className="thead-inverse">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Location</th>
            <th>Platform</th>
            <th>Refresh Frequency</th>
            <th>Status</th>
            <th>Owners</th>
            <th>StatisticsGraph</th>
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

export default connect(mapStateToProps, {getAllDatasets, resetDataset})(DatasetList);
