import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addDataset} from '../actions/index';
import FieldArraysForm from './dataset_form';

class DatasetNew extends Component {
  showResults(values) {
    this.props.addDataset(values);
/*
    new Promise(resolve => {
      setTimeout(() => {  // simulate server latency
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
        resolve()
      }, 500)
    });
*/
  }

  render() {
    return (
      <FieldArraysForm onSubmit={this.showResults.bind(this)}/>
    );
  }
}

export default connect(null, {addDataset})(DatasetNew);
