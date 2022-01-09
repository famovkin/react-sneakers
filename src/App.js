import React, { useEffect, useMemo, useState, useRef } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import { AuthContext } from "./contexts/AuthContext";
import { ItemsContext } from "./contexts/ItemsContext";
import { SetItemsContext } from "./contexts/SetItemsContext";
import { PopupsContext } from "./contexts/PopupsContext";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import { api } from "./utils/Api";
import { getPagesCount } from "./utils/pages";
import PopupWithImage from "./components/PopupWithImage";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import * as auth from "./utils/auth";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(16);
  const [page, setPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState("");
  const [isImagePopupOpened, setIsImagePopupOpened] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const lastElement = useRef();
  const observer = useRef();
  const history = useHistory();

  const openImagePopup = (card) => {
    setIsImagePopupOpened(true);
    setSelectedCard(card);
  };

  const closeImagePopup = () => {
    setIsImagePopupOpened(false);
    setSelectedSort({});
  };

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  useEffect(() => {
    setTotalPages(getPagesCount(100, limit));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    api
      .getInitialItems("items", limit, page)
      .then((response) => setItems([...items, ...response]))
      .finally(() =>
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
      );
  }, [page]);

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    var callback = function (entries, observer) {
      if (entries[0].isIntersecting && page < totalPages) {
        setPage(page + 1);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isLoading]);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      api.getInitialItems("items", limit, page),
      api.getInitialItems("cart"),
      api.getInitialItems("favorites"),
    ])
      .then(([itemsResponse, cartResponse, favoritesResponse]) => {
        setItems(itemsResponse);
        setCartItems(cartResponse);
        setFavoriteItems(favoritesResponse);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  const removeFromCartHandler = (deletedItem) => {
    api
      .removeItem(deletedItem.id, "cart")
      .then(() => {
        setCartItems((state) =>
          state.filter((item) => item.id !== deletedItem.id)
        );
      })
      .catch((error) => console.log(error));
  };

  const searchedCards = useMemo(() => {
    return items.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, items]);

  const cartOpenHandler = () => {
    setIsCartOpened(true);
  };

  const cartCloseHandler = () => {
    setIsCartOpened(false);
  };

  const onAddToFavorites = (clickedCard) => {
    const indexInFavorites = favoriteItems.findIndex(
      (card) => card.customId === clickedCard.customId
    );

    if (favoriteItems.find((card) => card.customId === clickedCard.customId)) {
      api
        .removeItem(favoriteItems[indexInFavorites].id, "favorites")
        .then(() => {
          setFavoriteItems((state) =>
            state.filter((card) => card.customId !== clickedCard.customId)
          );
        })
        .catch((error) => console.log(error));
    } else {
      api
        .addItem(clickedCard, "favorites")
        .then((response) => {
          setFavoriteItems((prev) => [...prev, response]);
        })
        .catch((error) => console.log(error));
    }
  };

  const onAddToCart = (clickedCard) => {
    const indexInCart = cartItems.findIndex(
      (card) => card.customId === clickedCard.customId
    );
    if (cartItems.find((card) => card.customId === clickedCard.customId)) {
      api
        .removeItem(cartItems[indexInCart].id, "cart")
        .then(() => {
          setCartItems((state) =>
            state.filter((card) => card.customId !== clickedCard.customId)
          );
        })
        .catch((error) => console.log(error));
    } else {
      api
        .addItem(clickedCard, "cart")
        .then((response) => {
          setCartItems((prev) => [...prev, response]);
        })
        .catch((error) => console.log(error));
    }
  };

  const sortItems = (sort) => {
    setSelectedSort(sort);
    {
      sort === "ascending" &&
        setItems([...items].sort((a, b) => a["price"] - b["price"]));
    }
    {
      sort === "descending" &&
        setItems([...items].sort((a, b) => b["price"] - a["price"]));
    }
  };

  function registerUser(password, email) {
    auth
      .register(password, email)
      .then((res) => {
        if (res) {
          history.push("/sign-in");
        } else {
          console.log("Что-то пошло не так");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function loginUser(password, email, setEmail, setPassword) {
    auth
      .authorize(password, email)
      .then((data) => {
        if (data.token) {
          setEmail("");
          setPassword("");
          setIsAuth(true);
          history.push("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <AuthContext.Provider value={{ isAuth: isAuth, setIsAuth: setIsAuth }}>
      <PopupsContext.Provider
        value={{
          isImagePopupOpened: isImagePopupOpened,
          setIsImagePopupOpened: setIsImagePopupOpened,
          openImagePopup: openImagePopup,
          closeImagePopup: closeImagePopup,
        }}
      >
        <ItemsContext.Provider
          value={{
            items: items,
            cartItems: cartItems,
            favoriteItems: favoriteItems,
          }}
        >
          <div className="page">
            <PopupWithImage
              isImagePopupOpened={isImagePopupOpened}
              selectedCard={selectedCard}
              closeImagePopup={closeImagePopup}
            />
            <SetItemsContext.Provider value={{ setCartItems: setCartItems }}>
              <Cart
                cartItems={cartItems}
                cartCloseHandler={cartCloseHandler}
                onRemoveItem={removeFromCartHandler}
                isCartOpened={isCartOpened}
              />
            </SetItemsContext.Provider>
            <Switch>
              <ProtectedRoute
                component={Home}
                isAuth={isAuth}
                path="/"
                exact
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                searchedCards={searchedCards}
                onAddToCart={onAddToCart}
                onAddToFavorites={onAddToFavorites}
                onOpenCart={cartOpenHandler}
                isLoading={isLoading}
                cardsCount={items.length}
                selectedSort={selectedSort}
                sortItems={sortItems}
              />
              <ProtectedRoute
                component={Favorites}
                isAuth={isAuth}
                path="/favorites"
                onAddToCart={onAddToCart}
                onAddToFavorites={onAddToFavorites}
                onOpenCart={cartOpenHandler}
              />
              <ProtectedRoute
                component={Orders}
                isAuth={isAuth}
                path="/orders"
                onOpenCart={cartOpenHandler}
              />
              <Route path="/sign-in">
                <Login onSubmit={loginUser} />
              </Route>
              <Route path="/sign-up">
                <Register onSubmit={registerUser} />
              </Route>
              <Redirect to="/sign-in" />
            </Switch>
            )<div ref={lastElement}></div>
          </div>
        </ItemsContext.Provider>
      </PopupsContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
