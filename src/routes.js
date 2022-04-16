import React from 'react';
import { Formik, Form } from 'formik';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as ROUTES from '../src/utils/constants';
import Home from './pages/home';
import Name from './pages/name';
import Email from './pages/email';
import Address from './pages/address';
import Floor from './pages/floor';
import Zone from './pages/zone';
import Parking from './pages/parking';
import Price from './pages/price';
import HasElevator from './pages/hasElevator';
import Resume from './pages/resume';

const RoutesForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        floor: undefined,
        zone: {
          bbq: false,
          comunal: false,
          entertaiment: false
        },
        parking: {
          has: '',
          covered: 'No'
        },
        price: undefined,
        image: undefined,
        hasElevator: undefined
      }}
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

export default RoutesForm;
