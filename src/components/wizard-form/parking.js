import React from 'react';
import { ZONE_FORM, PRICE_FORM } from '../../constants/index';
import { useDebouncedCallback } from 'use-debounce';
import {
  updateValSelect,
  selectParking
} from '../../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import { options } from '../../constants/helper';
import Resume from './resume';

const Parking = ({ errors, touched, handleChange }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val, child) => {
    dispatch(updateValSelect({ key, val, child }));
  }, 250);
  const parking = useSelector(selectParking);

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
            margin: '0px 0px 10px 0px'
          }}
        >
          Has Parking?
        </p>
        <Field
          as="select"
          name="has"
          onChange={(val) => {
            handleChange(val);
            updateValFromStore('parking', val, 'has');
          }}
          style={{
            paddingLeft: 10,
            height: 40,
            fontSize: 20,
            width: 60,
            borderRadius: 4,
            borderColor: errors?.email && touched.email ? 'red' : 'black',
            marginBottom: 40
          }}
          values={parking.has}
        >
          {options.map((e, idx) => (
            <option key={idx}>{e}</option>
          ))}
        </Field>

        {parking?.has === 'Si' && (
          <>
            <p
              style={{
                fontSize: 22,
                margin: '0px 0px 10px 0px'
              }}
            >
              Covered Parking?
            </p>
            <Field
              as="select"
              name="covered"
              onChange={(val) => {
                handleChange(val);
                updateValFromStore('parking', val, 'covered');
              }}
              style={{
                paddingLeft: 10,
                height: 40,
                fontSize: 20,
                width: 60,
                borderRadius: 4,
                borderColor: errors?.email && touched.email ? 'red' : 'black',
                marginBottom: 40
              }}
              values={parking.covered}
            >
              {options.map((e, idx) => (
                <option key={idx}>{e}</option>
              ))}
            </Field>
          </>
        )}
        <div>
          {' '}
          <Link
            style={{
              marginRight: 20,
              textDecoration: 'none',
              color: '#6085FC',
              fontWeight: 'bold'
            }}
            to={ZONE_FORM}
          >
            Previous
          </Link>
          <Link
            style={{
              textDecoration: 'none',
              color: '#6085FC',
              fontWeight: 'bold'
            }}
            to={PRICE_FORM}
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

export default Parking;
