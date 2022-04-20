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
  ContainerZone,
  ItemZone,
  LabelInput
} from '../assets/styles/style';

const GenericCheckbox = ({
  name,
  errors,
  handleChange,
  getData,
  saveData,
  previous,
  next,
  type,
  options
}) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val, child) => {
    dispatch(saveData({ key, val, child }));
  }, 250);
  const data = useSelector(getData);

  return (
    <ContainerMain>
      <ContainerInput>
        <ContainerZone>
          {options.map((e, key) => {
            return (
              <ItemZone key={key}>
                <LabelInput>{e.section}</LabelInput>
                <Field
                  type={type}
                  name={e.section}
                  onChange={(val) => {
                    handleChange(val);
                    updateValFromStore(name, val, e.section);
                  }}
                  style={{ marginBottom: 20 }}
                  values={data[e.section] ? 'true' : 'false'}
                />
              </ItemZone>
            );
          })}
        </ContainerZone>
        <PreviousNextStep
          prev={previous}
          nxt={next}
          name={name}
          errors={errors}
          value={data}
          validate={() => {}}
        />
      </ContainerInput>
      <Resume />
    </ContainerMain>
  );
};

export default GenericCheckbox;
