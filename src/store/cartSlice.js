const { createSlice } = require("@reduxjs/toolkit");

// Create Slice returns actions and reducer as object { actions:{}, reducers{}}

const cartSlice = createSlice({
  name: "Cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeLastItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // setting the lenght to zero makes array null
      state.items.length = 0;
    },
  },
});
export const { addItem, removeLastItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
