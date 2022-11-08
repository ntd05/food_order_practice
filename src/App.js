import { Fragment, useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import MealsContext from "./component/store/cart-context";
import CartProvider from "./component/store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
