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
    Object.keys(obj).forEach((e) => {
      switch (typeof obj[e]) {
        case "number" : {
          return sumStr(e)  ;
       }
        case "boolean" : {
          return sumStr(e);
          
        }
        case  "string" || "undefined" && "object"   : {
          obj[e] === ''  ? deleteObj(e) : sumStr(e) 
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
