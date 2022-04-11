import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateVal } from '../../features/profileSale/profileSaleSlice';
import * as yup from 'yup';
import { useDebouncedCallback } from 'use-debounce';
import {
  selectEmail,
  selectName
} from '../../features/profileSale/profileSaleSlice';

const schema = yup.object().shape({
  username: yup.string().required().nullable(false),
  email: yup.string().email().required().nullable(false)
});

const WizardForm = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const username = useSelector(selectName);
  const updateValFromStore = useDebouncedCallback((key, val) => {
    // console.log({ key, val });
    dispatch(updateVal({ key, val }));
  }, 250);

  return (
    <Formik
      initialValues={{
        username,
        email
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        setFieldValue,
        handleBlur,
        handleSubmit,
        isValid
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <input
              size="lg"
              type="text"
              name="username"
              placeholder="username"
              style={{
                borderColor:
                  errors.username && touched.username ? 'red' : 'inherit',
                marginBottom: 20
              }}
              onChange={(val, event) => {
                setFieldValue(event);
                updateValFromStore('username', val);
              }}
              onBlur={handleBlur}
              value={values.username}
            />
            <input
              size="lg"
              type="email"
              name="email"
              placeholder="email"
              style={{
                borderColor: errors.email && touched.email ? 'red' : 'inherit',
                marginBottom: 20
              }}
              onChange={(val, event) => {
                console.log('event', event);
                console.log('val', val);
                setFieldValue(event);
                updateValFromStore('email', val);
              }}
              onBlur={handleBlur}
              value={values.email}
            />
            <button type="submit" disabled={!isValid}>
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default WizardForm;
