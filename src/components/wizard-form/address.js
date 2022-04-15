import React from 'react';
import { EMAIL_FORM, FLOOR_FORM } from '../../constants/index';
import { useDebouncedCallback } from 'use-debounce';
import { updateVal } from '../../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { selectAddress } from '../../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import Resume from './resume';

const Address = ({ errors, touched, handleChange }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(updateVal({ key, val }));
  }, 250);
  const address = useSelector(selectAddress);

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
            width: '72%',
            textAlign: 'left',
            margin: '0px 0px 10px 0px'
          }}
        >
          Address
        </p>
        <Field
          type="text"
          name="address"
          placeholder="Colombia, Bogota, Puerto Lopez, K 7 #51"
          onChange={(val) => {
            handleChange(val);
            updateValFromStore('address', val);
          }}
          style={{
            paddingLeft: 10,
            height: 40,
            fontSize: 20,
            width: '70%',
            borderRadius: 4,
            borderColor: errors?.email && touched.email ? 'red' : 'black',
            marginBottom: 40
          }}
          values={address}
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
            to={EMAIL_FORM}
          >
            Previous
          </Link>
          <Link
            style={{
              textDecoration: 'none',
              color: '#6085FC',
              fontWeight: 'bold'
            }}
            to={FLOOR_FORM}
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

export default Address;
