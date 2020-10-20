function stringToType(str) {
  // Напиши свой код здесь

  if (str === "undefined") {
    return undefined;
  } else if (str === "null") {
    return null;
  } else if(str === '') {
    return ''
  } else if(typeof(Number(str)) === "number") 
  {
    if(!isNaN(str) ) {
      return Number(str)  
    }
    else if(str === "false" ) {
      return false
    } else if(str === "true") {
      return true
    }
    else {
      return str
    }
  } 
  
  
};

window.stringToType = stringToType;

export default stringToType;
