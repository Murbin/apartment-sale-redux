import React, { useEffect } from 'react';
import { IMAGE_FORM, PARKING_FORM } from '../utils/constants';
import { useDebouncedCallback } from 'use-debounce';
import { updateVal } from '../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { selectPrice } from '../features/profileSale/profileSaleSlice';
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

const Price = ({ errors, handleChange, validateField }) => {
  const { setErrors } = useFormikContext();
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(updateVal({ key, val }));
  }, 20);
  const price = useSelector(selectPrice);

  const localStringToNumber = (s) => {
    return Number(String(s).replace(/[^0-9.-]+/g, ''));
  };

  useEffect(() => {
    document.getElementById('coin').value = price
      ? localStringToNumber(price).toLocaleString(undefined, {
          currency: 'USD',
          style: 'currency'
        })
      : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBlur = useDebouncedCallback((e) => {
    handleValidate({ target: { value: price } });
    var options = {
      currency: 'USD',
      style: 'currency',
      currencyDisplay: 'symbol'
    };

    e.target.value = price
      ? localStringToNumber(price).toLocaleString(undefined, options)
      : '';
  }, 100);

  const onfocus = useDebouncedCallback((e) => {
    e.target.value = price ? localStringToNumber(price) : '';
  }, 50);

  const handleValidate = (e) => {
    let numeric = e.target.value;
    let regex = /^-?\d+\.?\d*$/;
    if (!e.target.value) {
      setErrors({ price: 'Required field' });
      return;
    }
    if (!regex.test(numeric)) {
      setErrors({ price: 'Field not valid' });
      return;
    }
  };

  return (
    <ContainerMain>
      <ContainerInput>
        <LabelInput>Price</LabelInput>
        <input
          placeholder="$100,000,000.00"
          id="coin"
          type="currency"
          style={{
            paddingLeft: 10,
            height: 40,
            fontSize: 20,
            minWidth: 300,
            borderRadius: 4,
            borderColor: 'black'
          }}
          onChange={(val) => {
            handleChange(val);
            updateValFromStore('price', val);
          }}
          onFocus={(e) => onfocus(e)}
          onBlur={(e) => onBlur(e)}
        />

        {errors?.price && <Error>{errors?.price}</Error>}
        <PreviousNextStep
          prev={PARKING_FORM}
          nxt={IMAGE_FORM}
          name={'price'}
          errors={errors}
          value={price}
          validate={validateField}
        />
      </ContainerInput>
      <Resume />
    </ContainerMain>
  );
};

export default Price;
