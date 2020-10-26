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
    this.f = null;
    this.mass = [];
  }

  subscribe(newToken) {
    this.mass.push(newToken);
  }

  setToken(token) {
    this.mass.forEach((e) => {
      e(token);
    });
    this.f = token;
  }

  removeToken() {
    this.mass.forEach((e) => {
      e(this.f);
    });
  }

  getToken() {
    return this.f;
  }
}

window.TokenService = TokenService;

export default TokenService;
