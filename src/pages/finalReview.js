import React from 'react';
import Resume from './resume';
import { useSelector } from 'react-redux';
import { ContainerReview, BackgroundImage } from '../assets/styles/style';
import Button from '../components/button';

const FinalReview = ({ getData, previous, next }) => {
  const image = useSelector(getData);
  return (
    <ContainerReview>
      <Resume />
      <BackgroundImage img={image}>
        <Button to={previous} label={'Previous'} />
        <Button to={next} label={'Finish'} />
      </BackgroundImage>
    </ContainerReview>
  );
};

export default FinalReview;
