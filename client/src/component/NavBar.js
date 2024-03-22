import React, {useContext} from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import '../style/navBar.css'

const NavBar = observer(() => {

  const {device} = useContext(Context)

  return (
        <div className='header'>
            <h1 className='header-text'>DeviceStore</h1>
            <a href='/' className='nav-item'>ГЛАВНАЯ</a>
            <a href='/basket' className='nav-item'>КОРЗИНА</a>
            {device.basketCount !== 0 && 
            <div className='b-count'>{device.basketCount}</div>
            }
            <a href='/login' className='nav-btn'>ВОЙТИ</a>
        </div>
  );
})

export default NavBar;