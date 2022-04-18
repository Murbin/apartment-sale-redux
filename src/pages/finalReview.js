import React from 'react';
import Resume from './resume';
import { useSelector } from 'react-redux';
import { selectImage } from '../features/profileSale/profileSaleSlice';
import { ContainerReview, BackgroundImage } from '../assets/styles/style';
import Button from '../components/button';

const FinalReview = () => {
  const image = useSelector(selectImage);
  return (
    <ContainerReview>
      <Resume />
      <BackgroundImage img={image}>
        <Button to={'/'}>Next</Button>
      </BackgroundImage>
    </ContainerReview>
  );
};

export default FinalReview;
