import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'

const renderField = ({input, label, type, meta: { touched, error } }) => (

  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderMembers = ({ fields, meta: { touched, error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>Add Member</button>
      {touched && error && <span>{error}</span>}
    </li>
    {fields.map((member, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}/>
        <h4>Dataset Rule #{index + 1}</h4>
        <Field
          name={`${member}.firstName`}
          type="text"
          component={renderField}
          label="First Name"/>
        <Field
          name={`${member}.lastName`}
          type="text"
          component={renderField}
          label="Last Name"/>
      </li>
    )}
  </ul>
)

const FieldArraysForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="name" type="text" component={renderField} label="Dataset Name" />
      <Field name="location" type="text" component={renderField} label="Dataset Location" />
      <Field name="refreshFrequency" type="text" component={renderField} label="Refresh Frequency" />
      <Field name="notificationList" type="text" component={renderField} label="Notification List" />
      <FieldArray name="datasetRules" component={renderMembers}/>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldArrays',     // a unique identifier for this form
  validate
})(FieldArraysForm)
