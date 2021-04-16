export const objToParams = (obj) => new URLSearchParams(obj).toString();

export const promiseReturn = (urlData, resolve, reject) => {
  const { url, method = "get", params = {} } = urlData;
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (method !== "get") {
    config.body = JSON.stringify(params);
  }
  return fetch(url, config)
    .then((response) => {
      resolve(response.json());
    })
    .catch((error) => {
      reject(error.response);
    });
};
