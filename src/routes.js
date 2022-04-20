import React from 'react';
import { Formik, Form } from 'formik';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as ROUTES from '../src/utils/constants';
import Home from './pages/home';
import Image from './pages/image';
import HasElevator from './pages/hasElevator';
import FinalReview from './pages/finalReview';
import { Steps } from '../src/components/Steps';

const RoutesForm = () => (
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
            {/* From here three steps were refactored to a generic component from a json. It's not over due to time */}
            {Steps.content.body.map((e, key) => {
              return (
                <Route
                  key={key}
                  path={e.path}
                  element={React.createElement(e.component, {
                    ...props,
                    name: e.name,
                    getData: e.getData,
                    saveData: e.saveData,
                    previous: e.previous,
                    next: e.next,
                    placeholder: e.placeholder,
                    type: e.type,
                    validate: e.validate,
                    options: e.options,
                    choice: e.choice,
                    child: e.child,
                    subItem: e.subItem,
                    items: e.items
                  })}
                />
              );
            })}

            <Route path={ROUTES.IMAGE_FORM} element={<Image {...props} />} />
            <Route
              path={ROUTES.HAS_ELEVATOR_FORM}
              element={<HasElevator {...props} />}
            />
            <Route path={ROUTES.RESUME} element={<FinalReview />} />
          </Routes>
        </Form>
      );
    }}
  </Formik>
);

export default RoutesForm;
