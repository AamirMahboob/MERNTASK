// // store/productsSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   products: [
//     { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
//     { id: 2, name: 'Smartphone', price: 699.99, category: 'Electronics' },
//     { id: 3, name: 'Headphones', price: 149.99, category: 'Accessories' },
//   ],
// };

// export const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     addProduct: (state, action) => {
//       state.products.push(action.payload);
//     },
//     updateProduct: (state, action) => {
//       const index = state.products.findIndex(p => p.id === action.payload.id);
//       if (index !== -1) {
//         state.products[index] = action.payload;
//       }
//     },
//     deleteProduct: (state, action) => {
//       state.products = state.products.filter(p => p.id !== action.payload);
//     },
//   },
// });

// export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions;
// export default productsSlice.reducer;


// store/productsSlice.js
// store/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Smartphone', price: 699.99, category: 'Electronics' },
    { id: 3, name: 'Headphones', price: 149.99, category: 'Accessories' },
  ],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push({
        id: Date.now(), // Ensure unique ID
        ...action.payload
      });
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      // Convert both IDs to numbers to ensure type matching
      const productId = Number(action.payload);
      state.products = state.products.filter(p => Number(p.id) !== productId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase('persist/REHYDRATE', (state, action) => {
      if (action.payload?.products) {
        return { ...state, ...action.payload.products };
      }
      return state;
    });
  },
});

export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;