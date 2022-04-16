import React from 'react';
import { WIZARD_FORM } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setInitSale } from '../features/profileSale/profileSaleSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
