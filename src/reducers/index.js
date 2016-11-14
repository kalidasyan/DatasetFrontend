import { combineReducers } from 'redux';
import DatasetReducer from './reducer_dataset';

const rootReducer = combineReducers({
  dataset: DatasetReducer
});

export default rootReducer;
