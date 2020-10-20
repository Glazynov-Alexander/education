function searchString(obj) {
  // Напиши свой код здесь
  let length = Object.keys(obj).length
  let str = "";
  let sumStr = (key) => (str += key + "=" + obj[key] + "&");
  let deleteObj = (key) => (delete obj[key]);

  if (length === 0) {
    return str;
  } 
    str = "?";
    Object.keys(obj).map((e) => {
      switch (typeof obj[e]) {
        case "number": {
           sumStr(e);
           break
        }
        case "boolean": {
           sumStr(e);
           break
        }
        case "string": {
          obj[e] === "" ? delete obj[e] : sumStr(e);
        }
        case "undefined": {
          deleteObj(e);
          break
        }
        case "object": {
          deleteObj(e);
          break
        }

        default:
          return str;
      }
    });
  
  return str.slice(-1) === "&" ? str.slice(0, -1) : str;
}

window.searchString = searchString;

export default searchString;
