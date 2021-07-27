import React from 'react';
import Routes from './Routes';
import AuthProvider from './src/context/AuthCtx';

export default function App() {

  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}