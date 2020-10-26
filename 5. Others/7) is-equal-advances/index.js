function isEqualAdvances(a, b) {
  // Напиши свой код здесь
  if (a === null || b === null) {
    if (a === null && b === null) {
      return true;
    }
    return false;
  } else if (a === undefined || b === undefined) {
    return false;
  }

  let aKeys = Object.keys(a);
  let bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  for (let i = 0; i < aKeys.length; i++) {
    if (bKeys.includes(aKeys[i]) === false) {
      return false;
    }
  }
  for (let j = 0; j < aKeys.length; j++) {
    if (typeof a[aKeys[j]] === "object") {
      return isEqualAdvances(a[aKeys[j]], b[aKeys[j]]);
    }
    return a[aKeys[j]] === b[bKeys[j]];
  }
  return true;
}

window.isEqualAdvances = isEqualAdvances;

export default isEqualAdvances;
