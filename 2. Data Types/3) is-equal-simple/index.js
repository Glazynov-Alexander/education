function isEqual(a, b) {
  // Напиши свой код здесь

  if (a === null) {
    return false;
  } else {
    let ad = Object.keys(a);
    let bd = Object.keys(b);
    for (let i = 0; i <= ad.length; i++) {
      if (ad[i] === bd[i]) {
        for (let j = 0; j <= ad.length; j++) {
          if (typeof a[ad[j]] !== typeof b[bd[j]]) {
            return false;
          }
        }
        return true;
      }
      return false;
    }
  }
}

window.isEqual = isEqual;

export default isEqual;
