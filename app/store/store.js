// import { configureStore } from '@reduxjs/toolkit';
// import usersReducer from './usersSlice';
// import productsReducer from './productsSlice';

// export const store = configureStore({
//   reducer: {
//     users: usersReducer,
//     products: productsReducer,
//   },
// });


// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import usersReducer from './usersSlice';
import productsReducer from './productsSlice';

// Persist config for each reducer
const usersPersistConfig = {
  key: 'users',
  storage,
};

const productsPersistConfig = {
  key: 'products',
  storage,
};

export const store = configureStore({
  reducer: {
    users: persistReducer(usersPersistConfig, usersReducer),
    products: persistReducer(productsPersistConfig, productsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);