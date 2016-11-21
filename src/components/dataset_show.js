import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDatasetById} from '../actions/index';
import {Link} from 'react-router';

class DatasetShow extends Component {
  componentWillMount() {
    this.props.getDatasetById(this.props.params.id);
  }

  render() {
    const dataset = this.props.dataset;

    if(!dataset) {
      return <div>Loading</div>;
    }

    return <div>
      <Link to='/'>Back to List</Link>
      <Link
        to='/dataset/update'
        className="btn btn-primary pull-xs-right">
          Edit
      </Link>
      <h2>Dataset: {dataset.name}</h2>
      <hr/>
      <div>
        <p>Location: {dataset.location}</p>
        <p>Profiling Frequency: {dataset.refreshFrequency}</p>
        <p>Notification List: {dataset.notificationList}</p>
      </div>

    </div>
  }
}

function mapStateToProps(state) {
  return {dataset: state.dataset.activeDataset};
}

export default connect(mapStateToProps, {getDatasetById})(DatasetShow);
