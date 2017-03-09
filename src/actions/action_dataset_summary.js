import axios from 'axios';

export const DATASET_SUMMARY_DISPLAY = "DATASET_SUMMARY_DISPLAY";

const ROOT_URL = 'http://tyan-mn1.linkedin.biz:8081/inspector/v1/datasetSummary';

export function getDatasetSummaryDisplayInfo({platform, location}){
  var datasetKey = {
    platform: platform,
    location: location
  }
  const url = `${ROOT_URL}/display`;
  const request = axios.post(url, datasetKey);

  return {
    type: DATASET_SUMMARY_DISPLAY,
    payload: request
  };
}
