function fullSum(...args) {
  // Напиши свой код здесь

  let sum = 0;
  if (args.length === 0) {
    return 0;
  }
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      throw "Wrong Argument Type";
    }
    sum += args[i];
  }
  return sum;
}

window.fullSum = fullSum;

export default fullSum;
