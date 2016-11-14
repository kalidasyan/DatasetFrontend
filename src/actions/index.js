import axios from 'axios';

export const FETCH_DATASETS = 'FETCH_DATASETS';

const ROOT_URL = 'http://localhost:8081/dataset/v1/';

export function fetchDatasets() {
  const url = `${ROOT_URL}dataProfilingDef/all`;
  const request = axios.post(url);

  return {
    type: FETCH_DATASETS,
    payload: request
  };
}
