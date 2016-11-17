import React, {Component} from 'react';
import {Link} from 'react-router';
import {reduxForm} from 'redux-form';
import {createDataset} from '../actions/index';

class DatasetNew extends Component {
  onSubmit(props) {
    props.profilingMethod = {id: props['profilingMethod']};
    console.log(props);
    this.props.createDataset(props);
  }

  render() {
    const {fields: {definitionName, inputLocation, outputLocation,
      profilingMethod, profilingColumns,
      profilingFrequency, definitionDescription}, handleSubmit} = this.props;
    console.log(profilingMethod);
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

        <div className={`form-group ${inputLocation.touched && inputLocation.invalid ? 'has-danger' : ''}`}>
          <label>Input Location</label>
          <input type="text" className="form-control" {...inputLocation} />
          <div className="form-control-feedback">
            {inputLocation.touched ? inputLocation.error : ''}
          </div>
        </div>

        <div className={`form-group ${outputLocation.touched && outputLocation.invalid ? 'has-danger' : ''}`}>
          <label>Output Location</label>
          <input type="text" className="form-control" {...outputLocation} />
          <div className="form-control-feedback">
            {outputLocation.touched ? outputLocation.error : ''}
          </div>
        </div>

        <div className={`form-group ${profilingMethod.touched && profilingMethod.invalid ? 'has-danger' : ''}`}>
          <label>Profiling Method</label>
          <input type="text" className="form-control" {...profilingMethod} />
          <div className="form-control-feedback">
            {profilingMethod.touched ? profilingMethod.error : ''}
          </div>
        </div>

        <div className={`form-group ${profilingColumns.touched && profilingColumns.invalid ? 'has-danger' : ''}`}>
          <label>Profiling Columns (Comma Separated)</label>
          <input type="text" className="form-control" {...profilingColumns} />
          <div className="form-control-feedback">
            {profilingColumns.touched ? profilingColumns.error : ''}
          </div>
        </div>

        <div className={`form-group ${profilingFrequency.touched && profilingFrequency.invalid ? 'has-danger' : ''}`}>
          <label>Profiling Frequency</label>
          <input type="text" className="form-control" {...profilingFrequency} />
          <div className="form-control-feedback">
            {profilingFrequency.touched ? profilingFrequency.error : ''}
          </div>
        </div>
        <div className={`form-group ${definitionDescription.touched && definitionDescription.invalid ? 'has-danger' : ''}`}>
          <label>Definition Description</label>
          <textarea placeholder="enter description.." className="form-control" {...definitionDescription} />
          <div className="form-control-feedback">
            {definitionDescription.touched ? definitionDescription.error : ''}
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

  if(!values.inputLocation) {
    errors.inputLocation = 'Enter a location';
  }

  if(!values.outputLocation) {
    errors.outputLocation = 'Enter a location';
  }

  if(!values.profilingMethod) {
    errors.profilingMethod = 'Select a Profiling Method';
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
