import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    products: localStorage.getItem("products") ? 
    JSON.parse(localStorage.getItem("products")) : []
  },
  reducers: {
    addItem: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    removeItem: (state, action) => {
        state.products =  state.products.filter((item) => item.id !== action.payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
