import React from 'react';
import { NAME_FORM, ADDRESS_FORM } from '../../constants/index';
import { useDebouncedCallback } from 'use-debounce';
import { updateVal } from '../../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { selectEmail } from '../../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import Resume from './resume';

const Email = ({ errors, touched, handleChange }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(updateVal({ key, val }));
  }, 250);
  const email = useSelector(selectEmail);
  console.log('email', email);
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
        <Field
          type="email"
          name="email"
          placeholder="adam@gmail.com"
          onChange={(val) => {
            handleChange(val);
            updateValFromStore('email', val);
          }}
          style={{
            borderColor: errors?.email && touched.email ? 'red' : 'inherit',
            marginBottom: 20
          }}
          values={email}
        />
        <br />
        <Link to={NAME_FORM}>Previous</Link>
        <br />
        <Link to={ADDRESS_FORM}>Next</Link>
      </div>
      <div>
        <Resume />
      </div>
    </div>
  );
};

export default Email;
