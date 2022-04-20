import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/department2.jpg';
import { Hero, Button } from '../assets/styles/style';

const Home = ({ placeholder, next }) => {
  const navigate = useNavigate();
  const nextStep = () => navigate(next);

  return (
    <Hero img={heroImage}>
      <Button aria-label="test" onClick={() => nextStep()}>
        {placeholder}
      </Button>
    </Hero>
  );
};
export default Home;
