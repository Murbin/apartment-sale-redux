import React from 'react';
import { Formik, Form } from 'formik';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as yup from 'yup';
import * as ROUTES from '../../constants/index';
import Home from '../Home';
import Name from '../wizard-form/name';
import Email from '../wizard-form/email';
import Address from '../wizard-form/address';
import Floor from '../wizard-form/floor';
import Zone from '../wizard-form/zone';
import Parking from '../wizard-form/parking';
import Price from '../wizard-form/price';
import HasElevator from '../wizard-form/hasElevator';
import Resume from '../wizard-form/resume';

const schema = yup.object().shape({
  username: yup.string().required().nullable(false),
  email: yup.string().email().required().nullable(false)
});

const WizardForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        floor: 0,
        zone: {
          bbq: false,
          comunal: false,
          entertaiment: false
        },
        parking: {
          has: 'No',
          covered: 'Si'
        },
        price: undefined,
        image: null,
        hasElevator: 'No'
      }}
      validationSchema={schema}
      onSubmit={({ setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      {(props) => {
        return (
          <Form>
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route
                path={ROUTES.WIZARD_FORM}
                element={<Navigate replace to={ROUTES.NAME_FORM} />}
              />
              <Route path={ROUTES.NAME_FORM} element={<Name {...props} />} />
              <Route path={ROUTES.EMAIL_FORM} element={<Email {...props} />} />
              <Route
                path={ROUTES.ADDRESS_FORM}
                element={<Address {...props} />}
              />
              <Route path={ROUTES.FLOOR_FORM} element={<Floor {...props} />} />
              <Route path={ROUTES.ZONE_FORM} element={<Zone {...props} />} />
              <Route
                path={ROUTES.PARKING_FORM}
                element={<Parking {...props} />}
              />
              <Route path={ROUTES.PRICE_FORM} element={<Price {...props} />} />
              <Route
                path={ROUTES.HAS_ELEVATOR_FORM}
                element={<HasElevator {...props} />}
              />
              <Route path={ROUTES.RESUME} element={<Resume />} />
            </Routes>
          </Form>
        );
      }}
    </Formik>
  );
};

export default WizardForm;
