import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import WizardForm from './components/wizard-form';

const App = () => {
  return (
    <BrowserRouter>
      <WizardForm />
    </BrowserRouter>
  );
};

export default App;
