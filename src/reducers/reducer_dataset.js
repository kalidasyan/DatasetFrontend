import {FETCH_DATASETS, FETCH_DATASET_BY_ID} from '../actions/index';

const INITIAL_STATE = {
  all: [],
  activeDataset: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATASETS:
      return {...state, all: action.payload.data};
    case FETCH_DATASET_BY_ID:
      return {...state, activeDataset: action.payload.data};
    default:
      return state;
  }
}
