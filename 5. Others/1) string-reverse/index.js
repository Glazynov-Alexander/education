/*
  Задача:
  Добавить функции метод reverse, который будет переворачивать строку на оборот
  Примеры:
  'test'.reverse() === 'tset';
  'bob'.reverse() === 'bob';
  'abc123'.reverse() === '321cba';
 */
function reverse () {
  return this.split("").reverse().join("")
}
String.prototype.reverse = reverse 