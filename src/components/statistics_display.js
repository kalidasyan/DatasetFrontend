import React, {Component} from 'react';
import StatisticGraph from './statistic_graph';
import {connect} from 'react-redux';
import {getDatasetSummaryDisplayInfo} from '../actions/action_dataset_summary';


class StatisticsDisplay extends Component {
  componentWillMount() {
    console.log(this.props.params.location);
    this.props.getDatasetSummaryDisplayInfo(this.props.params);
  }

  render() {
    var title = "Test Title";
    var categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var data = [29.9, 71.5, -106.4, 129.2, 144.0, -176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4];
    return (
      <div>
        <StatisticGraph title={title} categories={categories} data={data}/>
        <StatisticGraph title={title} categories={categories} data={data}/>
      </div>
    );
  }
}

export default connect(null, {getDatasetSummaryDisplayInfo})(StatisticsDisplay);
