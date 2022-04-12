import React from 'react';
import { EMAIL_FORM } from '../../constants/index';
import { useDebouncedCallback } from 'use-debounce';
import { updateVal } from '../../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { selectName } from '../../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import Resume from './resume';

const Name = ({ errors, touched, handleChange }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(updateVal({ key, val }));
  }, 250);
  const username = useSelector(selectName);

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
          type="text"
          name="username"
          placeholder="Adams Smith"
          onChange={(val) => {
            handleChange(val);
            updateValFromStore('username', val);
          }}
          style={{
            borderColor:
              errors?.username && touched.username ? 'red' : 'inherit',
            marginBottom: 20
          }}
          values={username}
        />
        <br />
        <Link to={EMAIL_FORM}>Next</Link>
      </div>
      <div>
        <Resume />
      </div>
    </div>
  );
};

export default Name;
