import React from 'react';
import { EMAIL_FORM, HOME } from '../utils/constants';
import { useDebouncedCallback } from 'use-debounce';
import {
  updateVal,
  selectName
} from '../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
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

const Name = ({ errors, handleChange, validateField }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(updateVal({ key, val }));
  }, 250);
  const username = useSelector(selectName);

  return (
    <ContainerMain>
      <ContainerInput>
        <LabelInput>Name</LabelInput>
        <Field
          type="text"
          name="username"
          placeholder="Adams Smith"
          onChange={(val) => {
            handleChange(val);
            updateValFromStore('username', val);
          }}
          validate={validateEmpty}
          style={{
            paddingLeft: 10,
            height: 40,
            fontSize: 20,
            width: 300,
            borderRadius: 4,
            borderColor: 'black'
          }}
          values={username}
        />
        {errors?.username && <Error>{errors?.username}</Error>}
        <PreviousNextStep
          prev={HOME}
          nxt={EMAIL_FORM}
          name={'username'}
          errors={errors}
          value={username}
          validate={validateField}
        />
      </ContainerInput>
      <Resume />
    </ContainerMain>
  );
};

export default Name;
