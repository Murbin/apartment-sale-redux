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
      <div>
        <Field
          type="text"
          name="address"
          placeholder="Colombia, Bogota, Puerto Lopez, K 7 #51"
          onChange={(val) => {
            handleChange(val);
            updateValFromStore('address', val);
          }}
          style={{
            borderColor: errors?.address && touched.address ? 'red' : 'inherit',
            marginBottom: 20
          }}
          values={address}
        />
        <br />
        <Link to={EMAIL_FORM}>Previous</Link>
        <br />
        <Link to={FLOOR_FORM}>Next</Link>
      </div>
      <div>
        <Resume />
      </div>
    </div>
  );
};

export default Address;
