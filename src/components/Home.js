import React from 'react';
import { WIZARD_FORM } from '../constants/index';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setInitSale,
  selectSalesData
} from '../features/profileSale/profileSaleSlice';

const Home = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(selectSalesData);
  console.log(data);
  const nextStep = () => {
    try {
      dispatch(setInitSale());
      navigate(WIZARD_FORM);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button aria-label="test" onClick={() => nextStep()}>
        Vender
      </button>
    </>
  );
};
export default Home;
