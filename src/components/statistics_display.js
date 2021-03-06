import React, {Component} from 'react';
import StatisticGraph from './statistic_graph';
import StatisticDisplayStock from './statistic_display_stock';
import {connect} from 'react-redux';
import {getDatasetSummaryDisplayInfo} from '../actions/action_inspector';


class StatisticsDisplay extends Component {
  componentWillMount() {
    this.props.getDatasetSummaryDisplayInfo(this.props.params);
  }

  renderStatisticGraph(summaryInfo) {
    var summaryName = summaryInfo.summaryName;
    var title = `Statistic: ${summaryName}`;
    var categories = summaryInfo.summaryValues.map(summaryValue => summaryValue.dataDate);
    var data = summaryInfo.summaryValues.map(summaryValue => summaryValue.summaryValue);
    // <StatisticDisplayStock />
    return (<div key={summaryName}>
      <StatisticGraph title={title} name={summaryName} categories={categories} data={data}/>
    </div>)
  }

  render() {
    var datasetStatistics = this.props.datasetStatistics;
    if(!datasetStatistics) {
      return <div>Loading..</div>;
    }

    var platform = datasetStatistics.platform;
    var location = datasetStatistics.location;

    return (
      <div>
        <h2>Dataset: {location}, Platform: {platform}</h2>
        <div>{datasetStatistics.summaryInfos.map(this.renderStatisticGraph)}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {datasetStatistics: state.statisticsDisplay.datasetStatistics};
}

export default connect(mapStateToProps, {getDatasetSummaryDisplayInfo})(StatisticsDisplay);
