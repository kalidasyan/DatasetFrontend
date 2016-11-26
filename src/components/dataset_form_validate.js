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

/*
  if (!values.statistics || !values.statistics.length) {
    errors.statistics = { _error: 'At least one statistic must be entered' }
  } else {
*/
  if(values.statistics && values.statistics.length) {
    const statisticsErrors = []
    values.statistics.forEach((statistic, statisticIndex) => {
      const statisticErrors = {}
      if (!statistic || !statistic.id) {
        statisticErrors.id = 'Must select a statistic';
        statisticsErrors[statisticIndex] = statisticErrors
      }
    })
    if(statisticsErrors.length) {
      errors.statistics = statisticsErrors
    }
  }

/*
  if (!values.datasetRules || !values.datasetRules.length) {
    errors.datasetRules = { _error: 'At least one dataset rule must be entered' }
  } else {
*/
  if (values.datasetRules && values.datasetRules.length) {
    const datasetRulesErrors = []
    values.datasetRules.forEach((rule, ruleIndex) => {
      const ruleErrors = {}
      if (!rule || !rule.columns) {
        ruleErrors.columns = 'Required'
        datasetRulesErrors[ruleIndex] = ruleErrors
      }
      if (!rule || !rule.statistic) {
        ruleErrors.statistic = {'id' : 'Must select a statistic'};
        datasetRulesErrors[ruleIndex] = ruleErrors
      }
      if (!rule || !rule.operator) {
        ruleErrors.operator = {'id' : 'Must select a operator'};
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

  return errors
}

export default validate
