import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import {
  selectHasElevator,
  updateVal
} from '../features/profileSale/profileSaleSlice';
import { IMAGE_FORM, RESUME } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Field } from 'formik';
import { options, validateEmpty } from '../utils/helper';
import Resume from './resume';
import PreviousNextStep from '../components/nextPreviousStep';
import {
  ContainerMain,
  ContainerInput,
  LabelInput,
  Error
} from '../assets/styles/style';

const HasElevator = ({ errors, validateField, handleChange }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val, child) => {
    dispatch(updateVal({ key, val, child }));
  }, 250);
  const hasElevator = useSelector(selectHasElevator);

  return (
    <ContainerMain>
      <ContainerInput>
        <LabelInput>Has an elevator?</LabelInput>
        <Field
          as="select"
          name="hasElevator"
          onChange={(val) => {
            console.log('val', val);
            handleChange(val);
            updateValFromStore('hasElevator', val);
          }}
          validate={validateEmpty}
          style={{
            paddingLeft: 10,
            height: 40,
            fontSize: 20,
            width: 100,
            borderRadius: 4,
            borderColor: 'black'
          }}
          values={hasElevator}
        >
          <option disabled={hasElevator ? true : false} value={undefined}>
            Select
          </option>
          {options.map((e, idx) => (
            <option key={idx}>{e}</option>
          ))}
        </Field>
        {errors?.hasElevator && <Error>{errors?.hasElevator}</Error>}
        <PreviousNextStep
          prev={IMAGE_FORM}
          nxt={RESUME}
          name={'hasElevator'}
          errors={errors}
          value={hasElevator}
          validate={validateField}
        />
      </ContainerInput>
      <Resume />
    </ContainerMain>
  );
};

export default HasElevator;
