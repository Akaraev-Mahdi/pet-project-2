import React, {useEffect, useContext} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {check} from "./http/userApi";
import AppRoute from './component/appRouter'
import NavBar from './component/NavBar';
import {observer} from "mobx-react-lite";
import { getDevice } from './http/deviceApi'
import {Context} from "./index";
import { jwtDecode } from "jwt-decode";

const App = observer(() => {

  const {device} = useContext(Context)
  var user = localStorage.getItem('token')

  if(user){
    user = jwtDecode(user)
  }

  useEffect(() => {
    if(user){
      getDevice(user.id).then((obj) => {device.setBasketCount(obj.length)})
    }
    check().then(obj => device.setIsAuth(true))
  }, [])

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRoute/>
    </BrowserRouter>
  );
})

export default App;
