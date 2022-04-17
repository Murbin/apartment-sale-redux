import React, { useEffect } from 'react';
import { IMAGE_FORM, PARKING_FORM } from '../utils/constants';
import { useDebouncedCallback } from 'use-debounce';
import { updateVal } from '../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { selectPrice } from '../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import Resume from './resume';
import PreviousNextStep from '../components/nextPreviousStep';

const Price = ({ errors, handleChange, validateField }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(updateVal({ key, val }));
  }, 250);
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
  const onBlur = (e) => {
    var options = {
      currency: 'USD',
      style: 'currency',
      currencyDisplay: 'symbol'
    };

    e.target.value = price
      ? localStringToNumber(price).toLocaleString(undefined, options)
      : '';
  };

  const onfocus = (e) => {
    e.target.value = price ? localStringToNumber(price) : '';
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          height: '100vh',
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <p
          style={{
            fontSize: 22,
            textAlign: 'left',
            margin: '0px 0px 10px 0px'
          }}
        >
          Price
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <input
            // name="price"
            placeholder="$100,000,000.00"
            id="coin"
            type="currency"
            // value={price}
            style={{
              paddingLeft: 10,
              height: 40,
              fontSize: 20,
              minWidth: 200,
              borderRadius: 4,
              borderColor: 'black'
            }}
            onChange={(val) => {
              handleChange(val);
              updateValFromStore('price', val);
            }}
            onFocus={(e) => {
              onfocus(e);
            }}
            onBlur={(e) => onBlur(e)}
          />
          <p
            style={{
              fontSize: 22,
              marginLeft: 10,
              fontWeight: 'bold'
            }}
          >
            US$
          </p>
        </div>

        {errors?.price && (
          <p style={{ margin: 0, color: 'red' }}>{errors?.price}</p>
        )}
        <PreviousNextStep
          prev={PARKING_FORM}
          nxt={IMAGE_FORM}
          name={'price'}
          errors={errors}
          value={price}
          validate={validateField}
        />
      </div>
      <Resume />
    </div>
  );
};

export default Price;
