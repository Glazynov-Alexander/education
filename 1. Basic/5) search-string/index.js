function searchString(obj) {
  // Напиши свой код здесь

let str = ``
for(let s in obj ) {
  str += s + obj[s] + '&' 
}  
  
  return str;
}

window.searchString = searchString;


export default searchString;
