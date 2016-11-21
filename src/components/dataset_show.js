import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDatasetById} from '../actions/index';
import {Link} from 'react-router';

class DatasetShow extends Component {
  componentWillMount() {
    this.props.getDatasetById(this.props.params.id);

    this.renderDatasetRules = this.renderDatasetRules.bind(this);
    this.renderRule = this.renderRule.bind(this);
  }

  renderRule(rule) {
      return (
        <tr scope="row" key={rule.id}>
          <td>{rule.columnName}</td>
          <td>{rule.rule.name}</td>
          <td>{rule.parameters}</td>
        </tr>
      );
  }

  renderDatasetRules(dataset) {
    return (
      <div>
        <h3>Dataset Rules</h3>
        <table className="table table-striped">
          <thead className="thead-inverse">
            <tr>
              <th>Column Name</th>
              <th>Rule</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {dataset.datasetRules.map(this.renderRule)}
          </tbody>
        </table>
      </div>
    );
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
        <hr/>
        {this.renderDatasetRules(dataset)}
      </div>

    </div>
  }
}

function mapStateToProps(state) {
  return {dataset: state.dataset.activeDataset};
}

export default connect(mapStateToProps, {getDatasetById})(DatasetShow);
