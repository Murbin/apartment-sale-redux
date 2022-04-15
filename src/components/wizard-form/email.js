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
          style={{
            paddingLeft: 10,
            height: 40,
            fontSize: 20,
            width: 300,
            borderRadius: 4,
            borderColor: errors?.email && touched.email ? 'red' : 'black',
            marginBottom: 20
          }}
          values={email}
        />
        <div>
          {' '}
          <Link
            style={{
              marginRight: 20,
              textDecoration: 'none',
              color: '#6085FC',
              fontWeight: 'bold'
            }}
            to={NAME_FORM}
          >
            Previous
          </Link>
          <Link
            style={{
              textDecoration: 'none',
              color: '#6085FC',
              fontWeight: 'bold'
            }}
            to={ADDRESS_FORM}
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

export default Email;
