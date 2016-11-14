import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDatasets} from '../actions/index';
import {Link} from 'react-router';

//Dataset could be the DataProfilingDefinition and future models.
class DatasetList extends Component {
  componentWillMount(){
    this.props.fetchDatasets();
  }

  renderDatasets() {
    return this.props.datasets.map((dataset) =>  {
      return (
        <li className="list-group-item" key={dataset.id}>
          <Link to={"/dataset/" + dataset.id}>
            <span className="pull-xs-right">{dataset.name}</span>
            <strong>{dataset.name}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
    <div>
      <div className="text-xs-right">
        <Link to="/dataset/new" className="btn btn-primary">
          Add a Data Profiling Definition
        </Link>
      </div>
      <h3>Data Profiling Definitions</h3>
      <ul className="list-group">
        {this.renderDatasets()}
      </ul>
    </div>);
  }
}

function mapStateToProps(state) {
  return {datasets : state.dataset.all}
}

export default connect(mapStateToProps, {fetchDatasets})(DatasetList);
