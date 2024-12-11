function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    const callNow = !timeout;
    timeout = setTimeout(() => {
      timeout = null;
    }, wait);
    callNow && func.apply(context, args);
  };
}
