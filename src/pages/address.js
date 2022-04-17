import React from 'react';
import { EMAIL_FORM, FLOOR_FORM } from '../utils/constants';
import { useDebouncedCallback } from 'use-debounce';
import { updateVal } from '../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { selectAddress } from '../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { Field } from 'formik';
import Resume from './resume';
import { validateEmpty } from '../utils/helper';
import PreviousNextStep from '../components/nextPreviousStep';

const Address = ({ errors, touched, handleChange, validateField }) => {
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
          validate={validateEmpty}
          style={{
            paddingLeft: 10,
            height: 40,
            fontSize: 20,
            width: '70%',
            borderRadius: 4,
            borderColor: 'black'
          }}
          values={address}
        />
        {errors?.address && (
          <p style={{ margin: 0, color: 'red' }}>{errors?.address}</p>
        )}
        <PreviousNextStep
          prev={EMAIL_FORM}
          nxt={FLOOR_FORM}
          name={'address'}
          errors={errors}
          value={address}
          validate={validateField}
        />
      </div>
      <Resume />
    </div>
  );
};

export default Address;
