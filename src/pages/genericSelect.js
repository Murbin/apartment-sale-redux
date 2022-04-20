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
  ItemZone,
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
  options,
  subItem,
  items
}) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val, child) => {
    dispatch(saveData({ key, val, child }));
  }, 250);
  const data = useSelector(getData);
  console.log('errors', errors);
  return (
    <ContainerMain>
      <ContainerInput>
        {items.map((e, i) => {
          return (
            <ItemZone key={i}>
              {e.childName === 'covered' && data.has !== 'Yes' ? (
                <></>
              ) : (
                <>
                  <LabelInput>{e.label}</LabelInput>
                  <Field
                    as={type}
                    name={e.section}
                    onChange={(val) => {
                      handleChange(val);
                      updateValFromStore(name, val, e.childName);
                    }}
                    validate={e.childName !== 'covered' && validate}
                    style={styleSelect}
                    values={subItem ? data[e.childName] : data}
                  >
                    <option
                      disabled={
                        subItem ? data[e.childName] : data ? true : false
                      }
                      value={undefined}
                    >
                      {type}
                    </option>
                    {options.map((e, idx) => (
                      <option key={idx}>{e}</option>
                    ))}
                  </Field>
                  {subItem
                    ? errors[e.childName] && (
                        <Error>{errors[e.childName]}</Error>
                      )
                    : errors[name] && <Error>{errors[name]}</Error>}
                </>
              )}
            </ItemZone>
          );
        })}
        <PreviousNextStep
          prev={previous}
          nxt={next}
          name={subItem ? 'has' : name}
          errors={errors}
          value={subItem ? data.has : data}
          validate={validateField}
        />
      </ContainerInput>
      <Resume />
    </ContainerMain>
  );
};

export default GenericSelect;
