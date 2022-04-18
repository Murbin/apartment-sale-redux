import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useDispatch, useSelector } from 'react-redux';
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

const Generic = ({
  name,
  errors,
  handleChange,
  validateField,
  getData,
  saveData,
  previous,
  next,
  placeholder,
  type,
  validate
}) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(saveData({ key, val }));
  }, 250);
  const data = useSelector(getData);

  return (
    <ContainerMain>
      <ContainerInput>
        <LabelInput>{name.toLocaleUpperCase()}</LabelInput>
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={(val) => {
            handleChange(val);
            updateValFromStore(name, val);
          }}
          validate={validate}
          style={{
            paddingLeft: 10,
            height: 40,
            fontSize: 20,
            width: 300,
            borderRadius: 4,
            borderColor: 'black'
          }}
          values={data}
        />
        {errors[name] && <Error>{errors[name]}</Error>}
        <PreviousNextStep
          prev={previous}
          nxt={next}
          name={name}
          errors={errors}
          value={data}
          validate={validateField}
        />
      </ContainerInput>
      <Resume />
    </ContainerMain>
  );
};

export default Generic;
