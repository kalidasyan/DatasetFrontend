import axios from 'axios';

export const STATISTICS_DISPLAY = "STATISTICS_DISPLAY";

const ROOT_URL = 'http://localhost:8081/inspector/v1/datasetSummary';

export function getDatasetSummaryDisplayInfo({platform, location}){
  var datasetKey = {
    platform: platform,
    location: location
  }
  const url = `${ROOT_URL}/display`;
  const request = axios.post(url, datasetKey);

  return {
    type: STATISTICS_DISPLAY,
    payload: request
  };
}
