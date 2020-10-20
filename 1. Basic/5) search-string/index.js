function searchString(obj) {
  // Напиши свой код здесь
  let mass = Object.keys(obj);
  if(!mass.length) {
    return ''
  } 
  let v = mass.reduce((a, key) => {
    
    if (![undefined, null, ""].includes(obj[key])) {
       a.push(key + "=" + obj[key] )
    }
    return a ;
  }, []).join('&')
  return "?" + v
}

window.searchString = searchString;

export default searchString;
