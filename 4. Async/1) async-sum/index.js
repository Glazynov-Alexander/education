function asyncSum(a, b) {
  // Напиши свой код здесь
  let asd = new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof a && typeof b === "number" ? resolve(a + b) : reject("error");
    }, 800);
  });
  return asd;
}

window.asyncSum = asyncSum;

export default asyncSum;
