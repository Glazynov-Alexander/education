/*
  Задача написать функцию baseExpect которая будет работать следующим образом
  Пример
  baseExpect(4).toBe(4) === true
  baseExpect(5).toBe(4) === false
  baseExpect(5).toBe.not(4) === true
  baseExpect(5).toBe.not(5) === false
  Примечание: Должно работать только с числами
 */

function baseExpect(a) {
  // Напиши свой код здесь
  let toBe = (b) => {
    a === b ? true : false;
  };
  toBe.not = (c) => {
    a !== c ? true : false;
  };
  return { toBe };
}

window.baseExpect = baseExpect;

export default baseExpect;
