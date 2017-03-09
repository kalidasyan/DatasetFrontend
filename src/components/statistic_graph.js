import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

var config = {
  title: {
    text: "Test Title"
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
    type: "column",
    data: [29.9, 71.5, -106.4, 129.2, 144.0, -176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  }]
};

class StatisticGraph extends Component {
  render() {
    return (
      <div>Statistic Graph!!
        <ReactHighcharts config={config} />
      </div>
    );
  }
}

export default StatisticGraph;
