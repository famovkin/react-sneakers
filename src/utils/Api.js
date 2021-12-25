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
    return fetch(`${this._baseUrl}${endpoint}`).then((res) =>
      this._checkServerResponse(res)
    );
  }

  addItem(newItem, endpoint) {
    return fetch(`${this._baseUrl}${endpoint}`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        customId: newItem.customId,
        title: newItem.title,
        price: newItem.price,
        imgUrl: newItem.imgUrl,
        isOnFav: newItem.isOnFav,
        isOnCart: newItem.isOnCart,
      }),
    }).then((res) => this._checkServerResponse(res));
  }

  removeItem(itemId, endpoint) {
    return fetch(`${this._baseUrl}${endpoint}/${itemId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkServerResponse(res));
  }

  addOrder(order) {
    return fetch(`${this._baseUrl}orders`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ items: order }),
    }).then((res) => this._checkServerResponse(res));
  }
}

export const api = new Api({
  baseUrl: "https://61c25977de977000179b5481.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});
