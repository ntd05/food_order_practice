import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CarIcon";
import CartContext from "../store/cart-context";
import classes from "./HeaderCartButton.module.css";
function HeaderCartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx; //de-structure

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // tra ve 1 ham trong useEffect ham duoc goi tu dong nhu 1 ham clear trong react
    return ()=> {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
