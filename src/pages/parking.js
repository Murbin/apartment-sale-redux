import React from 'react';
import { ZONE_FORM, PRICE_FORM } from '../utils/constants';
import { useDebouncedCallback } from 'use-debounce';
import {
  updateValSelect,
  selectParking
} from '../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Field } from 'formik';
import { options, validateEmpty } from '../utils/helper';
import Resume from './resume';
import PreviousNextStep from '../components/nextPreviousStep';

const Parking = ({ errors, touched, handleChange, validateField }) => {
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
          Has Parking ?
        </p>
        <Field
          as="select"
          name="has"
          onChange={(val) => {
            handleChange(val);
            updateValFromStore('parking', val, 'has');
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
          values={parking?.has}
        >
          <option disabled={parking?.has ? true : false} value={undefined}>
            Select
          </option>
          {options.map((e, idx) => (
            <option key={idx}>{e}</option>
          ))}
        </Field>
        {errors?.has && (
          <p style={{ margin: 0, color: 'red' }}>{errors?.has}</p>
        )}
        {parking?.has === 'Yes' && (
          <>
            <p
              style={{
                fontSize: 22,
                margin: '13px 0px 10px 0px'
              }}
            >
              It is Covered ?
            </p>
            <Field
              as="select"
              name="covered"
              onChange={(val) => {
                handleChange(val);
                updateValFromStore('parking', val, 'covered');
              }}
              style={{
                paddingLeft: 10,
                height: 40,
                fontSize: 20,
                width: 100,
                borderRadius: 4,
                borderColor: errors?.email && touched.email ? 'red' : 'black',
                marginBottom: 40
              }}
              values={parking.covered}
            >
              {options.map((e, idx) => (
                <option key={idx}>{e}</option>
              ))}
            </Field>
          </>
        )}
        <PreviousNextStep
          prev={ZONE_FORM}
          nxt={PRICE_FORM}
          name={'has'}
          errors={errors}
          value={parking?.has}
          validate={validateField}
        />
      </div>
      <Resume />
    </div>
  );
};

export default Parking;
