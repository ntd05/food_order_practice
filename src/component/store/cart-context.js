import React from "react";
const CartContext = React.createContext({
    totalAmount: 0,
    items: [],
    addItem: (item) => {},
    remoteItem: (id) => {},
})

export default CartContext;