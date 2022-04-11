import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ROUTES from '../src/constants/index';
import Home from './components/Home';
import WizardForm from './components/WizardForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.WIZARD_FORM} element={<WizardForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
