import React from 'react';
import { WIZARD_FORM } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setInitSale } from '../features/profileSale/profileSaleSlice';
import heroImage from '../assets/department2.jpg';
import { Hero, Button } from '../assets/styles/style';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nextStep = () => {
    dispatch(setInitSale());
    navigate(WIZARD_FORM);
  };

  return (
    <Hero img={heroImage}>
      <Button aria-label="test" onClick={() => nextStep()}>
        Vender
      </Button>
    </Hero>
  );
};
export default Home;
