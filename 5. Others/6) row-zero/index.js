function rowZero(str) {
  // Напиши свой код здесь
  let mass = str.split("1");
  mass.sort();
  return mass[mass.length - 1].length;
}

window.rowZero = rowZero;

export default rowZero;
