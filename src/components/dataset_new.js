import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {createDataset, modifyDataset} from '../actions/index';
import FieldArraysForm from './dataset_form';

class DatasetNew extends Component {
  showResults(values) {
    new Promise(resolve => {
      setTimeout(() => {  // simulate server latency
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
        resolve()
      }, 500)
    });
  }

  render() {
    return (
      <FieldArraysForm onSubmit={this.showResults}/>
    );
  }
}

export default DatasetNew;
