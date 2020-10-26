/*
  Задача
  Написать стак стек в котором есть следующие методы
  push - добавляет элимент в конец стека
  pop - возвращяет удаляет последний элемент из стека, если стек уже пустой генерирует ошибку с ссобщением: "Stack is empty!"
  isEmpty - проверяет является ли стек пустым
  print - выводит стек в формате
  И имеет свойство:
  size - количество элиментов в списке
  Пример кода
  const stack = new Stack();
  stack.push(1);
  stack.print() // [1]
  stack.pop().isEmpty(); // true
  stack.pop(); // error
  stack.push(2).push(3).pop()
  stack.push(10).push(14).pop().print() // "[2, 10]"
 */

class Stack {
  // Напиши свой код здесь
  constructor(){
    this.mass = []
    this.size = this.mass.length
  }
  push  (y)  {
    
    if(this.mass.length === 0 ) {
      this.mass.push(y)
      this.size += 1
      return this
    }
    this.mass.push(" " +y)
    this.size += 1
    return this
  }
  pop ()  {
    if(this.mass.length > 0 ) {
      this.mass.pop()
      this.size -= 1
      return this
    } throw "error"
  }
  isEmpty (y) {
    return this.mass.length === 0 
  }
  print  (y)  {
    return`[${this.mass}]`
  }     
}

window.Stack = Stack;

export default Stack;
