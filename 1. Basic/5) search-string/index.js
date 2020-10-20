function searchString(obj) {
  // Напиши свой код здесь
  let length = Object.keys(obj).length;
  let str = "";
  let sumStr = (key) => (str += key + "=" + obj[key] + "&");
  let deleteObj = (key) => delete obj[key];

  if(!Object.keys(obj).length) {
    return ''
  } 
  let v = Object.keys(obj).reduce((a, key) => {
    
    if (![undefined, null, ""].includes(obj[key])) {
       a.push(key + "=" + obj[key] )
    }
    return a ;
  }, []).join('&')
  return "?" + v
}

window.searchString = searchString;

export default searchString;
