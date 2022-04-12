import React from 'react';
import { HAS_ELEVATOR_FORM, PARKING_FORM } from '../../constants/index';
import { useDebouncedCallback } from 'use-debounce';
import { updateVal } from '../../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { selectPrice } from '../../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import Resume from './resume';

const Price = ({ errors, touched, handleChange }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(updateVal({ key, val }));
  }, 250);
  const price = useSelector(selectPrice);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <div>
        <p>Price</p>
        <Field
          type="number"
          name="price"
          placeholder="1.000.000 USD"
          onChange={(val) => {
            handleChange(val);
            updateValFromStore('price', val);
          }}
          style={{
            borderColor: errors?.price && touched.price ? 'red' : 'inherit',
            marginBottom: 20
          }}
          values={price}
        />
        <br />
        <Link to={PARKING_FORM}>Previous</Link>
        <br />
        <Link to={HAS_ELEVATOR_FORM}>Next</Link>
      </div>
      <div>
        <Resume />
      </div>
    </div>
  );
};

export default Price;
