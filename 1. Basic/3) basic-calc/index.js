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

    default : return 'null'
  }

}

window.basicCalc = basicCalc;

export default basicCalc;
