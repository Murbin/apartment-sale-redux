import React from 'react';
import { ADDRESS_FORM, ZONE_FORM } from '../../constants/index';
import { floors } from '../../constants/helper';
import { useDebouncedCallback } from 'use-debounce';
import { updateVal } from '../../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { selectFloor } from '../../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import Resume from './resume';

const Floor = ({ errors, touched, handleChange }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(updateVal({ key, val }));
  }, 250);
  const floor = useSelector(selectFloor);
  console.log('floor', floor);
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
        <p>Floor</p>
        <Field
          as="select"
          name="floor"
          onChange={(val) => {
            handleChange(val);
            updateValFromStore('floor', val);
          }}
          style={{
            borderColor: errors?.floor && touched.floor ? 'red' : 'inherit',
            marginBottom: 20
          }}
          values={floor}
        >
          {floors.map((e, idx) => (
            <option key={idx}>{e}</option>
          ))}
        </Field>
        <br />
        <Link to={ADDRESS_FORM}>Previous</Link>
        <br />
        <Link to={ZONE_FORM}>Next</Link>
      </div>
      <div>
        <Resume />
      </div>
    </div>
  );
};

export default Floor;
