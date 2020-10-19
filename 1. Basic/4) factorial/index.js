function factorial(n) {
  // Напиши свой код здесь

  let s = 1;
  if (n > 10) {
    return `Ошибка ${n} > 10 `;
  }
  for (let i = 1; i <= n; i++) {
    s = s * i;
  }
  return s;
}

window.factorial = factorial;

export default factorial;
