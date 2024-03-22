import React from 'react'
import {Route, Routes} from 'react-router-dom'
import shop from '../pages/Shop';
import basket from '../pages/Basket';
import Regist from '../pages/regist';
import Login from '../pages/login';

function AppRoute() {
  return (
    <Routes>
      <Route path='/' Component={shop}/>
      <Route path='/basket' Component={basket}/>
      <Route path='/regist' Component={Regist}/>
      <Route path='/login' Component={Login}/>
    </Routes>
  );
}

export default AppRoute;