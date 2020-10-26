/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */

class TokenService {
  // Напиши свой код здесь
  constructor() {
    this.token = null;
    this.changeToken = [];
  }

  subscribe(newToken) {
    this.changeToken.push(newToken);
  }

  setToken(token) {
    this.changeToken.forEach((elem) => {
      elem(token);
    });
    this.token = token;
  }

  removeToken() {
    this.changeToken.forEach((elem) => {
      elem(this.token);
    });
  }

  getToken() {
    return this.token;
  }
}

window.TokenService = TokenService;

export default TokenService;
