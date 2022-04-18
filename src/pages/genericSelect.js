import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Field } from 'formik';
import Resume from './resume';
import PreviousNextStep from '../components/nextPreviousStep';
import {
  ContainerMain,
  ContainerInput,
  LabelInput,
  Error
} from '../assets/styles/style';
import { styleSelect } from '../utils/helper';

const GenericSelect = ({
  name,
  errors,
  handleChange,
  validateField,
  getData,
  saveData,
  previous,
  next,
  type,
  validate,
  options
}) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(saveData({ key, val }));
  }, 250);
  const data = useSelector(getData);

  return (
    <ContainerMain>
      <ContainerInput>
        <LabelInput>Floor</LabelInput>
        <Field
          as={type}
          name={name}
          onChange={(val) => {
            handleChange(val);
            updateValFromStore(name, val);
          }}
          validate={validate}
          style={styleSelect}
          values={data}
        >
          <option disabled={data ? true : false} value={undefined}>
            {type}
          </option>
          {options.map((e, idx) => (
            <option key={idx}>{e}</option>
          ))}
        </Field>
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

export default GenericSelect;
