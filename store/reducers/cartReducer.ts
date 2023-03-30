import { CartItemType, CartType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState: CartType = {
  items: [],
  tax: 0,
  shippingFee: 0,
  localStorageItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem: CartItemType = action.payload;

      const existingItem = state.items.find(
        (item) => item.product === newItem.product
      );

      if (!existingItem) {
        state.items.push({
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          amount: newItem.amount,
          product: newItem.product,
        });
        toast.success("Item Added Successfully");
      } else {
        toast.error("Item Already in Cart");
      }

      // LOCAL STORAGE
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const newItem: CartItemType = action.payload;

      const existingItem = state.items.find(
        (item) => item.product === newItem.product
      );
      const newState = state.items.filter(
        (item) => item.product != newItem.product
      );
      localStorage.setItem("cart", JSON.stringify(newState));
    },
    clearCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
