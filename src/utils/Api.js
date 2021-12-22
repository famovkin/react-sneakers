class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так. Обратитесь к разработчику`);
  }

  getInitialItems(endpoint) {
    return fetch(`${this._baseUrl}${endpoint}`)
      .then((res) => this._checkServerResponse(res))
      .then((res) => {
        return res;
      });
  }

  addItemToCart(newItem) {
    return fetch(`${this._baseUrl}cart`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        id: newItem.id,
        title: newItem.title,
        price: newItem.price,
        imgUrl: newItem.imgUrl,
      }),
    })
      .then((res) => this._checkServerResponse(res))
      .then((res) => {
        return res;
      });
  }

  removeItemFromCart(itemId) {
    return fetch(`${this._baseUrl}cart/${itemId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkServerResponse(res));
  }
}

export const api = new Api({
  baseUrl: "https://61c25977de977000179b5481.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});
