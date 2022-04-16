import React from 'react';
import { HAS_ELEVATOR_FORM, PARKING_FORM } from '../utils/constants';
import { useDebouncedCallback } from 'use-debounce';
import { updateVal } from '../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { selectPrice } from '../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import Resume from './resume';
import { validateEmpty } from '../utils/helper';

const Price = ({ errors, touched, handleChange, validateField }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(updateVal({ key, val }));
  }, 250);
  const price = useSelector(selectPrice);

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
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          <Field
            type="number"
            name="price"
            placeholder="$100,000,000.00"
            onChange={(val) => {
              handleChange(val);
              updateValFromStore('price', val);
            }}
            validate={validateEmpty}
            style={{
              paddingLeft: 10,
              height: 40,
              fontSize: 20,
              width: 200,
              borderRadius: 4,
              borderColor:
                errors?.username && touched.username ? 'red' : 'black'
            }}
            values={price}
          />
          <p style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}>
            USD
          </p>
        </div>
        {errors?.price && (
          <p style={{ margin: 0, color: 'red' }}>{errors?.price}</p>
        )}
        <div style={{ marginTop: 20 }}>
          {' '}
          <Link
            style={{
              marginRight: 20,
              textDecoration: 'none',
              color: '#6085FC',
              fontWeight: 'bold'
            }}
            to={PARKING_FORM}
          >
            Previous
          </Link>
          <Link
            onClick={() => {
              validateField('price');
            }}
            style={{
              textDecoration: 'none',
              color: '#6085FC',
              fontWeight: 'bold'
            }}
            to={errors?.price || !price ? '#' : HAS_ELEVATOR_FORM}
          >
            Next
          </Link>
        </div>
      </div>
      <div
        style={{
          background: '#6085FC',
          height: '100vh',
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Resume />
      </div>
    </div>
  );
};

export default Price;
