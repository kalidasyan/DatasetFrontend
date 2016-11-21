import axios from 'axios';

export const FETCH_DATASETS = 'FETCH_DATASETS';
export const FETCH_DATASET_BY_ID = 'FETCH_DATASET_BY_ID';
export const ADD_DATASET = 'ADD_DATASET';
export const MODIFY_DATASET = 'MODIFY_DATASET';
export const RESET_DATASET = 'RESET_DATASET';

const ROOT_URL = 'http://localhost:8081/dataset/v1/';

export function fetchDatasets() {
  const url = `${ROOT_URL}dataProfilingDef/all`;
  const request = axios.post(url);

  return {
    type: FETCH_DATASETS,
    payload: request
  };
}

export function fetchDatasetById(id) {
  const url = `${ROOT_URL}dataProfilingDef/get/${id}`;
  const request = axios.get(url);

  return {
    type: FETCH_DATASET_BY_ID,
    payload: request
  }
}

export function addDataset(props) {
  const url = `${ROOT_URL}dataset/add`;
  const request = axios.post(url, props);

  return {
    type: ADD_DATASET,
    payload: request
  }
}

export function modifyDataset(props) {
  const url = `${ROOT_URL}dataProfilingDef/modify`;
  const request = axios.post(url, props);

  return {
    type: MODIFY_DATASET,
    payload: request
  }
}

export function resetDataset() {
    return {
      type: RESET_DATASET,
      payload: null
  }
}
