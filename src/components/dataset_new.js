import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {reduxForm} from 'redux-form';
import {createDataset, modifyDataset} from '../actions/index';

class DatasetNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props) {
    props.profilingMethod = {id: props['profilingMethodId']};
    console.log(props);

    if(props.id) {
      this.props.modifyDataset(props)
        .then(() => {
          //definition has been created, navigate the user to the index
          //we navigate by calling this.context.router.push with the new
          //path to navigate to.
          this.context.router.push('/');
        });
    } else {
      this.props.createDataset(props)
        .then(() => {
          //definition has been created, navigate the user to the index
          //we navigate by calling this.context.router.push with the new
          //path to navigate to.
          this.context.router.push('/');
        });
    }
  }

  render() {
    const {fields: {id, definitionName, inputLocation, outputLocation,
      profilingMethodId, profilingMethodName, profilingColumns,
      profilingFrequency, definitionDescription}, handleSubmit} = this.props;
      console.log(definitionName);
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <input type="hidden" {...id} />
        <h3>Create A New Data Profiling Definition</h3>
        <hr />
        <div className={`form-group ${definitionName.touched && definitionName.invalid ? 'has-error' : ''}`}>
          <label>Definition Name</label>
          <input type="text" className="form-control" {...definitionName} />
          <div className="text">
            {definitionName.touched ? definitionName.error : ''}
          </div>
        </div>

        <div className={`form-group ${inputLocation.touched && inputLocation.invalid ? 'has-error' : ''}`}>
          <label>Input Location</label>
          <input type="text" className="form-control" {...inputLocation} />
          <div className="text">
            {inputLocation.touched ? inputLocation.error : ''}
          </div>
        </div>

        <div className={`form-group ${outputLocation.touched && outputLocation.invalid ? 'has-error' : ''}`}>
          <label>Output Location</label>
          <input type="text" className="form-control" {...outputLocation} />
          <div className="text">
            {outputLocation.touched ? outputLocation.error : ''}
          </div>
        </div>
        <input type="hidden" {...profilingMethodId} />
        <div className={`form-group ${profilingMethodName.touched && profilingMethodName.invalid ? 'has-error' : ''}`}>
          <label>Profiling Method</label>
          <input type="text" className="form-control" {...profilingMethodName} />
          <div className="text">
            {profilingMethodName.touched ? profilingMethodName.error : ''}
          </div>
        </div>

        <div className={`form-group ${profilingColumns.touched && profilingColumns.invalid ? 'has-error' : ''}`}>
          <label>Profiling Columns (Comma Separated)</label>
          <input type="text" className="form-control" {...profilingColumns} />
          <div className="text">
            {profilingColumns.touched ? profilingColumns.error : ''}
          </div>
        </div>

        <div className={`form-group ${profilingFrequency.touched && profilingFrequency.invalid ? 'has-error' : ''}`}>
          <label>Profiling Frequency</label>
          <input type="text" className="form-control" {...profilingFrequency} />
          <div className="text">
            {profilingFrequency.touched ? profilingFrequency.error : ''}
          </div>
        </div>
        <div className={`form-group ${definitionDescription.touched && definitionDescription.invalid ? 'has-error' : ''}`}>
          <label>Definition Description</label>
          <textarea placeholder="enter description.." className="form-control" {...definitionDescription} />
          <div className="text">
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

  if(!values.profilingMethodName) {
    errors.profilingMethodName = 'Select a Profiling Method';
  }

  return errors;
}

function mapStateToProps(state) {
  var dataset = state.dataset.activeDataset;
  if(dataset) { //If it is a dataset_new operation, profilingMethod is not available
    dataset.profilingMethodId = dataset.profilingMethod.id;
    dataset.profilingMethodName = dataset.profilingMethod.methodName;
    return {initialValues: dataset};
  } else {
    return null;
  }

}

export default reduxForm({
  form: 'DatasetNewForm',
  fields: ['id', 'definitionName', 'inputLocation', 'outputLocation',
    'profilingMethodId', 'profilingMethodName', 'profilingColumns',
    'profilingFrequency', 'definitionDescription'],
  validate
}, mapStateToProps, {createDataset, modifyDataset})(DatasetNew);
