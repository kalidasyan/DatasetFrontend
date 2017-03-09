import { combineReducers } from 'redux';
import DatasetReducer from './reducer_dataset';
import StatisticsDisplayReducer from './reducer_statistics_display';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  dataset: DatasetReducer,
  statisticsDisplay: StatisticsDisplayReducer,
  form: formReducer
});

export default rootReducer;
