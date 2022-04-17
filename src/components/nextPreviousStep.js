import React from 'react';
import { nextStep } from '../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const PreviousNextStep = ({ prev, nxt, name, errors, value, validate }) => {
  const dispatch = useDispatch();

  const next = async () => {
    const activeStep = 'activeStep';
    if (!errors?.value && value) {
      dispatch(nextStep({ activeStep }));
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <div style={{ marginTop: 20 }}>
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
      </div>
    </div>
  );
};

export default PreviousNextStep;
