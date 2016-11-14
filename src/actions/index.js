import axios from 'axios';

export const FETCH_DATA_PROFILING_DEFINITION = 'FETCH_DATA_PROFILING_DEFINITION';

const ROOT_URL = 'http://localhost:8081/dataset/v1/';

export function fetchDataProfilingDefinition() {
  const url = `${ROOT_URL}dataProfilingDef/all`;
  const request = axios.post(url);

  return {
    type: FETCH_DATA_PROFILING_DEFINITION,
    payload: request
  };
}
