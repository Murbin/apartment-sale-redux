import React from 'react';
import {
  nextStep,
  stepCompleted
} from '../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ContainerMain, MarginTop } from '../assets/styles/style';

const PreviousNextStep = ({ prev, nxt, name, errors, value, validate }) => {
  const dispatch = useDispatch();

  const next = async () => {
    const activeStep = 'activeStep';
    if (!errors?.value && value) {
      dispatch(nextStep({ activeStep }));
      const stepsCompleted = 'stepsCompleted';
      dispatch(stepCompleted({ stepsCompleted, name }));
    }
  };

  return (
    <ContainerMain>
      <MarginTop>
        <Link
          style={{
            marginRight: 20,
            textDecoration: 'none',
            color: '#6085FC',
            fontWeight: 'bold'
          }}
          to={prev}
        >
          Previous
        </Link>
        <Link
          onClick={() => {
            validate(name);
            next();
          }}
          style={{
            textDecoration: 'none',
            color: '#6085FC',
            fontWeight: 'bold'
          }}
          to={errors[name] || !value ? '#' : nxt}
        >
          Next
        </Link>
      </MarginTop>
    </ContainerMain>
  );
};

export default PreviousNextStep;
