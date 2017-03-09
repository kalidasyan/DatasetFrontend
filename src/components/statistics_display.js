import React, {Component} from 'react';
import StatisticGraph from './statistic_graph';
import {connect} from 'react-redux';
import {getDatasetSummaryDisplayInfo} from '../actions/action_inspector';


class StatisticsDisplay extends Component {
  componentWillMount() {
    this.props.getDatasetSummaryDisplayInfo(this.props.params);
  }

  render() {
    var datasetStatistics = this.props.datasetStatistics;

    if(!datasetStatistics) {
      return <div>Loading..</div>;
    }
    var platform = datasetStatistics.platform;
    var location = datasetStatistics.location;
    console.log(datasetStatistics);
    var title = "Test Title";
    var categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var data = [29.9, 71.5, -106.4, 129.2, 144.0, -176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4];
    return (
      <div>
        <h2>Dataset: {location}, Platform: {platform}</h2>
        <StatisticGraph title={title} categories={categories} data={data}/>
        <StatisticGraph title={title} categories={categories} data={data}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {datasetStatistics: state.statisticsDisplay.datasetStatistics};
}

export default connect(mapStateToProps, {getDatasetSummaryDisplayInfo})(StatisticsDisplay);
