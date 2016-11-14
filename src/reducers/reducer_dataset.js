import {FETCH_DATA_PROFILING_DEFINITION} from '../actions/index';

const INITIAL_STATE = {
  all: [],
  dataset: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATA_PROFILING_DEFINITION:
      return {...state, all: action.payload.data};
    default:
      return state;
  }
}
