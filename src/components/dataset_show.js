import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDatasetById, executeDataset} from '../actions/index';
import {Link} from 'react-router';

class DatasetShow extends Component {
  componentWillMount() {
    this.props.getDatasetById(this.props.params.id);

    this.renderDatasetStatistics = this.renderDatasetStatistics.bind(this);
    this.renderStatistic = this.renderStatistic.bind(this);
    this.renderDatasetRules = this.renderDatasetRules.bind(this);
    this.renderRule = this.renderRule.bind(this);

    this.executeNow = this.executeNow.bind(this);
  }

  renderStatistic(statistic) {
      return (
        <tr scope="row" key={statistic.id}>
          <td>{statistic.name}</td>
          <td>{statistic.description}</td>
        </tr>
      );
  }

  renderDatasetStatistics(dataset) {
    return (
      <div>
        <h3>Dataset Statistics</h3>
        <table className="table table-striped">
          <thead className="thead-inverse">
            <tr>
              <th>Statistic</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {dataset.statistics.map(this.renderStatistic)}
          </tbody>
        </table>
      </div>
    );
  }

  renderRule(rule) {
      return (
        <tr scope="row" key={rule.id}>
          <td>{rule.columns}</td>
          <td>{rule.statistic.name}</td>
          <td>{rule.operator.operator}</td>
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
              <th>Columns</th>
              <th>Statistic</th>
              <th>Operator</th>
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

  executeNow(id) {
    this.props.executeDataset(id);
    window.alert("Executed!!");
  }

  render() {
    const dataset = this.props.dataset;

    if(!dataset) {
      return <div>Loading..</div>;
    }

    //        <p>Refresh Hour: {dataset.refreshHour}</p>
    //        <p>Lookback Days: {dataset.lookBackDays}</p>
    //        <p>Grace Period (minutes): {dataset.gracePeriodInMinutes}</p>

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
        <p>Type: {dataset.type}</p>
        <p>Location: {dataset.location}</p>
        <p>Data Folder Pattern: {dataset.dataFolderPattern}</p>
        <p>Platform: {dataset.platform}</p>
        <p>Refresh Frequency: {dataset.refreshFrequency}</p>
        <p>Owners: {dataset.owners}</p>
        <hr/>
        {this.renderDatasetStatistics(dataset)}
        <hr/>
        {this.renderDatasetRules(dataset)}
        <hr/>
        <button
          onClick={() => this.executeNow(dataset.id)}
          className="btn btn-primary">
            Execute Now
          </button>
      </div>

    </div>
  }
}

function mapStateToProps(state) {
  return {dataset: state.dataset.activeDataset};
}

export default connect(mapStateToProps, {getDatasetById, executeDataset})(DatasetShow);
