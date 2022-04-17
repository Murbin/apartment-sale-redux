import React from 'react';
import { EMAIL_FORM, HOME } from '../utils/constants';
import { useDebouncedCallback } from 'use-debounce';
import {
  updateVal,
  selectName
} from '../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Field } from 'formik';
import Resume from './resume';
import { validateEmpty } from '../utils/helper';
import PreviousNextStep from '../components/nextPreviousStep';

const Name = ({ errors, handleChange, validateField }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(updateVal({ key, val }));
  }, 250);
  const username = useSelector(selectName);

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
            width: 320,
            textAlign: 'left',
            margin: '0px 0px 10px 0px'
          }}
        >
          Name
        </p>
        <Field
          type="text"
          name="username"
          placeholder="Adams Smith"
          onChange={(val) => {
            handleChange(val);
            updateValFromStore('username', val);
          }}
          validate={validateEmpty}
          style={{
            paddingLeft: 10,
            height: 40,
            fontSize: 20,
            width: 300,
            borderRadius: 4,
            borderColor: 'black'
          }}
          values={username}
        />
        {errors?.username && (
          <p style={{ margin: 0, color: 'red' }}>{errors?.username}</p>
        )}
        <PreviousNextStep
          prev={HOME}
          nxt={EMAIL_FORM}
          name={'username'}
          errors={errors}
          value={username}
          validate={validateField}
        />
      </div>
      <Resume />
    </div>
  );
};

export default Name;
