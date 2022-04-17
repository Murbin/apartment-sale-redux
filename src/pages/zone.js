import React from 'react';
import { FLOOR_FORM, PARKING_FORM } from '../utils/constants';
import { useDebouncedCallback } from 'use-debounce';
import { updateVal } from '../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { selectZone } from '../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { Field } from 'formik';
import Resume from './resume';
import PreviousNextStep from '../components/nextPreviousStep';

const Zone = ({ errors, touched, values, handleChange }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val, child) => {
    dispatch(updateVal({ key, val, child }));
  }, 250);
  const zone = useSelector(selectZone);

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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            width: '80%',
            margin: '0 auto'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%'
            }}
          >
            {' '}
            <p
              style={{
                fontSize: 20,
                margin: '0px 0px 10px 0px'
              }}
            >
              Zone BBQ
            </p>
            <Field
              type="checkbox"
              name="bbq"
              onChange={(val) => {
                handleChange(val);
                updateValFromStore('zone', val, 'bbq');
              }}
              style={{
                borderColor: errors?.floor && touched.floor ? 'red' : 'inherit',
                marginBottom: 20
              }}
              values={zone.bbq ? 'true' : 'false'}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%'
            }}
          >
            <p
              style={{
                fontSize: 20,
                margin: '0px 0px 10px 0px'
              }}
            >
              Comunal
            </p>

            <Field
              type="checkbox"
              name="comunal"
              onChange={(val) => {
                handleChange(val);
                updateValFromStore('zone', val, 'comunal');
              }}
              style={{
                borderColor: errors?.floor && touched.floor ? 'red' : 'inherit',
                marginBottom: 20
              }}
              values={zone.comunal ? 'true' : 'false'}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%'
            }}
          >
            <p
              style={{
                fontSize: 20,
                margin: '0px 0px 10px 0px'
              }}
            >
              Entertainment
            </p>

            <Field
              type="checkbox"
              name="entertainment"
              onChange={(val) => {
                handleChange(val);
                updateValFromStore('zone', val, 'entertainment');
              }}
              style={{
                borderColor: errors?.floor && touched.floor ? 'red' : 'inherit',
                marginBottom: 20
              }}
              values={zone.entertainment ? 'true' : 'false'}
            />
          </div>
        </div>
        <PreviousNextStep
          prev={FLOOR_FORM}
          nxt={PARKING_FORM}
          name={'zone'}
          errors={errors}
          value={'zone'}
          validate={() => {}}
        />
      </div>
      <Resume />
    </div>
  );
};

export default Zone;
