import React, { useEffect } from 'react';
import {
  localStringToNumber,
  configUSD,
  handleValidate
} from '../utils/helper';
import { useDebouncedCallback } from 'use-debounce';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Resume from './resume';
import PreviousNextStep from '../components/nextPreviousStep';
import { useFormikContext } from 'formik';
import {
  ContainerMain,
  ContainerInput,
  LabelInput,
  Error
} from '../assets/styles/style';
import { styleInput } from '../utils/helper';

const Price = ({
  name,
  errors,
  handleChange,
  getData,
  saveData,
  previous,
  next,
  placeholder,
  type
}) => {
  const { setErrors } = useFormikContext();
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(saveData({ key, val }));
  }, 10);
  const data = useSelector(getData);

  useEffect(() => {
    document.getElementById('coin').value = data
      ? localStringToNumber(data).toLocaleString(undefined, configUSD)
      : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBlur = useDebouncedCallback((e) => {
    handleValidate({ target: { value: data } }, setErrors);
    e.target.value = data
      ? localStringToNumber(data).toLocaleString(undefined, configUSD)
      : '';
  }, 100);

  const onfocus = useDebouncedCallback((e) => {
    e.target.value = data ? localStringToNumber(data) : '';
  }, 50);

  return (
    <ContainerMain>
      <ContainerInput>
        <LabelInput>Price</LabelInput>
        <input
          placeholder={placeholder}
          id="coin"
          type={type}
          style={styleInput}
          onChange={(val) => {
            handleChange(val);
            updateValFromStore(name, val);
          }}
          onFocus={(e) => onfocus(e)}
          onBlur={(e) => onBlur(e)}
        />
        {errors[name] && <Error>{errors[name]}</Error>}
        <PreviousNextStep
          prev={previous}
          nxt={next}
          name={name}
          errors={errors}
          value={data}
          validate={handleValidate}
        />
      </ContainerInput>
      <Resume />
    </ContainerMain>
  );
};

export default Price;
