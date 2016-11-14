import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDatasets} from '../actions/index';

//Dataset could be the DataProfilingDefinition and future models.
class DatasetList extends Component {
  componentWillMount(){
    this.props.fetchDatasets();
  }

  renderDatasets() {
    return this.props.datasets.map((dataset) =>  {
      return (
        <li className="list-group-item" key={dataset.id}>
            <span className="pull-xs-right">{dataset.name}</span>
            <strong>{dataset.name}</strong>
        </li>
      );
    });
  }

  render() {
    return <div>
      <ul className="list-group">
        {this.renderDatasets()}
      </ul>
    </div>
  }
}

function mapStateToProps(state) {
  return {datasets : state.dataset.all}
}

export default connect(mapStateToProps, {fetchDatasets})(DatasetList);
