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
import {
  ContainerMain,
  ContainerInput,
  LabelInput,
  Error
} from '../assets/styles/style';

const Email = ({ errors, validateField, handleChange }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(updateVal({ key, val }));
  }, 250);
  const email = useSelector(selectEmail);

  return (
    <ContainerMain>
      <ContainerInput>
        <LabelInput>Email</LabelInput>
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
        {errors?.email && <Error>{errors?.email}</Error>}
        <PreviousNextStep
          prev={NAME_FORM}
          nxt={ADDRESS_FORM}
          name={'email'}
          errors={errors}
          value={email}
          validate={validateField}
        />
      </ContainerInput>
      <Resume />
    </ContainerMain>
  );
};

export default Email;
