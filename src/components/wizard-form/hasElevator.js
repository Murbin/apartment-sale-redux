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
          Has Elevator?
        </p>
        <Field
          as="select"
          name="hasElevator"
          onChange={(val) => {
            console.log('val', val);
            handleChange(val);
            updateValFromStore('hasElevator', val);
          }}
          style={{
            paddingLeft: 10,
            height: 40,
            fontSize: 20,
            width: 60,
            borderRadius: 4,
            borderColor: errors?.email && touched.email ? 'red' : 'black',
            marginBottom: 40
          }}
          values={hasElevator}
        >
          {options.map((e, idx) => (
            <option key={idx}>{e}</option>
          ))}
        </Field>
        <div>
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
            style={{
              textDecoration: 'none',
              color: '#6085FC',
              fontWeight: 'bold'
            }}
            to={RESUME}
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
