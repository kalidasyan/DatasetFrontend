import axios from 'axios';

export const FETCH_DATASETS = 'FETCH_DATASETS';
export const CREATE_DATASET = 'CREATE_DATASET';

const ROOT_URL = 'http://localhost:8081/dataset/v1/';

export function fetchDatasets() {
  const url = `${ROOT_URL}dataProfilingDef/all`;
  const request = axios.post(url);

  return {
    type: FETCH_DATASETS,
    payload: request
  };
}

export function createDataset(props) {
  const url = `${ROOT_URL}dataProfilingDef/create`;
  const request = axios.post(url, props);

  return {
    type: CREATE_DATASET,
    payload: request
  }
}
