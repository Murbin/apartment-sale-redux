import React from 'react';
import { NAME_FORM, ADDRESS_FORM } from '../utils/constants';
import { useDebouncedCallback } from 'use-debounce';
import { useDispatch } from 'react-redux';
import {
  selectEmail,
  updateVal
} from '../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { Field } from 'formik';
import Resume from './resume';
import { validateEmail } from '../utils/helper';
import PreviousNextStep from '../components/nextPreviousStep';

const Email = ({ errors, validateField, handleChange }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(updateVal({ key, val }));
  }, 250);
  const email = useSelector(selectEmail);

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
            width: 320,
            textAlign: 'left',
            margin: '0px 0px 10px 0px'
          }}
        >
          Email
        </p>
        <Field
          type="email"
          name="email"
          placeholder="adam@gmail.com"
          onChange={(val) => {
            handleChange(val);
            updateValFromStore('email', val);
          }}
          validate={validateEmail}
          style={{
            paddingLeft: 10,
            height: 40,
            fontSize: 20,
            width: 300,
            borderRadius: 4,
            borderColor: 'black'
          }}
          values={email}
        />
        {errors?.email && (
          <p style={{ margin: 0, color: 'red' }}>{errors?.email}</p>
        )}
        <PreviousNextStep
          prev={NAME_FORM}
          nxt={ADDRESS_FORM}
          name={'email'}
          errors={errors}
          value={email}
          validate={validateField}
        />
      </div>
      <Resume />
    </div>
  );
};

export default Email;
