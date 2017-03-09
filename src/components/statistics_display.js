import React, {Component} from 'react';
import StatisticGraph from './statistic_graph';

class StatisticsDisplay extends Component {
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

export default StatisticsDisplay;
