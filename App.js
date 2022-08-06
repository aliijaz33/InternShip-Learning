/* eslint-disable prettier/prettier */
import React from 'react';

import { AuthProvider } from './Context/AuthContext';
import AppNav from './Navigation/AppNav';



const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>

  );
};




export default App;
