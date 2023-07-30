import { createSlice } from "@reduxjs/toolkit";

const pcBuilderSlice = createSlice({
  name: "pcBuilderProduct",
  initialState: {
    products: [],
  },
  reducers: {
    addToPcBuilder: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addToPcBuilder } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
