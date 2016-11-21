import {GET_ALL_DATASETS, FETCH_DATASET_BY_ID, RESET_DATASET} from '../actions/index';

const INITIAL_STATE = {
  all: [],
  activeDataset: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_DATASETS:
      return {...state, all: action.payload.data};
    case FETCH_DATASET_BY_ID:
      return {...state, activeDataset: action.payload.data};
    case RESET_DATASET:
      return {...state, activeDataset: null}
    default:
      return state;
  }
}
