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

const statistics = [
  {'id' : 1, 'name' : 'Min'},
  {'id' : 2, 'name' : 'Max'},
  {'id' : 3, 'name' : 'Average'},
  {'id' : 4, 'name' : 'Not-null-Count'},
  {'id' : 5, 'name' : 'Count'},
  {'id' : 6, 'name' : 'SLA'},
  {'id' : 7, 'name' : 'Data-Size-MegaBytes'},
  {'id' : 8, 'name' : 'Schema-Change'}
];

const renderStatistics = ({input, label, type, meta: { touched, error } }) => (

  <div>
    <label>{label}</label>
    <div>
      <select {...input} >
        <option value="">Select a statistic...</option>
        {statistics.map(statOption =>
          <option value={statOption.id} key={statOption.id}>{statOption.name}</option>)}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const operators = [
  {'id' : 1, 'operator' : '<'},
  {'id' : 2, 'operator' : '>'},
  {'id' : 3, 'operator' : '='},
  {'id' : 4, 'operator' : '<='},
  {'id' : 5, 'operator' : '>='},
  {'id' : 6, 'operator' : '<>'}
];

const renderOperators = ({input, label, type, meta: { touched, error } }) => (

  <div>
    <label>{label}</label>
    <div>
      <select {...input} >
        <option value="">Select a Operator...</option>
        {operators.map(operatorOption =>
          <option value={operatorOption.id} key={operatorOption.id}>{operatorOption.operator}</option>)}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const datasetType = [
  {'id' : 1, 'name' : 'HdfsFile'},
  {'id' : 2, 'name' : 'HiveTable'}
];

const platform = [
  {'id' : 1, 'name' : 'Holdem'},
  {'id' : 2, 'name' : 'War'}
];

const refreshFrequency = [
  {'id' : 1, 'name' : 'Daily'},
  {'id' : 2, 'name' : 'Weekly'}
];

const renderItems = ({input, label, items, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input} >
        <option value="">Select ...</option>
        {items.map(item =>
          <option value={item.name} key={item.id}>{item.name}</option>)}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderDatasetStatistics = ({ fields, meta: { touched, error } }) => {
  return (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>Add Dataset Statistics</button>
      {touched && error && <span>{error}</span>}
    </li>
    {fields.map((statistic, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Statistic"
          onClick={() => fields.remove(index)}/>
        <h4>Dataset Statistic #{index + 1}</h4>
        <Field
          name={`${statistic}.id`}
          component={renderStatistics}
          label="Statistic" />
      </li>
      )}
  </ul>
  );
}

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
          name={`${rule}.columns`}
          type="text"
          component={renderField}
          label="Columns (',' separated, only for column level rules)"/>
        <Field
          name={`${rule}.statistic.id`}
          component={renderStatistics}
          label="Statistic" />
        <Field
          name={`${rule}.operator.id`}
          component={renderOperators}
          label="Operator" />
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
  //<Field name="refreshDay" type="text" component={renderField} label="Refresh Day" />
  //<Field name="lookBackDays" type="text" component={renderField} label="Lookback Days(0~10)" />
  //<Field name="refreshHour" type="text" component={renderField} label="Refresh Hour(0~23)" />
  //<Field name="gracePeriodInMinutes" type="text" component={renderField} label="Grace Period(minutes)" />

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Dataset</h2>
      <Field name="id" type="hidden" component={renderField} />
      <Field name="name" type="text" component={renderField} label="Dataset Name" />
      <Field name="type" items={datasetType} component={renderItems} label="Dataset Type" />
      <Field name="location" type="text" component={renderField} label="Dataset Location" />
      <div>
        <label>Is Snapshot?</label>
        <div>
          <label><Field name="isSnapshot" component="input" type="radio" value="true"/> True</label>
          <label><Field name="isSnapshot" component="input" type="radio" value="false"/> False</label>
        </div>
      </div>
      <Field name="dataFolderPattern" type="text" component={renderField} label="Data Folder Pattern" />
      <Field name="platform" items={platform} component={renderItems} label="Platform" />
      <Field name="refreshFrequency" items={refreshFrequency} component={renderItems} label="Refresh Frequency" />
      <Field name="owners" type="text" component={renderField} label="Owners" />
      <hr/>
      <FieldArray name="statistics" component={renderDatasetStatistics}/>
      <hr/>
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
