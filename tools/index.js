import {endpoint} from '../api/index'
export const currentDay = parseInt(
  (new Date() - new Date(2020, 1, 17)) / (1000 * 60 * 60 * 24)
);

export const percentOf = (x, y, sig = 6) => {
  let result = (x / y) * 100;
  return result.toFixed(sig);
};

export const isMobileView = () => window.innerWidth < 500;

export const autoHiding = (hidden, duration = 500) => {
  if (hidden) {
    setTimeout(() => {
      hidden = !hidden;
    }, duration);
  }
};
export const msgUI = msgType => {
  switch (msgType) {
    case "error":
      return "alert msg-error";
    case "info":
      return "info msg-info";
    case "progress":
      return "loading mdi-spin msg-progress"
  }
  return "info msg-info";
};

export const resolveModifierClass = (count, result) => {
  if(count == 1 ) { // representing the second index whihc the recovered field of the json data.
    return result < 0 ? "higher" : "lower"
  }
  return result < 0 ? "lower" : "higher"
}

export const transformPayload = (payload) => {
    console.log(payload)
    let country = {
        total : payload.confirmed.value,
        recovered : payload.recovered.value,
        active : payload.active.value,
        deaths : payload.deaths.value
    }
    return country
}

export const getBaseCountry = () => {
  return fetch(endpoint)
  .then(res => res.json())
  .then(res => res)
  .catch(err => false)
} 

export const daysSinceOutbreak = () => {
  let startDate = new Date(2019,11,0)
  let today = new Date()
  return parseInt((today - startDate)/(30*24*60*60*1000))
}

export const daysSinceOutbreakInNigeria = () => {
  let startDate = new Date(2020,1,17)
  let today = new Date()
  return parseInt((today - startDate)/(24*60*60*1000))
}

export const generateMsg = (type) => {
    switch (type) {
        case "error":
            return {type:"error", text:"Error loading data !"}
        case "progress":
            return {type:"progress", text:"Fetching Data"}
    }
} 