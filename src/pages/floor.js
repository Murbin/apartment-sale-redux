import React from 'react';
import { ADDRESS_FORM, ZONE_FORM } from '../utils/constants';
import { floors, validateEmpty } from '../utils/helper';
import { useDebouncedCallback } from 'use-debounce';
import { updateVal } from '../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { selectFloor } from '../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { Field } from 'formik';
import Resume from './resume';
import PreviousNextStep from '../components/nextPreviousStep';

const Floor = ({ errors, handleChange, validateField }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(updateVal({ key, val }));
  }, 250);
  const floor = useSelector(selectFloor);

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
          Floor
        </p>
        <Field
          as="select"
          name="floor"
          onChange={(val) => {
            handleChange(val);
            updateValFromStore('floor', val);
          }}
          validate={validateEmpty}
          style={{
            paddingLeft: 10,
            height: 40,
            fontSize: 20,
            width: 100,
            borderRadius: 4,
            borderColor: 'black'
          }}
          values={floor}
        >
          <option disabled={floor ? true : false} value={undefined}>
            Select
          </option>
          {floors.map((e, idx) => (
            <option key={idx}>{e}</option>
          ))}
        </Field>
        {errors?.floor && (
          <p style={{ margin: 0, color: 'red' }}>{errors?.floor}</p>
        )}
        <PreviousNextStep
          prev={ADDRESS_FORM}
          nxt={ZONE_FORM}
          name={'floor'}
          errors={errors}
          value={floor}
          validate={validateField}
        />
      </div>
      <Resume />
    </div>
  );
};

export default Floor;
