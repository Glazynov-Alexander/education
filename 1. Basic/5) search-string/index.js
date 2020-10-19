function searchString(obj) {
  // Напиши свой код здесь

  let str = `?`;

  Object.keys(obj).map((e) => {

    if (typeof obj[e] === "number") {
      obj[e] === 0 ? str += e + "=" + obj[e] :
      str += `` + e + "=" + obj[e] + "&";
    } 
    else if (obj[e] === "") {
       delete obj[e];
    }
    
    else if (typeof obj[e] === "string") {
      str += e + "=" + obj[e] ;
    } 
    
    else if (obj[e] === "null") {
      str += e + "=" + obj[e] + "&";
    } 
    
    else if (obj[e] === "undefined") {
      str += e + "=" + obj[e] + "&";
    } 
    else if (obj[e] === false) {
      str +="&" + e + "=" + obj[e] + "&";
    } 
    
  });
  return Object.keys(obj).length == 0 ? '' : str;
}

window.searchString = searchString;

export default searchString;
