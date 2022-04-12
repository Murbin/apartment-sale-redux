import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  saleStarted: false,
  username: '',
  email: '',
  address: '',
  floor: 0,
  zone: {
    bbq: false,
    comunal: false,
    entertainment: false
  },
  parking: {
    has: 'No',
    covered: 'No'
  },
  price: 0,
  image: null,
  hasElevator: 'No'
};

export const salesDataSlice = createSlice({
  name: 'salesData',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setInitSale: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.saleStarted = true;
    },
    updateVal(state, { payload: { key, val, child } }) {
      if (child) {
        state[key][child] = val.target.checked;
      } else {
        state[key] = val.target.value;
      }
    },
    updateValSelect(state, { payload: { key, val, child } }) {
      console.log();
      state[key][child] = val.target.value;
    }
  }
});

export const { setInitSale, updateVal, updateValSelect } =
  salesDataSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSalesData = (state) => state.salesData;
export const selectName = (state) => state.salesData.username;
export const selectEmail = (state) => state.salesData.email;
export const selectAddress = (state) => state.salesData.address;
export const selectFloor = (state) => state.salesData.floor;
export const selectZone = (state) => state.salesData.zone;
export const selectParking = (state) => state.salesData.parking;
export const selectPrice = (state) => state.salesData.price;
export const selectHasElevator = (state) => state.salesData.hasElevator;
export const selectResume = (state) => state.salesData;

export default salesDataSlice.reducer;
