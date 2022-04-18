import { configureStore } from '@reduxjs/toolkit';
import profileSaleReducer from '../features/profileSale/profileSaleSlice';

export const store = configureStore({
  reducer: {
    salesData: profileSaleReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'salesData/updateVal',
          'salesData/updateValSelect',
          'salesData/updateImage'
        ]
      }
    })
});
