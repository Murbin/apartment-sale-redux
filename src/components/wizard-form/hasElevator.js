import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import {
  selectHasElevator,
  updateVal
} from '../../features/profileSale/profileSaleSlice';
import { PRICE_FORM, RESUME } from '../../constants/index';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Field } from 'formik';
import { options } from '../../constants/helper';
import { Link } from 'react-router-dom';
import Resume from './resume';

const HasElevator = ({ errors, touched, handleChange }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val, child) => {
    dispatch(updateVal({ key, val, child }));
  }, 250);
  const hasElevator = useSelector(selectHasElevator);
  console.log('hasElevator', hasElevator);
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
        <p>Has Elevator?</p>
        <Field
          as="select"
          name="hasElevator"
          onChange={(val) => {
            console.log('val', val);
            handleChange(val);
            updateValFromStore('hasElevator', val);
          }}
          style={{
            borderColor:
              errors?.hasElevator && touched.hasElevator ? 'red' : 'inherit',
            marginBottom: 20
          }}
          values={hasElevator}
        >
          {options.map((e, idx) => (
            <option key={idx}>{e}</option>
          ))}
        </Field>
        <br />
        <Link to={PRICE_FORM}>Previous</Link>
        <br />
        <Link to={RESUME}>Next</Link>
      </div>
      <div>
        <Resume />
      </div>
    </div>
  );
};

export default HasElevator;
