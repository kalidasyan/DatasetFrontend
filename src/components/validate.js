const validate = values => {
  const errors = {}
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

  if (!values.datasetRules || !values.datasetRules.length) {
    errors.datasetRules = { _error: 'At least one dataset rule must be entered' }
  } else {
    const datasetRulesErrors = []
    values.datasetRules.forEach((rule, ruleIndex) => {
      const ruleErrors = {}
      if (!rule || !rule.firstName) {
        ruleErrors.firstName = 'Required'
        datasetRulesErrors[ruleIndex] = ruleErrors
      }
      if (!rule || !rule.lastName) {
        ruleErrors.lastName = 'Required'
        datasetRulesErrors[ruleIndex] = ruleErrors
      }
    })
    if(datasetRulesErrors.length) {
      errors.datasetRules = datasetRulesErrors
    }
  }
  return errors
}

export default validate
