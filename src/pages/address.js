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
import {
  ContainerMain,
  ContainerInput,
  LabelInput,
  Error
} from '../assets/styles/style';

const Address = ({ errors, touched, handleChange, validateField }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(updateVal({ key, val }));
  }, 250);
  const address = useSelector(selectAddress);
  console.log('address', address);
  return (
    <ContainerMain>
      <ContainerInput>
        <LabelInput>Address</LabelInput>
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
        {errors?.address && <Error>{errors?.address}</Error>}
        <PreviousNextStep
          prev={EMAIL_FORM}
          nxt={FLOOR_FORM}
          name={'address'}
          errors={errors}
          value={address}
          validate={validateField}
        />
      </ContainerInput>
      <Resume />
    </ContainerMain>
  );
};

export default Address;
