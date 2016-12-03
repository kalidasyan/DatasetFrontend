import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addDataset, updateDataset} from '../actions/index';
import FieldArraysForm from './dataset_form';

class DatasetEdit extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  showResults(values) {

    if(values.id) {
      this.props.updateDataset(values)
        .then(() => {
        this.context.router.push('/');
      });
    } else {
      this.props.addDataset(values)
        .then(() => {
        //definition has been created, navigate the user to the index
        //we navigate by calling this.context.router.push with the new
        //path to navigate to.
        this.context.router.push('/');
      });
    }
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

export default connect(null, {addDataset, updateDataset})(DatasetEdit);
