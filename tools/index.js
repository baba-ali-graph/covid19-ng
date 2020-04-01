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
export const iconSelect = msgType => {
  switch (msgType) {
    case "error":
      return "alert msg-error";
    case "info":
      return "info msg-info";
  }
  return "info msg-info";
};
