export const mediaQuery = (minWidth) => {
  return window.matchMedia(`(min-width: ${minWidth})`);
};

export const windowOffSetY = () => {
  return window.pageYOffset || document.documentElement.scrollTop;
};

export const backToPreviousPage = () => {
  return window.history.go(-1);
};
