import React from 'react';
import { ZONE_FORM, PRICE_FORM } from '../../constants/index';
import { useDebouncedCallback } from 'use-debounce';
import {
  updateValSelect,
  selectParking
} from '../../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import { options } from '../../constants/helper';
import Resume from './resume';

const Parking = ({ errors, touched, handleChange }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val, child) => {
    dispatch(updateValSelect({ key, val, child }));
  }, 250);
  const parking = useSelector(selectParking);

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
        <p>Has Parking?</p>
        <Field
          as="select"
          name="has"
          onChange={(val) => {
            handleChange(val);
            updateValFromStore('parking', val, 'has');
          }}
          style={{
            borderColor: errors?.floor && touched.floor ? 'red' : 'inherit',
            marginBottom: 20
          }}
          values={parking.has}
        >
          {options.map((e, idx) => (
            <option key={idx}>{e}</option>
          ))}
        </Field>

        {parking?.has === 'Si' && (
          <>
            <p>Covered Parking?</p>
            <Field
              as="select"
              name="covered"
              onChange={(val) => {
                handleChange(val);
                updateValFromStore('parking', val, 'covered');
              }}
              style={{
                borderColor:
                  errors?.parking && touched.parking ? 'red' : 'inherit',
                marginBottom: 20
              }}
              values={parking.covered}
            >
              {options.map((e, idx) => (
                <option key={idx}>{e}</option>
              ))}
            </Field>
          </>
        )}
        <br />
        <Link to={ZONE_FORM}>Previous</Link>
        <br />
        <Link to={PRICE_FORM}>Next</Link>
      </div>
      <div>
        <Resume />
      </div>
    </div>
  );
};

export default Parking;
