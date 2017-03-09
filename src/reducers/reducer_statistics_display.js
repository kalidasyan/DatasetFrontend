import {STATISTICS_DISPLAY} from '../actions/action_inspector';

const INITIAL_STATE = {
  datasetStatistics : null
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STATISTICS_DISPLAY:
      return {...state, datasetStatistics: action.payload.data};
    default:
      return state;
  }
}
