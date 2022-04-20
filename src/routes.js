import React from 'react';
import { Formik, Form } from 'formik';
import { Routes, Route } from 'react-router-dom';
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
          </Routes>
        </Form>
      );
    }}
  </Formik>
);

export default RoutesForm;
