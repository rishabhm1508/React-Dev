const { createSlice } = require("@reduxjs/toolkit");

// Create Slice returns actions and reducer as object { actions:{}, reducer{}}

const cartSlice = createSlice({
  name: "Cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      // In Vanilla Redux, state was not mutable, so we had to create copy and return state.
      // const newState = [...state];
      // newState.push(action.payload);
      // return newState;

      // Now redux asks us to mutate the state and handles all internally the same thing as above using immer.js
      state.items.push(action.payload);
    },
    removeLastItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // setting the length to zero makes array blank as this reference is taken by RKT.
      state.items.length = 0;

      // or you can also do
      // return {items:[]};  // this will modify the original state, because RKT says either return state or mutate existing state. Imp stuff
    },
  },
});
export const { addItem, removeLastItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
