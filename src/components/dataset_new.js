import React, {Component} from 'react';
import {Link} from 'react-router';
import {reduxForm} from 'redux-form';
import {createDataset} from '../actions/index';

class DatasetNew extends Component {
  onSubmit(props) {
    console.log(props);
  }

  render() {
    const {fields: {definitionName, inputLocation, outputLocation,
      profilingMethod, profilingColumns,
      profilingFrequency, definitionDescription}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Data Profiling Definition</h3>
        <div className={`form-group ${definitionName.touched && definitionName.invalid ? 'has-danger' : ''}`}>
          <label>Definition Name</label>
          <input type="text" className="form-control" {...definitionName} />
          <div className="form-control-feedback">
            {definitionName.touched ? definitionName.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.definitionName) {
    errors.definitionName = 'Enter a name';
  }

  return errors;
}

export default reduxForm({
  form: 'DatasetNewForm',
  fields: ['definitionName', 'inputLocation', 'outputLocation',
    'profilingMethod', 'profilingColumns',
    'profilingFrequency', 'definitionDescription'],
  validate
}, null, {createDataset})(DatasetNew);
