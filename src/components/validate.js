const validate = values => {
  const errors = {}
  /*
  if(!values.name) {
    errors.name = 'Required'
  }

  if(!values.location) {
    errors.location = 'Required'
  }

  if(!values.refreshFrequency) {
    errors.refreshFrequency = 'Required'
  }

  if(!values.notificationList) {
    errors.notificationList = 'Required'
  }
*/
  if (!values.datasetRules || !values.datasetRules.length) {
    errors.datasetRules = { _error: 'At least one dataset rule must be entered' }
  } else {
    const datasetRulesErrors = []
    values.datasetRules.forEach((rule, ruleIndex) => {
      console.log(rule);
      const ruleErrors = {}
      if (!rule || !rule.columnName) {
        ruleErrors.columnName = 'Required'
        datasetRulesErrors[ruleIndex] = ruleErrors
      }
      if (!rule || !rule.rule) {
        ruleErrors.rule = {'id' : 'Must select a rule'};
        datasetRulesErrors[ruleIndex] = ruleErrors
      }
      if (!rule || !rule.parameters) {
        ruleErrors.parameters = 'Required'
        datasetRulesErrors[ruleIndex] = ruleErrors
      }
    })
    if(datasetRulesErrors.length) {
      errors.datasetRules = datasetRulesErrors
    }
  }
  console.log(errors);
  return errors
}

export default validate
