import React, {useEffect} from 'react';
import { NativeRouter, Route } from "react-router-native";
import { useAuth } from './src/context/AuthCtx';
import ThemeProvider from './src/context/ThemeCtx';
import MainLayout from './src/layouts/MainLayout';
import Account from './src/pages/Account';
import Payback from './src/pages/Payback';
import RegForm from './src/pages/RegForm';
import Settings from './src/pages/Settings';
import SignIn from './src/pages/SignIn';
import Tables from './src/pages/Tables';

export default function Routes() {

    const {isAuth} = useAuth();

  return (
      <ThemeProvider>
        <NativeRouter>
          <MainLayout>
            {isAuth && 
            <Route exact path='/' component={Account}/> || 
            <Route exact path='/' component={SignIn}/> }
            {isAuth && <Route path='/tables' component={Tables}/>}
            {isAuth && <Route path='/settings' component={Settings}/>}
            {isAuth && <Route path='/payback' component={Payback}/>}
            {isAuth && <Route path='/RegForm' component={RegForm}/>}
          </MainLayout>
        </NativeRouter>
      </ThemeProvider>
  );
}