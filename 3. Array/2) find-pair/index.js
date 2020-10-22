function findPair(arr) {
  // Напиши свой код здесь

  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[j];
      }
    }
  }
  return null;
}

window.findPair = findPair;

export default findPair;
