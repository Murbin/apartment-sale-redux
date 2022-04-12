import React from 'react';
import { FLOOR_FORM, PARKING_FORM } from '../../constants/index';
import { useDebouncedCallback } from 'use-debounce';
import { updateVal } from '../../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { selectZone } from '../../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import Resume from './resume';

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
      <div>
        <p>Zone BBQ</p>
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
        <p>Comunal</p>
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
        <p>Entertainment</p>
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
        <br />
        <Link to={FLOOR_FORM}>Previous</Link>
        <br />
        <Link to={PARKING_FORM}>Next</Link>
      </div>
      <div>
        <Resume />
      </div>
    </div>
  );
};

export default Zone;
