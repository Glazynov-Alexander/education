function factorial(n) {
  // Напиши свой код здесь

  if (n > 10) {
    return `Ошибка ${n} > 10 `;
  } else {
    for (let i = 0; i <= n; i++) {
      let s = 1;
      for (let j = 1; j <= n; j++) {
        s = s * j ;
      }
      return s;
    }
  }
}

window.factorial = factorial;

export default factorial;
