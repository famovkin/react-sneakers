export const BASE_URL = "https://auth.nomoreparties.co";

const checkServerResponse = (res) => {
  if (!res.ok) {
    return res.text().then((text) => {
      const errorObj = JSON.parse(text);
      throw new Error(errorObj.message || errorObj.error);
    });
  } else {
    return res.json();
  }
};

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  }).then((res) => checkServerResponse(res));
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, email: email }),
  })
    .then((res) => checkServerResponse(res))
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data;
      }
    });
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkServerResponse(res));
};
