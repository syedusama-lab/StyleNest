import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
  searchTerm:"",
  filterData:[]
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSearhTerm(state,action){
      state.searchTerm = action.payload
      state.filterData = state.products.filter(prod=>
        prod.name?.toLowerCase().includes(state.searchTerm?.toLowerCase())
      )
    }
  },
});

export const { setProducts, setSearhTerm } = productSlice.actions;
export default productSlice.reducer;
