import axios from 'axios';

export const GET_ALL_DATASETS = 'GET_ALL_DATASETS';
export const GET_DATASET_BY_ID = 'GET_DATASET_BY_ID';
export const ADD_DATASET = 'ADD_DATASET';
export const UPDATE_DATASET = 'UPDATE_DATASET';
export const RESET_DATASET = 'RESET_DATASET';

export const EXECUTE_DATASET = 'EXECUTE_DATASET';

const ROOT_URL = 'http://localhost:8081/dataset/v1/';

export function getAllDatasets() {
  const url = `${ROOT_URL}dataset/all`;
  const request = axios.post(url);

  return {
    type: GET_ALL_DATASETS,
    payload: request
  };
}

export function getDatasetById(id) {
  const url = `${ROOT_URL}dataset/get/${id}`;
  const request = axios.get(url);

  return {
    type: GET_DATASET_BY_ID,
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

export function updateDataset(props) {
  const url = `${ROOT_URL}dataset/update`;
  const request = axios.post(url, props);

  return {
    type: UPDATE_DATASET,
    payload: request
  }
}

export function resetDataset() {
  return {
    type: RESET_DATASET,
    payload: null
  }
}

export function executeDataset(id) {
  const url = `${ROOT_URL}executor/execute/${id}`;
  const request = axios.get(url);
  return {
    type: EXECUTE_DATASET,
    payload: null
  }
}
