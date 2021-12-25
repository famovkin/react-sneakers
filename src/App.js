import React, { useEffect, useMemo, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { api } from "./utils/Api";
import { ItemsContext } from "./contexts/ItemsContext";
import { SetItemsContext } from "./contexts/SetItemsContext";
import { AuthContext } from "./contexts/AuthContext";
import Login from "./pages/Login";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  useEffect(() => {
    const getInitialData = async () => {
      setIsLoading(true);
      const itemsResponse = await api
        .getInitialItems("items")
        .then((response) => {
          return response;
        })
        .catch((error) => console.log(error));

      const cartResponse = await api
        .getInitialItems("cart")
        .then((response) => {
          return response;
        })
        .catch((error) => console.log(error));

      const favoritesResponse = await api
        .getInitialItems("favorites")
        .then((response) => {
          return response;
        })
        .catch((error) => console.log(error));

      setItems(itemsResponse);
      setCartItems(cartResponse);
      setFavoriteItems(favoritesResponse);
      setIsLoading(false);
    };

    getInitialData();
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

  return (
    <AuthContext.Provider value={{ isAuth: isAuth, setIsAuth: setIsAuth }}>
      <ItemsContext.Provider
        value={{
          items: items,
          cartItems: cartItems,
          favoriteItems: favoriteItems,
        }}
      >
        <div className="page">
          {isCartOpened && (
            <SetItemsContext.Provider value={{ setCartItems: setCartItems }}>
              <Cart
                cartItems={cartItems}
                cartCloseHandler={cartCloseHandler}
                onRemoveItem={removeFromCartHandler}
              />
            </SetItemsContext.Provider>
          )}
          {isAuth ? (
            <Switch>
              <Route path="/" exact>
                <div className="page__wrapper">
                  <Header onOpenCart={cartOpenHandler} />
                  <Home
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    searchedCards={searchedCards}
                    onAddToCart={onAddToCart}
                    onAddToFavorites={onAddToFavorites}
                    isLoading={isLoading}
                  />
                </div>
              </Route>
              <Route path="/favorites" exact>
                <div className="page__wrapper">
                  <Header onOpenCart={cartOpenHandler} />
                  <Favorites
                    onAddToCart={onAddToCart}
                    onAddToFavorites={onAddToFavorites}
                  />
                </div>
              </Route>
              <Redirect to="/" />
            </Switch>
          ) : (
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Redirect to="/login" />
            </Switch>
          )}
        </div>
      </ItemsContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
