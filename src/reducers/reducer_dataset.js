import {FETCH_DATASETS} from '../actions/index';

const INITIAL_STATE = {
  all: [],
  activeDataset: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATASETS:
      return {...state, all: action.payload.data};
    default:
      return state;
  }
}
