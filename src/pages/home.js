import React from 'react';
import { WIZARD_FORM } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setInitSale } from '../features/profileSale/profileSaleSlice';
import heroImage from '../assets/department2.jpg';

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
        alignItems: 'center',
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <button
        style={{
          background: '#6085FC',
          border: '2px solid white',
          color: 'white',
          fontSize: 27,
          fontWeight: 'bold',
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
