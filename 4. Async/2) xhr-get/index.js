function xhrGet(url) {
  // Напиши свой код здесь

  return new Promise(async (resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = "json";

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      }
      reject(xhr.response);
    };

    xhr.send();
  });
}

window.xhrGet = xhrGet;

export default xhrGet;
