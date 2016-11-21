import React from 'react'
import {connect} from 'react-redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './dataset_form_validate'

const renderField = ({input, label, type, meta: { touched, error } }) => (

  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const rules = [
  {'id' : 1, 'name' : 'Min'},
  {'id' : 2, 'name' : 'Max'},
  {'id' : 3, 'name' : 'Average'},
  {'id' : 4, 'name' : 'Count'},
  {'id' : 5, 'name' : 'Not-null-Count'}
];

const renderSelectField = ({input, label, type, meta: { touched, error } }) => (

  <div>
    <label>{label}</label>
    <div>
      <select {...input} >
        <option value="">Select a rule...</option>
        {rules.map(ruleOption =>
          <option value={ruleOption.id} key={ruleOption.id}>{ruleOption.name}</option>)}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderDatasetRules = ({ fields, meta: { touched, error } }) => {
  return (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>Add Dataset Rule</button>
      {touched && error && <span>{error}</span>}
    </li>
    {fields.map((rule, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Rule"
          onClick={() => fields.remove(index)}/>
        <h4>Dataset Rule #{index + 1}</h4>
        <Field
          name={`${rule}.columnName`}
          type="text"
          component={renderField}
          label="Column Name"/>
        <Field
          name={`${rule}.rule.id`}
          component={renderSelectField}
          label="Rule" />
        <Field
          name={`${rule}.parameters`}
          type="text"
          component={renderField}
          label="Value"/>
      </li>
      )}
  </ul>
  );
}

let FieldArraysForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Dataset</h2>
      <Field name="id" type="hidden" component={renderField} />
      <Field name="name" type="text" component={renderField} label="Dataset Name" />
      <Field name="location" type="text" component={renderField} label="Dataset Location" />
      <Field name="refreshFrequency" type="text" component={renderField} label="Refresh Frequency" />
      <Field name="notificationList" type="text" component={renderField} label="Notification List" />
      <FieldArray name="datasetRules" component={renderDatasetRules}/>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

FieldArraysForm = reduxForm({
  form: 'fieldArrays',     // a unique identifier for this form
  validate
})(FieldArraysForm);

export default connect(
  state => ({
      initialValues: state.dataset.activeDataset // pull initial values from account reducer
    }),
  null
)(FieldArraysForm);
