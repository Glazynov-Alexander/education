function sumCheck(a, b) {
  // Напиши свой код здесь

  if (typeof b === "number" && typeof a === "number") {
    return a + b;
  }

  throw "Wrong arguments type!";
}
window.sumCheck = sumCheck;

export default sumCheck;
