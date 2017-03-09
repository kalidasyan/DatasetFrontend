import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

class StatisticGraph extends Component {
  constructor(props) {
    super(props);

    var config = {
      title: {
        text: props.title
      },
      xAxis: {
        categories: props.categories
      },
      series: [{
        name: props.name,
        type: "column",
        data: props.data
      }]
    };

    this.state = {
      config : config
    }
  }

  render() {
    return (
      <div>
        <ReactHighcharts config={this.state.config} />
      </div>
    );
  }
}

export default StatisticGraph;
