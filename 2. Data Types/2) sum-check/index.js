function sumCheck(a, b) {
  // Напиши свой код здесь
  try {
    if (typeof b === "number" && typeof a === "number") {
      return a + b;
    }
    throw typeof a !== typeof b;
  } catch (err) {
    throw "Wrong arguments type!";
  }
}

window.sumCheck = sumCheck;

export default sumCheck;
