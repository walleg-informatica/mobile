const ajax = (url, options) => fetch(url, options)
  .then((x) => x.json())