function basicCalc(operation, a, b) {
  // Напиши свой код здесь

  switch(operation) {
    case '+': {
      return a + b
    } 
    case '-': {
      return a - b
    }

    case '*' :{
      return a * b
    } 
    case '/': {
      return a / b
    }

    default : return console.log('null');
  }

}

window.basicCalc = basicCalc;

export default basicCalc;
