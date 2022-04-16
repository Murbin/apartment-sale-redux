import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesForm from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <RoutesForm />
    </BrowserRouter>
  );
};

export default App;
