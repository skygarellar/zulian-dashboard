const CHECK_STATE_TIMEOUT = 5000;

const doFetch = async (url) => (await fetch(url)).json();

const stateListener = async (ip) => {
  setInterval(() => getState(ip), CHECK_STATE_TIMEOUT);
};

const getState = async (ip) => {
  try {
    return await doFetch(`http://${ip}:20000/osc/state`);
  } catch (err) {}
};

const preview = async (ip) => {
  try {
    return await doFetch(`rtmp://${ip}:1935/live/preview`);
  } catch (err) {}
};

const cameraService = {
  preview,
  getState,
  stateListener
};

export default cameraService;
