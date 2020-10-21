function stringToType(str ) {
  // Напиши свой код здесь
  switch (str) {
    case "null": {
      return null;
    }
    case "undefined": {
      return undefined;
    }
    case "": {
      return str;
    }
    case "true": {
      return true;
    }
    case "false": {
      return false;
    }
    case str: {
      if (!isNaN(str)) {
        return Number(str);
      }return str
       
    }

    default:
      return str;
  }
}

window.stringToType = stringToType;

export default stringToType;
