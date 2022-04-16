import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import {
  selectHasElevator,
  updateVal
} from '../features/profileSale/profileSaleSlice';
import { PRICE_FORM, RESUME } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Field } from 'formik';
import { options, validateEmpty } from '../utils/helper';
import { Link } from 'react-router-dom';
import Resume from './resume';

const HasElevator = ({ errors, validateField, handleChange }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val, child) => {
    dispatch(updateVal({ key, val, child }));
  }, 250);
  const hasElevator = useSelector(selectHasElevator);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          height: '100vh',
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <p
          style={{
            fontSize: 22,
            margin: '0px 0px 10px 0px'
          }}
        >
          Has an elevator?
        </p>
        <Field
          as="select"
          name="hasElevator"
          onChange={(val) => {
            console.log('val', val);
            handleChange(val);
            updateValFromStore('hasElevator', val);
          }}
          validate={validateEmpty}
          style={{
            paddingLeft: 10,
            height: 40,
            fontSize: 20,
            width: 100,
            borderRadius: 4,
            borderColor: 'black'
          }}
          values={hasElevator}
        >
          <option disabled={hasElevator ? true : false} value={undefined}>
            Select
          </option>
          {options.map((e, idx) => (
            <option key={idx}>{e}</option>
          ))}
        </Field>
        {errors?.hasElevator && (
          <p style={{ margin: 0, color: 'red' }}>{errors?.hasElevator}</p>
        )}
        <div style={{ marginTop: 20 }}>
          {' '}
          <Link
            style={{
              marginRight: 20,
              textDecoration: 'none',
              color: '#6085FC',
              fontWeight: 'bold'
            }}
            to={PRICE_FORM}
          >
            Previous
          </Link>
          <Link
            onClick={() => {
              validateField('hasElevator');
            }}
            style={{
              textDecoration: 'none',
              color: '#6085FC',
              fontWeight: 'bold'
            }}
            to={errors?.hasElevator || !hasElevator ? '#' : RESUME}
          >
            Next
          </Link>
        </div>
      </div>
      <div
        style={{
          background: '#6085FC',
          height: '100vh',
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Resume />
      </div>
    </div>
  );
};

export default HasElevator;