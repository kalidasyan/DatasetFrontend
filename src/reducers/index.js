import { combineReducers } from 'redux';
import DatasetReducer from './reducer_dataset';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  dataset: DatasetReducer,
  form: formReducer
});

export default rootReducer;
