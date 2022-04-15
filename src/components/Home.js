import React from 'react';
import { WIZARD_FORM } from '../constants/index';
import {
  useDispatch
  // useSelector
} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setInitSale
  // selectSalesData
} from '../features/profileSale/profileSaleSlice';

const Home = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  // const data = useSelector(selectSalesData);
  const nextStep = () => {
    try {
      dispatch(setInitSale());
      navigate(WIZARD_FORM);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        background: 'white',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <button
        style={{
          background: '#6085FC',
          border: 0,
          color: 'white',
          fontSize: 27,

          borderRadius: 100,
          width: 300,
          cursor: 'pointer',
          fontFamily: 'monospace'
        }}
        aria-label="test"
        onClick={() => nextStep()}
      >
        Vender
      </button>
    </div>
  );
};
export default Home;
