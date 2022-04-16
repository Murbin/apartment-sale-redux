import { configureStore } from '@reduxjs/toolkit';
import profileSaleReducer from '../features/profileSale/profileSaleSlice';

export const store = configureStore({
  reducer: {
    salesData: profileSaleReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['salesData/updateVal', 'salesData/updateValSelect'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['salesData.username'],
        // // Ignore these paths in the state
        ignoredPaths: ['salesData.username']
      }
    })
});
